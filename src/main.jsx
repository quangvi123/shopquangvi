import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./components/user/HomePage.jsx";
import Root from "./Root.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.js";
const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {path :"" ,element: <HomePage />},
      
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);