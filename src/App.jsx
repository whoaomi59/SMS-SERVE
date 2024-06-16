import { useState } from "react";
import "./App.css";
import Form from "./components/form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="conter-sms">
      <div className="box-sms">
        <h1>SMS</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
