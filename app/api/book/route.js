import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Here we would integrate with Resend, SendGrid, etc.
    // For now, we will just log the mock booking.
    console.log("Booking Received:", data);
    
    // Example of what the email logic might look like:
    /*
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kael@example.com',
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
    */

    return NextResponse.json({ success: true, message: "Booking inquiry sent!" });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
