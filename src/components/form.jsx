import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:5000/messages";

export default function Form({ seccion }) {
  console.log("🚀 ~ Form ~ seccion:", seccion);
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
      const newMessage = { text: input, sender: "self", id_user: seccion };
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

  const Validate = ({ data }) => {
    if (data.user_id == seccion) {
      return (
        <div
          class="self-end rounded-lg p-2s"
          key={data.user_id}
          style={{
            background: data.color,
            padding: "7px",
          }}
        >
          <label>{data.text}</label>
          <label>
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{
                width: "20px",
                height: "20px",
                fontWeight: "900",
                color: "green",
                float: "right",
                marginLeft: "20px",
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              ></path>
            </svg>
          </label>
        </div>
      );
    } else {
      return (
        <div
          class="self-start  rounded-lg p-2s"
          key={data.user_id}
          style={{
            background: data.color,
            padding: "7px",
          }}
        >
          <label>{data.text}</label>
          <label>
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{
                width: "20px",
                height: "20px",
                fontWeight: "900",
                color: "green",
                float: "right",
                marginLeft: "20px",
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              ></path>
            </svg>
          </label>
        </div>
      );
    }
  };

  return (
    <div className="flex">
      <div className="conter-sms-respo">
        <div class="flex-grow overflow-y-auto">
          <div class="flex flex-col space-y-2 p-4">
            {messages.map((message, index) => (
              <Validate data={message} />
            ))}
          </div>
        </div>
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
