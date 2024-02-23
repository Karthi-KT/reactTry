import { useState } from "react";

function ChatGPTComponent() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const apiKey = "YOUR_API_KEY"; // Replace with your API key
  const model = "text-davinci-003"; // Choose the model (e.g., ChatGPT)

  const sendMessage = async () => {
    if (inputText.trim() === "") return;

    // Add user message to the list of messages
    setMessages((messages) => [...messages, { text: inputText, isUser: true }]);
    setInputText("");

    try {
      // Send user message to the OpenAI API
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: model,
          prompt: inputText,
          max_tokens: 50, // Maximum number of tokens in the response
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from OpenAI API");
      }

      const data = await response.json();
      const botResponse = data.choices[0].text;

      // Add bot response to the list of messages
      setMessages((messages) => [
        ...messages,
        { text: botResponse, isUser: false },
      ]);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{ textAlign: message.isUser ? "right" : "left" }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatGPTComponent;
