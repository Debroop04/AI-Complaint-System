from typing import TypedDict, Optional

from langgraph.graph import StateGraph, START, END

from .ai import extract_complaint
from .update_ai import update_complaint


class ComplaintState(TypedDict):
    prompt: Optional[str]
    correction: Optional[str]
    pdf_text: Optional[str]
    complaint_data: Optional[dict]


def extract_node(state: ComplaintState):

    complaint = extract_complaint(state["prompt"])

    state["complaint_data"] = complaint

    return state


def update_node(state: ComplaintState):

    updated = update_complaint(
        state["complaint_data"],
        state["correction"]
    )

    state["complaint_data"].update(updated)

    return state


builder = StateGraph(ComplaintState)

builder.add_node("extract", extract_node)
builder.add_node("update", update_node)


def route(state: ComplaintState):

    if state.get("correction"):
        return "update"

    return "extract"


builder.add_conditional_edges(
    START,
    route,
    {
        "extract": "extract",
        "update": "update"
    }
)

builder.add_edge("extract", END)
builder.add_edge("update", END)

graph = builder.compile()