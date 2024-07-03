import { FaEnvelope, FaGithub, FaMobile } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="p-8 bg-orange-50 m-8 rounded-xl ">
      <h2 className="text-4xl font-semibold p-4">Connect with Me__</h2>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <img
            src="https://i.ibb.co/KXrtLgT/1715428660634.jpg"
            alt="picture of md atikuzzaman"
            className="md:max-w-[50%] rounded-xl shadow-lg shadow-orange-200"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold">Who am I?</h3>
          <p>
            Welcome! I’m an experienced and enthusiastic
            <span> Web Developer</span> with a knack for creating smooth user
            experiences and pixel-perfect web pages. I have mastered various
            front-end technologies, including JavaScript, React JS, Tailwind
            CSS, Node JS, MongoDB, and Bootstrap.
          </p>
          <div>
            <h2 className="text-2xl">Contact Info</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <FaMobile className="text-3xl"></FaMobile>
                <div>
                  <p>Phone_</p>
                  <a href="tel:+8801729414662" className="font-semibold">+8801729414662</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-3xl"></FaEnvelope>
                <div>
                  <p>Email_</p>
                  <a href="mailto:akash203037@gmail.com" className="font-semibold">akash203037@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationArrow className="text-3xl"></FaLocationArrow>
                <div>
                  <p>Location_</p>
                  <h4 className="font-semibold">Pabna, Bangladesh</h4>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-3xl"></FaGithub>
                <div>
                  <p>Github_</p>
                  <a href="https://github.com/mr-codex005" className="font-semibold">
                    https://github.com/mr-codex005
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-3xl mt-6">Send a Mail</h2>
              <Contact></Contact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
