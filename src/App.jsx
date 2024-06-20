import "./App.css";
import Form from "./components/form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Auth from "./pages/auth";
import Head from "./components/head";

function App() {
  const seccion = localStorage.getItem("id");

  return (
    <div className="conter-sms">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/QIbAnh0HPbfFFZN9t5FMq9uCIZ5bmvqLIkjopcY0JuQ"
            element={
              <div className="box-sms">
                <div className="flex">
                  <Head />
                </div>
                <Form seccion={seccion} />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
