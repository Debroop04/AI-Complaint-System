# 💊 AI-Powered Pharmaceutical Customer Complaint Management System

An AI-powered web application that automates pharmaceutical customer complaint logging using **React**, **FastAPI**, **LangGraph**, **Groq LLM**, and **MySQL**.

The system allows users to enter complaints as plain text or upload complaint PDFs. The AI extracts structured complaint information, performs risk assessment, stores the complaint in a MySQL database, and automatically populates the complaint form.

---

## 🚀 Features

- 🤖 AI-powered complaint extraction
- 📄 PDF complaint upload and text extraction
- 🧠 AI-generated risk assessment
- ⚡ LangGraph workflow orchestration
- 🗄️ MySQL database integration
- 📋 Automatic complaint form population
- ✏️ Natural language complaint updates
- 🎨 Modern React frontend
- 📚 Interactive FastAPI Swagger documentation

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript

### Backend

- FastAPI
- LangGraph
- Groq LLM (Llama-3.3-70B)
- SQLAlchemy
- PyMySQL
- Pydantic

### Database

- MySQL

---

# 📌 System Architecture

```
                    User
                     │
                     ▼
             React Frontend
                     │
                     ▼
             FastAPI Backend
                     │
                     ▼
               LangGraph
          ┌─────────┴─────────┐
          │                   │
     Extract Node       Update Node
          │
          ▼
      Groq LLM
          │
          ▼
 Structured Complaint JSON
          │
          ▼
      MySQL Database
          │
          ▼
   Auto-filled Complaint Form
```

---

# 🔄 Workflow

1. User enters complaint text or uploads a PDF.
2. Frontend sends the request to FastAPI.
3. FastAPI invokes LangGraph.
4. LangGraph executes the appropriate AI node.
5. Groq LLM extracts structured complaint information.
6. Complaint is stored in MySQL.
7. Structured JSON is returned to the frontend.
8. Complaint form and AI Copilot Risk Assessment are automatically populated.

---

# 📂 Project Structure

```
AI-Complaint-System
│
├── backend
│   ├── app
│   │   ├── ai.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── db_models.py
│   │   ├── graph.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── pdf.py
│   │   └── update_ai.py
│   │
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Complaint-System.git
```

```
cd AI-Complaint-System
```

---

## Backend Setup

```
cd backend
```

Create a virtual environment

```bash
python -m venv venv
```

Activate it

### Windows

```bash
venv\Scripts\activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
DB_NAME=complaint_db

GROQ_API_KEY=your_groq_api_key
```

Run the backend

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

```
cd frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/extract` | AI complaint extraction |
| POST | `/extract-pdf` | Extract complaint from PDF |
| POST | `/update` | Update complaint using natural language |

---

# 🤖 AI Capabilities

The AI automatically extracts:

- Customer Name
- Complaint Source
- City
- Product Name
- Strength
- Dosage Form
- Batch Number
- Manufacturing Date
- Expiry Date
- Quantity Affected
- Complaint Category
- Severity
- Priority
- Risk Level
- Complaint Status
- Root Cause
- Initial Remarks

---

# 🗄 Database

Complaints are stored in MySQL using SQLAlchemy ORM.

Each complaint is automatically inserted after AI extraction.

---

# 📸 Screenshots

### Home Page

> <img width="1899" height="925" alt="image" src="https://github.com/user-attachments/assets/0bd38d48-6e06-44f6-983b-df11dab131bd" />


---

### Swagger API

> <img width="1895" height="965" alt="image" src="https://github.com/user-attachments/assets/25d90144-d39d-4aa5-8ca8-53d0ed89c823" />


---

### MySQL Database

> <img width="1610" height="942" alt="image" src="https://github.com/user-attachments/assets/445dc525-4608-4b3d-adec-ddfa78f7457a" />


---

# 🔮 Future Improvements

- Authentication & Authorization
- Role-based access
- Duplicate complaint detection
- Email notifications
- Dashboard analytics
- Complaint search & filtering
- Audit trail
- CAPA recommendation engine
- Investigation workflow

---

# 👨‍💻 Author

**Debroop Bhowmik**

LinkedIn: https://www.linkedin.com/in/debroop-bhowmik-34616932b/

GitHub: https://github.com/Debroop04

---

# ⭐ If you found this project useful, consider giving it a star!
