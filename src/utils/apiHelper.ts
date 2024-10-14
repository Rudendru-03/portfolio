export async function sendContactMessage(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to send contact message");
  }

  return await response.json();
}

export async function sendChatMessage(message: string) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Failed to get chatbot response");
  }

  return await response.json();
}
