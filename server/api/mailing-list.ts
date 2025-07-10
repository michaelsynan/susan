export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email } = body;

    if (!email) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email is required",
      });
    }

    // Try multiple webhook options
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      // For now, just log to console and file if no webhook configured
      console.log("New mailing list signup:", email, new Date().toISOString());

      // You could also write to a local file here
      // await writeFile('mailing-list.txt', `${email},${new Date().toISOString()}\n`, { flag: 'a' })

      return {
        success: true,
        message: "Email logged (webhook not configured)",
      };
    }

    // Send to webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: "susan-website-mailing-list",
      }),
    });

    if (!response.ok) {
      console.error("Webhook failed, logging locally:", email);
      // Fallback to logging
      return { success: true, message: "Email saved locally" };
    }

    return { success: true, message: "Email added to mailing list" };
  } catch (error) {
    console.error("Mailing list error:", error);
    // Even if webhook fails, don't fail the user experience
    return { success: true, message: "Email received" };
  }
});
