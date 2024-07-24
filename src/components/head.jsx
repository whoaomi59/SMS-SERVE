import axios from "axios";
import { useEffect, useState } from "react";

export default function Head() {
  const [online, setOnline] = useState(false);
  const conexion = sessionStorage.getItem("conexion");
  const [ip, setIP] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const Online = () => {
      if (conexion == "true") {
        setOnline(true);
      } else {
        setOnline(false);
      }
    };
    Online();
  }, []);

  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      console.log("🚀 ~ axios.get ~ res:", res);
      setCity(res.data.city);
      return setIP(res.data.ip);
    });
  }, []);

  return (
    <div className="conter-sms-respo">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/img/pngfind.com-pirate-flag-png-2847145.png"
            alt="sms"
            width="100px"
            height="40px"
          />
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>SMS PIRATE</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div>{online ? "Online" : "Offline"}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              IP Address:
            </div>
            <div
              style={{
                border: "2px solid #00ff00",
                padding: "5px",
              }}
            >
              {ip}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              <a href="#">IP_ADDRESS</a> | HOST_NAME
            </div>
            <div
              style={{
                border: "2px solid #00ff00",
                padding: "5px",
              }}
            >
              www.00000.net
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
