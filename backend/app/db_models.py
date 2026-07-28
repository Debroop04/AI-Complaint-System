from sqlalchemy import Column, Integer, String, Text, Date

from .database import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    complaint_source = Column(String(100))
    customer_name = Column(String(100))
    customer_contact = Column(String(100))
    complaint_date = Column(Date)

    city = Column(String(100))

    product_name = Column(String(150))
    strength = Column(String(50))
    dosage_form = Column(String(100))
    batch_number = Column(String(100))

    manufacturing_date = Column(Date)
    expiry_date = Column(Date)

    quantity_affected = Column(String(50))

    complaint_category = Column(String(100))
    severity = Column(String(50))
    priority = Column(String(50))
    complaint_status = Column(String(50))

    complaint_description = Column(Text)

    assigned_to = Column(String(100))
    investigation_due_date = Column(Date)

    root_cause = Column(Text)

    risk_level = Column(String(50))

    initial_remarks = Column(Text)