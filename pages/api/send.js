import sgMail from "@sendgrid/mail";
import { recieving_email, sendGridApiKey, sending_email } from "../../config";

sgMail.setApiKey(sendGridApiKey);

export default (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const msg = {
      to: recieving_email,
      from: sending_email,
      subject: `New message on your portfolio from ${name}`,
      text: `Email: ${email}`,
      html: `<strong>${email}</strong> <br/> <p>${message}</p>`,
    };
    sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
    res.status(200).json({
      status: "success",
      message: "Message has been sent successfully",
    });
  })
  .catch((error) => {
    console.error(error)
    res.status(500).json({
      status: "error",
      message: error,
  })
  })
  } else {
    res.status(405).json({
      status: "error",
      message: "Method not allowed",
    });
  }
}
