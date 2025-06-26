import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);

  // Get form data from request body
  const body = await readBody(event);
  const { name, email, phone, service, message } = body;

  const result = await resend.emails.send({
    from: "Shan Shan Peer Coaching <hello@formworkstudios.xyz>",
    to: ["mikesynan@gmail.com"],
    subject: `[PEER COACHING] New Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    text: `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Service: ${service}
      
      Message:
      ${message}
    `,
  });

  return { status: "sent", result };
});
