import { useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  const seccion = localStorage.getItem("id");
  console.log("🚀 ~ App ~ seccion:", seccion);

  return (
    <div className="conter-sms">
      <div className="box-sms">
        <h1>Anonymous</h1>
        <Form seccion={seccion} />
      </div>
    </div>
  );
}

export default App;
