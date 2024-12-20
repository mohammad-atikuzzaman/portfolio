import { BiLogoJavascript } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

import "./profile.css";
const Skills = () => {
  return (
    <div className="bg-orange-50 p-8 m-8 rounded-xl space-y-8 min-h-[calc(100vh-130px)]">
      <h2 className=" text-xl md:text-3xl font-bold">My Skills__</h2>
      <hr className="border-[#814516]" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
        <div className="flex flex-col items-center justify-center text-[#ff6344] hover:text-gray-500">
          <FaHtml5 className="text-xl md:text-5xl  animate-bounce"></FaHtml5>
          <div>
            <h4 className="font-semibold md:text-4xl">HTML</h4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-blue-600 hover:text-gray-500 ">
          <FaCss3 className="text-xl md:text-5xl animate-bounce"></FaCss3>
          <div>
            <h4 className="font-semibold md:text-4xl">CSS</h4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-blue-400 hover:text-gray-500">
          <RiTailwindCssFill className="text-2xl md:text-5xl  animate-bounce"></RiTailwindCssFill>
          <div>
            <h4 className="font-semibold md:text-4xl">Tailwind CSS</h4>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center text-violet-700 hover:text-gray-500">
          <FaBootstrap className="text-xl md:text-5xl  anmstretching"></FaBootstrap>
          <div>
            <h4 className="font-semibold md:text-4xl">BootStrap</h4>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center text-yellow-500 hover:text-gray-500">
          <BiLogoJavascript className="text-2xl md:text-5xl  animate-bounce"></BiLogoJavascript>
          <div>
            <h4 className="font-semibold md:text-4xl">JavaScript</h4>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center text-blue-700 hover:text-gray-500">
          <SiTypescript className="text-2xl md:text-5xl shake"></SiTypescript>
          <div>
            <h4 className="font-semibold md:text-4xl">TypeScript</h4>
          </div>
        </div>

        <div className="flex flex-col  items-center justify-center text-blue-400 hover:text-gray-500">
          <FaReact className="text-xl md:text-5xl  anm"></FaReact>
          <div>
            <h4 className="font-semibold md:text-4xl">React JS</h4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-black hover:text-gray-500">
          <SiNextdotjs className="text-xl md:text-5xl  animate-bounce"></SiNextdotjs>
          <div>
            <h4 className="font-semibold md:text-4xl">Next JS</h4>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-green-600 hover:text-gray-500">
          <FaNodeJs className="text-xl md:text-5xl  animate-bounce"></FaNodeJs>
          <div>
            <h4 className="font-semibold md:text-4xl">Node JS</h4>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center hover:text-gray-500">
          <SiExpress className="text-xl md:text-5xl  animate-bounce"></SiExpress>
          <div>
            <h4 className="font-semibold md:text-4xl">Express JS</h4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-green-700 hover:text-gray-500">
          <SiMongodb className="text-xl md:text-5xl  animate-bounce"></SiMongodb>
          <div>
            <h4 className="font-semibold md:text-4xl">MongoDB</h4>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-black hover:text-gray-500">
          <SiSocketdotio className="text-xl md:text-5xl animate-pulse"></SiSocketdotio>
          <div>
            <h4 className="font-semibold md:text-4xl">Socket.IO</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
