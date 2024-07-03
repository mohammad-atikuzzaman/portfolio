import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div className="h-[calc(100vh-130px)]">
      <div className="flex justify-between  items-center my-auto p-8">
        <div className="max-w-[60%] space-y-2">
          <h2 className="font-bold text-2xl md:text-4xl">
            Hello, I'm Atikuzzaman
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold">
            <Typewriter
              words={["Jr. Web Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p>
            Crafting dynamic, web applications with Html, CSS, javaScript,
            React, and Node.js MongoDB, Express.js for seamless, efficient, and
            innovative digital experiences.
          </p>
          <div>
            <a
              href="./Web_Developer_Resume_of_Atikuzzaman.pdf"
              download
              className="inline-block bg-[#f8e9c1] p-2 rounded-md m-1 border-b-4 border-[#9e6d52] hover:scale-105 text-lg font-semibold">
              Resume
            </a>
            <a
              href="./Frontend_Developer_CV_of_Md_Atikuzzaman.pdf"
              className="inline-block bg-[#f8e9c1] p-2 rounded-md m-1 border-b-4 border-[#9e6d52] hover:scale-105 text-lg font-semibold">
              Cv
            </a>
          </div>
        </div>
        <div className="rounded-full shadow-lg shadow-orange-400  hover:bg-orange-100 transition-all">
          <img
            src="https://i.ibb.co/9Yb4GmQ/IMG-20240219-094gjg258-removebg-preview.png"
            alt="image of aitkuzzaman"
            className="rounded-full border-2 border-[#9e6d52] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
