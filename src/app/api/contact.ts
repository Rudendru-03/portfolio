import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Backend logic to process the contact form submission
    // For example, saving to a database or sending an email

    console.log(
      `Contact form submission from: ${name}, ${email}, Message: ${message}`
    );

    // Send success response
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
