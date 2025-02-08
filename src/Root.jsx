import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/user/layouts/footer";
import Header from "./components/user/layouts/header";
function Root() {
  return (
    <>
     <ToastContainer/>
    <Header />
      <main className="bg-gray-100 pb-[2%]">
        <Outlet />
      </main>
    <Footer />
    </>
  );
}
export default Root;