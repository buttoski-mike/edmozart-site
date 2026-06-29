import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    
    console.log("Booking Received:", data);
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: `New Booking Inquiry from ${data.name}`,
      html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Phone:</strong> ${data.phone}</p>
             <p><strong>Event:</strong> ${data.eventType}</p>
             <p><strong>Service:</strong> ${data.service}</p>
             <p><strong>Date:</strong> ${data.date} at ${data.time}</p>
             <p><strong>Location:</strong> ${data.location}</p>
             <p><strong>Details:</strong> ${data.details}</p>`
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Booking inquiry sent!" });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
