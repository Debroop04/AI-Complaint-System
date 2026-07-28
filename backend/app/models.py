from pydantic import BaseModel
from typing import Optional


class PromptRequest(BaseModel):
    prompt: str


class UpdateRequest(BaseModel):
    old_data: dict
    correction: str


class ComplaintResponse(BaseModel):
    complaint_source: Optional[str] = None
    customer_name: Optional[str] = None
    customer_contact: Optional[str] = None
    complaint_date: Optional[str] = None
    city: Optional[str] = None

    product_name: Optional[str] = None
    strength: Optional[str] = None
    dosage_form: Optional[str] = None
    batch_number: Optional[str] = None
    manufacturing_date: Optional[str] = None
    expiry_date: Optional[str] = None
    quantity_affected: Optional[str] = None

    complaint_category: Optional[str] = None
    severity: Optional[str] = None
    priority: Optional[str] = None
    complaint_status: Optional[str] = None
    complaint_description: Optional[str] = None

    assigned_to: Optional[str] = None
    investigation_due_date: Optional[str] = None
    root_cause: Optional[str] = None
    risk_level: Optional[str] = None
    initial_remarks: Optional[str] = None