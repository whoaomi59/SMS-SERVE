import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const apiUrl = "https://smsanonymos.000webhostapp.com/serve.php/messages";

export default function Form({ seccion }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState(null);

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

  useEffect(() => {
    if (response) {
      setInput(response + "  " + ":" + "  ");
    }
  }, [response]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData
    const formData = new FormData();
    formData.append("text", input);
    formData.append("user_id", parseInt(seccion));
    formData.append("image", image);

    const newMessage = JSON.stringify({
      text: input,
      user_id: parseInt(seccion),
      image: image,
    });

    axios
      .post(apiUrl, formData)
      .then((response) => {
        setMessages([...messages, response.data]);
        setInput("");
        setImage(null);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Mensaje enviado",
        });
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "Error al enviar el mensaje",
        });
      });
  };

  const Validate = ({ data, index }) => {
    if (data.user_id == seccion) {
      if (data.imgmensage == null) {
        return (
          <div class="self-end rounded-lg p-2s" key={index}>
            <div>
              <img
                src={data.img}
                alt={data.name}
                class="rounded-full  w-10 h-10"
              />
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
          <div class="self-end rounded-lg p-2s" key={index}>
            <div>
              <img
                src={data.img}
                alt={data.name}
                class="rounded-full  w-10 h-10"
              />
              <div class="grid">
                <h5 class="text-white text-sm font-semibold leading-snug pb-1">
                  {data.name}
                </h5>
                <div class=" grid">
                  <div class="px-3 py-1 rounded justify-start  items-center gap-3 inline-flex">
                    <img
                      src={
                        "https://smsanonymos.000webhostapp.com/" +
                        data.imgmensage
                      }
                      style={{
                        width: "150px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="flex">
                    <a
                      href={`https://smsanonymos.000webhostapp.com/${data.imgmensage}`}
                    >
                      <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height="20px"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                        ></path>
                      </svg>
                    </a>
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
    } else {
      if (data.imgmensage == null) {
        return (
          <div class="self-start  rounded-lg p-2s" key={index}>
            <div>
              <img
                src={data.img}
                alt={data.name}
                class="rounded-full  w-10 h-10"
              />
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
                    <button
                      onClick={() => setResponse(data.text)}
                      className="p-4"
                    >
                      <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height="20px"
                        style={{
                          color: "white",
                        }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        ></path>
                      </svg>
                    </button>
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
              <img
                src={data.img}
                alt={data.name}
                class="rounded-full  w-10 h-10"
              />
              <div class="grid">
                <h5 class="text-white text-sm font-semibold leading-snug pb-1">
                  {data.name}
                </h5>
                <div class=" grid">
                  <div class="px-3 py-1  rounded justify-start  items-center gap-3 inline-flex">
                    <img
                      src={
                        "https://smsanonymos.000webhostapp.com/" +
                        data.imgmensage
                      }
                      style={{
                        width: "150px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="flex">
                    <a
                      href={`https://smsanonymos.000webhostapp.com/${data.imgmensage}`}
                    >
                      <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height="20px"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                        ></path>
                      </svg>
                    </a>
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
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input
          type="text"
          className="check-text"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" className="btn" />
      </form>
      <a
        href="https://expo.dev/artifacts/eas/jBPu94tsXP7wmszVAD6C7j.apk"
        className="btn"
        style={{
          marginTop: "20px",
        }}
      >
        Descargar el apk
      </a>
    </div>
  );
}
