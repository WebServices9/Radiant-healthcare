
import { NextRequest, NextResponse } from 'next/server';
import Appointment from '@/lib/models/Appoinment';
import sequelize from '@/lib/db';
import twilio from 'twilio';



const client = twilio(process.env.TWILIO_ACCOUNT_SID!,process.env.TWILIO_AUTH_TOKEN!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time, reason, department } = body;

    if (!name || !email || !phone || !date || !time || !department) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // await sequelize.sync();
    // const newAppointment = await Appointment.create({
    //   name,
    //   email,
    //   phone,
    //   date,
    //   time,
    //   reason,
    //   department,
    // });

    const whatsappMessage = `📅 New Appointment!\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n🗓 Date: ${date}\n⏰ Time: ${time}\n🏥 Department: ${department}\n📝 Reason: ${reason || 'N/A'}`;

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to: process.env.TWILIO_WHATSAPP_TO!,
      body: whatsappMessage,
    });

    return NextResponse.json('Successfully Booked', { status: 201 });
  } catch (error: any) {
    console.error('Appointment creation failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


// export async function GET() {
//   try {
//     await sequelize.sync();
//     const appointments = await Appointment.findAll();
//     return NextResponse.json(appointments);
//   } catch (error: any) {
//     console.error('Fetching appointments failed:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


