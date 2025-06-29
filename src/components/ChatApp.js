import React, { useState } from "react";

function ChatApp() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8087/api/chat?message=${encodeURIComponent(message)}`);
      const data = await res.text();
      setResponse(data);

    } catch (error) {
      setResponse("Something went wrong.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xs         font-bold mb-6">AI Chat</h1>
      <input
        className="border px-3 py-2 w-full mb-3 rounded"
        placeholder="Ask me something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {response && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ChatApp;
