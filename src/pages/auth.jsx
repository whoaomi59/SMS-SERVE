import { useState } from "react";

export default function Auth() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!input) {
        return alert("ID: requiere!");
      }

      if (input == "2") {
        await sessionStorage.setItem("conexion", "true");
      } else {
        await sessionStorage.setItem("conexion", "false");
      }

      await localStorage.setItem("id", input);

      return (window.location.href =
        "/QIbAnh0HPbfFFZN9t5FMq9uCIZ5bmvqLIkjopcY0JuQ");
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
