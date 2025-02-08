import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./components/user/HomePage.jsx";
import Root from "./Root.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.js";
import Products from "./components/pages/products.jsx";
import ProductDetail from "./components/pages/product-detail.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {path :"" ,element: <HomePage />},
      {path :"products",element: <Products />},
      {path :"product-detail",element: <ProductDetail />},
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