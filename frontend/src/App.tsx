import { Outlet } from "react-router-dom";
import "./app.css";
import Sidebar from "./components/sideBar/sideBar";
function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
