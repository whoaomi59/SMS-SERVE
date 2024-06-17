import { useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  const seccion = localStorage.getItem("id");
  console.log("🚀 ~ App ~ seccion:", seccion);

  return (
    <div className="conter-sms">
      <div className="box-sms">
        <div className="flex">
          <div>
            <h1>Facelack</h1>
          </div>
        </div>
        <Form seccion={seccion} />
      </div>
    </div>
  );
}

export default App;
