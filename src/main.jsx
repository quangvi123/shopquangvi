import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/admin/adminProduct.jsx";
import HomePage from "./components/user/HomePage.jsx";
import AdminUser from "./components/admin/AdminUser.jsx";
import Products from "./components/pages/products.jsx";
import ProductDetail from "./components/pages/product-detail.jsx";
import Cart from "./components/pages/cart.jsx";
import Dashboard from "./components/admin/dashboard.jsx";
import Pay from "./components/pages/pay.jsx";
import Root from "./Root.jsx";
import Todo from "./components/admin/todo.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.js";
import Login from "./components/pages/login.jsx";
import Register from "./components/pages/register.jsx";
import AdminCategory from "./components/admin/AdminCategory.jsx";
import AdminProduct from "./components/admin/adminProduct.jsx";

const router = createBrowserRouter([
  {
    path: "admin",
    element: <App />,
    children: [
      {path: "products",element: <Home />},
      {path: "users", element: <AdminUser />},
      {path :"todo", element: <Todo />},
      {path :"", element: <Dashboard />},
      {path :"catagory", element: <AdminCategory />},
      {path :"productss", element: <AdminProduct />}
    ],
  },
  {
    path: "",
    element: <Root />,
    children: [
      {path :"" ,element: <HomePage />},
      {path :"/products", element: <Products />},
      {path : "/product-detail", element: <ProductDetail />},
      {path : "/cart", element: <Cart />},
      {path : "/pay", element:<Pay />},
    ],
  },
  {path: "/login", element: <Login />},
  {path: "/register", element: <Register />},
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);