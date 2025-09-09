import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm here to help you learn more about John's services. What would you like to know?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // ---- Save summary in localStorage with expiry ----
  const saveSummary = (summary) => {
    if (!summary) return;
    const expiryTime = Date.now() + 10 * 60 * 1000; // 10 minutes
    localStorage.setItem(
      "chat_summary",
      JSON.stringify({ summary, expiry: expiryTime })
    );
  };

  // ---- Get valid summary from localStorage ----
  const getSummary = () => {
    const stored = localStorage.getItem("chat_summary");
    if (stored) {
      const { summary, expiry } = JSON.parse(stored);
      if (Date.now() < expiry) {
        return summary;
      } else {
        localStorage.removeItem("chat_summary"); // expired
      }
    }
    return null;
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, "user");
    setInputValue("");

    // Add typing indicator
    setMessages((prev) => [
      ...prev,
      { text: "Typing...", sender: "bot", isTyping: true },
    ]);

    try {
      const response = await fetch("http://localhost:8080/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: 1,
          message: userMessage,
          previousSummary: getSummary(), // use stored summary
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from server");
      }

      const data = await response.json();
      console.log(data.summery)

      // Save latest summary into localStorage
      saveSummary(data.summery);

      // Replace typing indicator with actual response
      setMessages((prev) =>
        prev.filter((msg) => !msg.isTyping).concat({ text: data.response, sender: "bot" })
      );
    } catch (error) {
      setMessages((prev) =>
        prev.filter((msg) => !msg.isTyping).concat({
          text: "Error: Unable to connect to server.",
          sender: "bot",
        })
      );
      console.error(error);
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // ---- Auto-scroll when new message arrives ----
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-button" id="chatbot-toggle" onClick={toggleChat}>
        <i className="fas fa-comments"></i>
      </div>

      <div
        className={`chatbot-window ${isChatOpen ? "active" : ""}`}
        id="chatbot-window"
      >
        <div className="chatbot-header">
          <h3>John Doe Assistant</h3>
          <button
            className="chatbot-close"
            id="chatbot-close"
            onClick={closeChat}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chatbot-messages" id="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}-message`}>
              <p>{message.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
        </div>

        <div className="chatbot-input">
          <div className="quick-questions" id="quick-questions">
            <button
              className="quick-question"
              onClick={() => handleQuickQuestion("What services do you offer?")}
            >
              Services
            </button>
            <button
              className="quick-question"
              onClick={() => handleQuickQuestion("What's your experience?")}
            >
              Experience
            </button>
            <button
              className="quick-question"
              onClick={() => handleQuickQuestion("How can I contact you?")}
            >
              Contact
            </button>
          </div>

          <div className="input-container">
            <input
              type="text"
              id="chatbot-input"
              placeholder="Type your question here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button id="chatbot-send" onClick={sendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
