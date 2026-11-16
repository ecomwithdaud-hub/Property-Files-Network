import { NextRequest, NextResponse } from "next/server";
import { INITIAL_CRM_LEADS, Lead } from "@/lib/data";

// In-memory store for API requests during server runtime
let serverLeads: Lead[] = [...INITIAL_CRM_LEADS];

export async function GET() {
  return NextResponse.json({
    leads: serverLeads,
    totalCount: serverLeads.length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newLead: Lead = {
      id: body.id || `LD-${Math.floor(1050 + Math.random() * 9000)}`,
      clientName: body.clientName || "Prospective Client",
      phone: body.phone || "+92 300 0000000",
      email: body.email || "propertyfilesnetwork@gmail.com",
      originType: body.originType || "Pakistan",
      countryCity: body.countryCity || "Lahore, Pakistan",
      propertyCategory: body.propertyCategory || "MGH Affidavit Files",
      specificProject:
        body.specificProject ||
        "Mangla Garrison Housing (MGH Pakistan)",
      preferredUnitType: body.preferredUnitType || "1 Kanal MGH Affidavit File",
      budgetDisplay: body.budgetDisplay || "PKR 65 Lakh – 95 Lakh",
      estimatedValuePKR: Number(body.estimatedValuePKR) || 85,
      assignedAgent: body.assignedAgent || "M Talha Cheema (Co-Founder)",
      stage: body.stage || "new",
      priority: body.priority || "High",
      notes: Array.isArray(body.notes)
        ? body.notes
        : [body.notes || "Inbound inquiry submitted via propertyfilesnetwork.com website portal."],
      createdAt: new Date().toISOString().split("T")[0],
      lastContacted: "Just now",
    };

    serverLeads = [newLead, ...serverLeads];
    return NextResponse.json({ lead: newLead, leads: serverLeads }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid lead payload" },
      { status: 400 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, stage, assignedAgent, note } = body;

    serverLeads = serverLeads.map((lead) => {
      if (lead.id !== id) return lead;
      return {
        ...lead,
        stage: stage ?? lead.stage,
        assignedAgent: assignedAgent ?? lead.assignedAgent,
        lastContacted: "Just now",
        notes: note ? [note, ...lead.notes] : lead.notes,
      };
    });

    return NextResponse.json({ leads: serverLeads });
  } catch {
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 400 }
    );
  }
}
