import React, { useState } from "react";
import axios from 'axios';
import { REST_API_GATEWAY_URL } from "../globals.js";

function AiChatBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(REST_API_GATEWAY_URL + "api/ai/ask", {
        prompt: prompt,
      });
      setResponse(res.data);
    } catch (err) {
      console.error(err);
      setResponse("Error connecting to the AI backend.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Ask the School AI</h2>
      <textarea
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask a question like: Who enrolled in 2024?"
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleSubmit}>Send</button>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default AiChatBox;
