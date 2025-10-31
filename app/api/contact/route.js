import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Configure transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your sending email
        pass: process.env.SMTP_PASS, // app password (not your real Gmail password)
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"AM Legacy Contact" <${process.env.SMTP_USER}>`,
      to: "info@amlegacysports.com", // your target email
      subject: `New message from ${name}`,
      html: `
        <h3>New message from the website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
