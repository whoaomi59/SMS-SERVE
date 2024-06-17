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
    const newMessage = { text: input, user_id: seccion };
    axios
      .post(apiUrl, newMessage)
      .then((response) => {
        setMessages([...messages, response.data]);
        setInput("");
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
      });
  };

  const Validate = ({ data, index }) => {
    if (data.user_id == seccion) {
      return (
        <div
          class="self-end rounded-lg p-2s"
          key={index}
          style={{
            background: "rgb(166 255 0)",
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
                width: "30px",
                height: "30px",
                color: "#029f02",
                float: "right",
                marginLeft: "20px",
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              ></path>
            </svg>
          </label>
        </div>
      );
    } else {
      return (
        <div
          class="self-start  rounded-lg p-2s"
          key={index}
          style={{
            background: "#f0f0f0",
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
                width: "30px",
                height: "30px",
                fontWeight: "900",
                color: "#029f02",
                float: "right",
                marginLeft: "20px",
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
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
              <Validate data={message} index={index} />
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
        <div class="max-w-sm space-y-3">
          <div>
            <label for="hs-trailing-button-add-on-with-icon" class="sr-only">
              Label
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
