
import Education from "./Education";

const About = () => {
  return (
    <div className="p-8 bg-orange-50 m-8 rounded-xl ">
      <h2 className="text-4xl font-semibold p-4">About Me__</h2>
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between ">
          <div>
            <img
              src="about.jpg"
              alt="picture of md atikuzzaman"
              className="md:max-w-[50%] rounded-xl shadow-lg shadow-orange-200"
            />
          </div>
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold">Who am I?</h3>
          <p>
            Welcome! I'm Atikuzzaman from Bangladesh, I’m an experienced and enthusiastic
            <span> Web Developer</span> with a knack for creating smooth user
            experiences and pixel-perfect web pages. I have mastered various
            front-end technologies, including Html, Css, JavaScript, React JS,
            Bootstrap, Tailwind CSS, Node JS, MongoDB and Next Js.
          </p>
          <div>
            <h2 className="font-semibold text-3xl mb-1">Education</h2>
            <Education></Education>
            <h2 className="font-semibold text-3xl">Language</h2>
            <div className="grid grid-cols-2 mt-2">
              <h2>Bangla (native)</h2>
              <h2>English (fluent)</h2>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
