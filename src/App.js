import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import "./styles/font.css";
import Routes from "./Routes/Routes";
import initStore from "./redux/store.redux";

require("dotenv").config();
const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
