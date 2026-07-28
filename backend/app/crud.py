from datetime import datetime

from .db_models import Complaint


def parse_date(date_str):

    if not date_str:
        return None

    try:
        return datetime.strptime(date_str, "%Y-%m-%d").date()
    except:
        return None


def create_complaint(db, data):

    complaint = Complaint(
        complaint_source=data.get("complaint_source"),
        customer_name=data.get("customer_name"),
        customer_contact=data.get("customer_contact"),
        complaint_date=parse_date(data.get("complaint_date")),
        city=data.get("city"),
        product_name=data.get("product_name"),
        strength=data.get("strength"),
        dosage_form=data.get("dosage_form"),
        batch_number=data.get("batch_number"),
        manufacturing_date=parse_date(data.get("manufacturing_date")),
        expiry_date=parse_date(data.get("expiry_date")),
        quantity_affected=data.get("quantity_affected"),
        complaint_category=data.get("complaint_category"),
        severity=data.get("severity"),
        priority=data.get("priority"),
        complaint_status=data.get("complaint_status"),
        complaint_description=data.get("complaint_description"),
        assigned_to=data.get("assigned_to"),
        investigation_due_date=parse_date(data.get("investigation_due_date")),
        root_cause=data.get("root_cause"),
        risk_level=data.get("risk_level"),
        initial_remarks=data.get("initial_remarks")
    )

    db.add(complaint)
    db.commit()
    db.refresh(complaint)

    return complaint