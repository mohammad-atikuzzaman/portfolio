import { Typewriter } from "react-simple-typewriter";
import "./profile.css"
const Home = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row justify-between  items-center my-auto p-8">
        <div className="text-center mt-7 md:text-left md:max-w-[60%] space-y-2 ">
          <h2 className="font-bold text-2xl md:text-4xl">
            Hello, I'm Atikuzzaman
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold">
            <Typewriter
              words={["Frontend Developer", "React Developer","Jr. Web Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p>
            Crafting dynamic, web applications with HTML, CSS,Bootstrap, Tailwind CSS, JavaScript, TypeScript
            React JS, Next JS and Node.JS MongoDB, Express.js for seamless, efficient, and
            innovative digital experiences.
          </p>
          <div>
            <a
              href="./Frontend_developer_Atikuzzaman's_resume .pdf"
              download
              className="inline-block bg-[#f8e9c1] p-2 rounded-md m-1 border-b-4 border-[#9e6d52] hover:scale-105 text-lg font-semibold">
              Resume
            </a>
            <a
              href="./Frontend_Developer_CV_of_Md_Atikuzzaman.pdf"
              className="inline-block bg-[#f8e9c1] p-2 rounded-md m-1 border-b-4 border-[#9e6d52] hover:scale-105 text-lg font-semibold">
             Download CV
            </a>
          </div>
        </div>

        <div className=" profile ">
        <img src="./profile.png" alt="akash" />
        </div>
      </div>
    </div>
  );
};

export default Home;
