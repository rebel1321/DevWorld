import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import Login from "./components/Pages/Login"; // Import Login component
import Signup from "./components/Pages/Signup";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ForgetPassword from "./components/Pages/ForgetPassword";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import DashBoard from "./components/Pages/DashBoard";
import Project from "./components/Pages/Project";
import NewProject from "./components/Pages/NewProject";
import ResetPassword from "./components/Pages/ResetPassword";
import OtpVerification from "./components/Pages/OtpVerification";

// Configure routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "about", element: <About /> },
      { path: "forgetPassword", element: <ForgetPassword /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "dashboard", element: <DashBoard /> },
      { path: "projects", element: <Project /> },
      { path: "new-project", element: <NewProject /> },
      { path: "otpVerification", element: <OtpVerification /> },
      { path: "resetPassword", element: <ResetPassword /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1086913269876-8m24859l18b0r60797mq57ltofsn4kqg.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
