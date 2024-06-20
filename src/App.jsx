import "./App.css";
import Form from "./components/form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Auth from "./pages/auth";

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
                  <div className="conter-sms-respo">
                    <div></div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div>IP Address:</div>
                      <div
                        style={{
                          border: "1px solid #00ff00",
                          padding: "5px",
                        }}
                      >
                        205.211.157.84
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div>IP_ADDRESS | HOST_NAME</div>
                      <div
                        style={{
                          border: "1px solid #00ff00",
                          padding: "5px",
                        }}
                      >
                        www.00000.net
                      </div>
                    </div>
                  </div>
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
