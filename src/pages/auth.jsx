import { useState } from "react";

export default function Auth() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    try {
      if (!input) {
        return alert("ID: requiere!");
      }
      await localStorage.setItem("id", input);
      window.location.href = "/QIbAnh0HPbfFFZN9t5FMq9uCIZ5bmvqLIkjopcY0JuQ"; // Redirige a la ruta '/sms'
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="check-text"
          value={input}
          onChange={handleChange}
          placeholder="ID: 0000111223"
        />
        <input type="submit" value="Ingresar" className="btn" />
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
