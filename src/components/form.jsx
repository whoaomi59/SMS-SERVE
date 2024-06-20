import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://smsanonymos.000webhostapp.com/serve.php/messages";

export default function Form({ seccion }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchMessages = () => {
      axios
        .get(apiUrl)
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los mensajes:", error);
        });
    };

    fetchMessages(); // Llama inmediatamente para obtener los mensajes la primera vez
    const intervalId = setInterval(fetchMessages, 7000); // Intervalo de 10 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = JSON.stringify({
      text: input,
      user_id: parseInt(seccion),
    });
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
        <div class="self-end rounded-lg p-2s" key={index}>
          <div>
            <img src={data.img} alt={data.name} class="w-10 h-11" />
            <div class="grid">
              <h5 class="text-white text-sm font-semibold leading-snug pb-1">
                {data.name}
              </h5>
              <div class=" grid">
                <div class="px-3 py-1 rounded justify-start  items-center gap-3 inline-flex">
                  <label>{data.text}</label>
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="20px"
                    height="20px"
                    margin="0px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    ></path>
                  </svg>
                </div>
                <div class="justify-end items-center inline-flex mb-2.5">
                  <h6 class="text-white text-xs font-normal leading-4 py-1">
                    {data.timestamp}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="self-start  rounded-lg p-2s" key={index}>
          <div>
            <img src={data.img} alt={data.name} class="w-10 h-11" />
            <div class="grid">
              <h5 class="text-white text-sm font-semibold leading-snug pb-1">
                {data.name}
              </h5>
              <div class=" grid">
                <div class="px-3 py-1  rounded justify-start  items-center gap-3 inline-flex">
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="20px"
                    height="20px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                  <label>{data.text}</label>
                </div>
                <div class="justify-end items-center inline-flex mb-2.5">
                  <h6 class="text-white text-xs font-normal leading-4 py-1">
                    {data.timestamp}
                  </h6>
                </div>
              </div>
            </div>
          </div>
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
