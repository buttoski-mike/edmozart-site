import { NextResponse } from "next/server";
import ICAL from "ical.js";

export async function GET() {
  try {
    // We are using a sample public US Holidays calendar for testing.
    // Replace this with the actual Apple/Google Calendar .ics link.
    const calendarUrl = "https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics";
    
    // Fetch the calendar
    const response = await fetch(calendarUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.statusText}`);
    }
    const icsData = await response.text();
    
    // Parse the ICS data
    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents("vevent");
    
    const bookedDates = [];
    
    // Iterate through all events and extract dates
    vevents.forEach(vevent => {
      const event = new ICAL.Event(vevent);
      if (event.startDate) {
        // Get the date string in YYYY-MM-DD format
        const dateStr = event.startDate.toString().split('T')[0];
        if (!bookedDates.includes(dateStr)) {
          bookedDates.push(dateStr);
        }
      }
    });

    return NextResponse.json({ bookedDates });
  } catch (error) {
    console.error("Error fetching calendar:", error);
    return NextResponse.json({ bookedDates: [] }, { status: 500 });
  }
}
