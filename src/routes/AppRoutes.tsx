import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/login/login";
import Register from "../Pages/register/register";
import Home from "../Pages/home/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
