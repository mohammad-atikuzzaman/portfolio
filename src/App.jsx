import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./nav.css"

function App() {

  return (
    <>
      <div className="container mx-auto text-green-600">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App
