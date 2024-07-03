import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/",
        element: <Home></Home>,
       },
      { path: "/about",
        element: <About></About>,
       },
      { path: "/skills",
        element: <Skills></Skills>,
       },
      { path: "/projects",
        element: <Projects></Projects>,
       },
    ],
  },
]);

export default router;
