import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Provider } from "react-redux";
import { store } from "./Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}> 
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
