import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail";
import { recieving_email, sendGridApiKey, sending_email, resendApiKey } from "../../config/config";
import { Resend } from 'resend';

sgMail.setApiKey(sendGridApiKey as string);



const resend = new Resend(resendApiKey as string);

type SendResponse = { status: "success" | "error"; message: string };

 export default function send(req: NextApiRequest, res: NextApiResponse<SendResponse>) {
  if (req.method === "POST") {
    const { name, email, message } = req.body as { name: string; email: string; message: string };
    const msg = {
      to: recieving_email as string,
      from: sending_email as string,
      subject: `New message on your portfolio from ${name}`,
      text: `Email: ${email}`,
      html: `<strong>${email}</strong> <br/> <p>${message}</p>`,
    };
    resend.emails.send({
      from: sending_email as string,
      to: recieving_email as string,
      subject: `New message on your portfolio from ${name}`,
      html: `<strong>${email}</strong> <br/> <p>${message}</p>`
    }).then(() => {
    console.log('Email sent')
    res.status(200).json({
      status: "success",
      message: "Message has been sent successfully",
    });
  })
  .catch((error: unknown) => {
    console.error(error)
    res.status(500).json({
      status: "error",
      message: "Failed to send message",
  })
  })
  } else {
    res.status(405).json({
      status: "error",
      message: "Method not allowed",
    });
  }
}


