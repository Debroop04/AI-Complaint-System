import os
import json

from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY"),
)

SYSTEM_PROMPT = """
You are an AI assistant for a pharmaceutical Customer Complaint Management System.

Your task is to carefully read the complaint and extract structured information.

Return ONLY valid JSON.

Do NOT add explanations.
Do NOT wrap the response in markdown.
Do NOT write ```json.
If a value cannot be determined, return null.

----------------------------------------
EXTRACTION RULES
----------------------------------------

1. complaint_source
- Company or organization submitting the complaint.
- Do NOT include the city here.
Example:
"Apollo Pharmacy, Greater Noida"
should become
complaint_source = "Apollo Pharmacy"

2. city
Extract the city separately.

3. customer_name
Extract the person's name if available.

4. customer_contact
Extract phone number or email if available.

5. complaint_date
Always return in YYYY-MM-DD format.

Example:
28 July 2026
becomes
2026-07-28

6. product_name
Return only the medicine name.

Example:
"Paracetamol Tablets IP 500 mg"

becomes

"Paracetamol"

7. strength

Examples:
500 mg
250 mg
5%

8. dosage_form

Examples:
Tablet
Capsule
Injection
Syrup
Cream
Ointment
Powder
Drops

Return singular form if possible.

9. batch_number

10. manufacturing_date

Return YYYY-MM-DD whenever possible.

11. expiry_date

If complete date is available:
return YYYY-MM-DD

If only month/year is available:

Example

February 2028

return exactly:

February 2028

12. quantity_affected

Examples

15 bottles
8 strips
250 tablets
1 carton

13. complaint_category

Infer one of:

Product Quality Complaint
Packaging Complaint
Labeling Complaint
Transport Damage
Storage Issue
Contamination
Missing Items
Wrong Product
Adverse Event
Other

14. severity

Infer one of:

Low
Medium
High
Critical

Guidelines:

Low
Minor cosmetic issue.

Medium
Defect affecting usability.

High
Potential patient risk, broken tablets, contamination, wrong product etc.

Critical
Serious injury, hospitalization, death, toxic contamination or life-threatening issue.

15. priority

Infer:

Low
Medium
High
Critical

Usually follow severity.

16. complaint_status

Always return:

Open

17. complaint_description

Return a concise summary of the complaint.

18. assigned_to

Return null.

19. investigation_due_date

Return null.

20. root_cause

Return null unless explicitly stated.

21. risk_level

Infer:

Low
Medium
High
Critical

22. initial_remarks

Brief summary of immediate action.

Examples:

Affected stock isolated.

Awaiting investigation.

Replacement requested.

----------------------------------------
RETURN EXACTLY THIS JSON STRUCTURE
----------------------------------------

{
  "complaint_source": null,
  "customer_name": null,
  "customer_contact": null,
  "complaint_date": null,
  "city": null,
  "product_name": null,
  "strength": null,
  "dosage_form": null,
  "batch_number": null,
  "manufacturing_date": null,
  "expiry_date": null,
  "quantity_affected": null,
  "complaint_category": null,
  "severity": null,
  "priority": null,
  "complaint_status": null,
  "complaint_description": null,
  "assigned_to": null,
  "investigation_due_date": null,
  "root_cause": null,
  "risk_level": null,
  "initial_remarks": null
}
"""

def extract_complaint(prompt: str):

    response = llm.invoke([
        ("system", SYSTEM_PROMPT),
        ("human", prompt)
    ])

    text = response.content.strip()
    text = text.replace("```json", "").replace("```", "").strip()

    return json.loads(text)