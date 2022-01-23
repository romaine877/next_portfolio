import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_KEY);

export default function async(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const msg = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: `New message on your portfolio from ${name}`,
      text: `Email: ${email}`,
      html: `<strong>${email}</strong> <br/> <p>${message}</p>`,
    };
    try{
        sgMail.send(msg);
        res.status(200).json({
            message: "Message sent successfully"
        })
    } catch(err){
        res.status(500).json({
            message: err.message
            
        })
    }
      
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
}
