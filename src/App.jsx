import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./nav.css"

function App() {

  return (
    <>
      <div className="container mx-auto text-[#a035e7]">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App
