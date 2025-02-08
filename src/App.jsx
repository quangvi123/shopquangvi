import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/admin/sidebar";
function App() {
  return (
    <>
      <Sidebar />
      <main className="pl-[18%]">
      <Outlet />
      </main>
      </>
  );
}
export default App;