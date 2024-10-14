// components/ChatBot.tsx
"use client";
import { useState } from "react";
import axios from "axios";

// Define the structure of the messages array items
interface Message {
  user: string;
  bot: string;
}

const ChatBot: React.FC = () => {
  // UseState with the proper types for messages and input
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  // Async function to send the message and get the bot response
  const sendMessage = async () => {
    if (input.trim() === "") return; // Prevent sending empty messages

    try {
      const response = await axios.post("/api/chat", { message: input });

      // Update the messages array with user and bot messages
      setMessages([...messages, { user: input, bot: response.data.text }]);
      setInput(""); // Clear the input after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <div className="chat-messages space-y-2">
        {messages.map((msg, index) => (
          <div key={index}>
            <p className="text-yellow-500">You: {msg.user}</p>
            <p className="text-green-500">Bot: {msg.bot}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4">
        <input
          type="text"
          className="w-full p-2 bg-gray-700 text-white rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button
          onClick={sendMessage}
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
