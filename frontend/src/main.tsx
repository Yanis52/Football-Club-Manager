import React from "react";
import ReactDOM from "react-dom/client";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Homepage from "./pages/HomePage.tsx";
import LoginPage from "./pages/loginPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/loginPage" replace={true} />, // Rediriger de "/" vers "/Homepage"
      },

      {
        path: "loginPage",
        element: <LoginPage />, // Rediriger de "/" vers "/loginPage"
      },
      {
        path: "homePage",
        element: <Homepage />, // Rediriger de "/" vers "/Homepage"
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
