import { Navigate } from "react-router-dom";
const token = localStorage.getItem("access_token");

if (!token) {
    navigate("/login");
}