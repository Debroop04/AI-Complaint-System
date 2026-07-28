from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from .models import PromptRequest, UpdateRequest
from .graph import graph
from .update_ai import update_complaint
from .pdf import extract_text_from_pdf

from fastapi import Depends
from sqlalchemy.orm import Session

from .database import get_db
from .crud import create_complaint

app = FastAPI(
    title="AI Complaint Management API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "AI Complaint Management Backend Running 🚀"
    }


@app.post("/extract")
def extract(
    request: PromptRequest,
    db: Session = Depends(get_db)
):

    result = graph.invoke({
        "prompt": request.prompt,
        "correction": None,
        "pdf_text": None,
        "complaint_data": None
    })

    create_complaint(
        db,
        result["complaint_data"]
    )

    return result["complaint_data"]

@app.post("/update")
def update(request: UpdateRequest):

    result = graph.invoke({
        "prompt": None,
        "correction": request.correction,
        "pdf_text": None,
        "complaint_data": request.old_data
    })

    return result["complaint_data"]


@app.post("/extract-pdf")
async def extract_pdf(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    text = extract_text_from_pdf(file.file)

    result = graph.invoke({
        "prompt": text,
        "correction": None,
        "pdf_text": text,
        "complaint_data": None
    })

    create_complaint(
        db,
        result["complaint_data"]
    )

    return result["complaint_data"]