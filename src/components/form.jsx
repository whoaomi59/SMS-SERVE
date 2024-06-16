import React, { useState } from "react";

export default function Form() {
  // Estado para los mensajes
  const [messages, setMessages] = useState([
    { text: "Hello, you friends", sender: "other" },
    { text: "Yes, my friends", sender: "self" },
  ]);
  const [input, setInput] = useState("");

  // Maneja el cambio en el input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "self" }]);
      setInput("");
    }
  };

  return (
    <div className="flex">
      <div className="conter-sms-respo">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="check-text"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
}
