import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-orange-50 p-8 m-8 rounded-xl space-y-8">
      <h2 className="text-3xl font-bold">My Skills__</h2>
      <hr />
      <div>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex items-center justify-center text-[#ff6344]">
            <FaHtml5 className="text-7xl mr-4"></FaHtml5>
            <div>
              <h4 className="font-semibold text-lg">HTML</h4>
            </div>
          </div>
          <div className="flex items-center justify-center text-blue-600">
            <FaCss3 className="text-7xl mr-4"></FaCss3>
            <div>
              <h4 className="font-semibold text-lg">CSS</h4>
            </div>
          </div>
          <div className="flex items-center justify-center text-yellow-500">
            <SiJavascript className="text-7xl mr-4"></SiJavascript>
            <div>
              <h4 className="font-semibold text-lg">JavaScript</h4>
            </div>
          </div>
          <div className="flex items-center justify-center text-blue-400">
            <RiTailwindCssFill className="text-7xl mr-4"></RiTailwindCssFill>
            <div>
              <h4 className="font-semibold text-lg">Tailwind Css</h4>
            </div>
          </div>
          <div className="flex items-center justify-center text-violet-700">
            <FaBootstrap className="text-7xl mr-4"></FaBootstrap>
            <div>
              <h4 className="font-semibold text-lg">BootStrap</h4>
            </div>
          </div>
          <div className="flex items-center justify-center text-blue-400">
            <FaReact className="text-7xl mr-4"></FaReact>
            <div>
              <h4 className="font-semibold text-lg">React Js</h4>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <SiNextdotjs className="text-7xl mr-4"></SiNextdotjs>
            <div>
              <h4 className="font-semibold text-lg">Next Js</h4>
            </div>
          </div>
          <div className="flex items-center justify-center text-green-600">
            <FaNodeJs className="text-7xl mr-4"></FaNodeJs>
            <div>
              <h4 className="font-semibold text-lg">Node Js</h4>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <SiExpress className="text-7xl mr-4"></SiExpress>
            <div>
              <h4 className="font-semibold text-lg">Express Js</h4>
            </div>
          </div>
          <div className="flex items-center justify-center text-green-700">
            <SiMongodb className="text-7xl mr-4"></SiMongodb>
            <div>
              <h4 className="font-semibold text-lg">MongoDB</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
