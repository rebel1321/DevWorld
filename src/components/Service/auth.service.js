import axios from "axios";

const API_URL = "http://localhost:8081/auth/"; // Ensure it matches your backend port

const signup = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "signup", {
    firstName,
    lastName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios.post(API_URL + "signin", { email, password }).then((response) => {
    if (response.data.jwt) {
      localStorage.setItem("user", JSON.stringify(response.data));
      window.dispatchEvent(new Event("userLoggedIn")); // Notify other components
    }
    return response.data;
  });
};


const logout = () => {
  localStorage.removeItem("user"); // Remove JWT from localStorage
};

const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user : null;
};


const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
