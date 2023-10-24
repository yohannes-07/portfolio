import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST (req){
    const { email, subject, message } = await req.json();
    
    console.log(email, subject, message)

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        cc: email,
        subject: subject,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                resolve('Email sent');
                } else {
                reject(err.message);
                }
            });
        });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent', status:200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}