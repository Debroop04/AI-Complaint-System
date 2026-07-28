import os
import json

from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY"),
    temperature=0
)

SYSTEM_PROMPT = """
You are updating an existing pharmaceutical customer complaint.

You will receive:

1. The existing complaint as a JSON object.
2. A user's correction.

Your job is to determine ONLY what fields have changed.

Rules:
If the correction changes the city, update the "city" field.

Keep complaint_source and city separate.

Example:

complaint_source = "Apollo Pharmacy"

city = "Greater Noida"

If a field is not affected by the correction, do not include it in the response.

- Return ONLY the changed fields.
- Do NOT regenerate the entire complaint.
- Do NOT modify fields that were not mentioned.
- Return valid JSON only.
- No markdown.
- No explanations.
"""

def update_complaint(old_data, correction):

    prompt = f"""
Existing Complaint:

{json.dumps(old_data, indent=2)}

User Correction:

{correction}
"""

    response = llm.invoke([
        ("system", SYSTEM_PROMPT),
        ("human", prompt)
    ])

    cleaned = response.content.strip()

    if cleaned.startswith("```"):
        cleaned = (
            cleaned.replace("```json", "")
                   .replace("```", "")
                   .strip()
        )

    return json.loads(cleaned)