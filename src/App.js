import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSignUp from "./Pages/Access Control/UserSignUp";
import UserLogin from "./Pages/Access Control/UserLogin";
import UserHome from "./Pages/Homepage/UserHome";
import CreateOrder from "./Pages/Create Order/CreateOrder";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateOrder />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/createOrder" element={<CreateOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
