import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles/font.css";
import Routes from "./Routes/Routes";

function App() {
  return (
    <Router>
      <Routes />
      <ToastContainer />
    </Router>
  );
}

export default App;
