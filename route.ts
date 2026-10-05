import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (name.length < 2 || phone.length < 7 || message.length < 5) {
      return NextResponse.json(
        { success: false, message: "Please provide valid contact details and an enquiry." },
        { status: 400 }
      );
    }

    // Stage 8: validated server-side. Connect this to email/database/CRM later.
    console.log("Fortune Health contact enquiry:", { name, phone, message });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to process your enquiry." },
      { status: 400 }
    );
  }
}
