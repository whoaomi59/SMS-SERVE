import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:5000/messages";

export default function Form() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Obtiene los mensajes del servidor
    axios
      .get(apiUrl)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los mensajes:", error);
      });
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { text: input, sender: "self" };
      axios
        .post(apiUrl, newMessage)
        .then((response) => {
          setMessages([...messages, response.data]);
          setInput("");
        })
        .catch((error) => {
          console.error("Error al enviar el mensaje:", error);
        });
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
