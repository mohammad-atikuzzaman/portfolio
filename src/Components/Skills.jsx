import { BiLogoJavascript } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-orange-50 p-8 m-8 rounded-xl space-y-8 min-h-[calc(100vh-130px)]">
      <h2 className=" text-xl md:text-3xl font-bold">My Skills__</h2>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-[#ff6344] ">
          <FaHtml5 className="text-xl md:text-7xl md:mr-4 animate-bounce"></FaHtml5>
          <div>
            <h4 className="font-semibold md:text-lg">HTML</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-blue-600 ">
          <FaCss3 className="text-xl md:text-7xl md:mr-4 animate-bounce"></FaCss3>
          <div>
            <h4 className="font-semibold md:text-lg">CSS</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-yellow-500 ">
          <BiLogoJavascript className="text-2xl md:text-7xl md:mr-4 animate-bounce"></BiLogoJavascript>
          <div>
            <h4 className="font-semibold md:text-lg">JavaScript</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-blue-400 ">
          <RiTailwindCssFill className="text-2xl md:text-7xl md:mr-4 animate-bounce"></RiTailwindCssFill>
          <div>
            <h4 className="font-semibold md:text-lg">Tailwind Css</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-violet-700 ">
          <FaBootstrap className="text-xl md:text-7xl md:mr-4 animate-bounce"></FaBootstrap>
          <div>
            <h4 className="font-semibold md:text-lg">BootStrap</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-blue-400 ">
          <FaReact className="text-xl md:text-7xl md:mr-4 animate-bounce"></FaReact>
          <div>
            <h4 className="font-semibold md:text-lg">React Js</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <SiNextdotjs className="text-xl md:text-7xl md:mr-4 animate-bounce"></SiNextdotjs>
          <div>
            <h4 className="font-semibold md:text-lg">Next Js</h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center text-green-600 ">
          <FaNodeJs className="text-xl md:text-7xl md:mr-4 animate-bounce"></FaNodeJs>
          <div>
            <h4 className="font-semibold md:text-lg">Node Js</h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center ">
          <SiExpress className="text-xl md:text-7xl md:mr-4 animate-bounce"></SiExpress>
          <div>
            <h4 className="font-semibold md:text-lg">Express Js</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center text-green-700 ">
          <SiMongodb className="text-xl md:text-7xl md:mr-4 animate-bounce"></SiMongodb>
          <div>
            <h4 className="font-semibold md:text-lg">MongoDB</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
