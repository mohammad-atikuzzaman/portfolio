import { DiMongodb } from "react-icons/di";
import { FaGithub, FaLink, FaNode, FaReact } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-142px)] bg-orange-50 p-2 m-4 md:p-4 md:m-8 rounded-xl">
      <h2 className="text-3xl font-bold p-2">I have done the projects__</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center p-3 mt-6">
        <div>
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all">
            <figure>
              <img src="./megaNews.png" alt="Shoes" />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title leading-3 mt-2">
                Mega News
              </h2>
              <p>The trending article sharing platform.</p>
                <div className="flex justify-around text-xl">
                  <FaReact className="text-blue-400" title="react js"></FaReact>
                  <FaNode className="text-green-700" title="node js"></FaNode>
                  <SiExpress title="express js"></SiExpress>
                  <DiMongodb
                    className="text-green-600"
                    title="mongo db"></DiMongodb>
                  <RiFirebaseFill
                    className="text-yellow-600"
                    title="firebase"></RiFirebaseFill>
                  <div title="jwt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48">
                      <polygon
                        fill="#546e7a"
                        points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43"></polygon>
                      <polygon
                        fill="#f50057"
                        points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141"></polygon>
                      <polygon
                        fill="#d500f9"
                        points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879"></polygon>
                      <polygon
                        fill="#29b6f6"
                        points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137"></polygon>
                      <polygon
                        fill="#00e5ff"
                        points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398"></polygon>
                      <polygon
                        fill="#546e7a"
                        points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5"></polygon>
                      <polygon
                        fill="#f50057"
                        points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859"></polygon>
                      <polygon
                        fill="#d500f9"
                        points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12"></polygon>
                      <polygon
                        fill="#29b6f6"
                        points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863"></polygon>
                      <polygon
                        fill="#00e5ff"
                        points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602"></polygon>
                    </svg>
                  </div>
                </div>
              <div>
                <h3 className="font-semibold">Features</h3>
                <ul className="text-sm list-disc ml-4">
                  <li>Article sharing</li>
                  <li>Admin Panel Access (Supper Access )</li>
                  <li>Take Subscription by payment (premium access)</li>
                </ul>
              </div>
              <div className="card-actions justify-end text-lg font-semibold">
                <div className="badge badge-outline">
                  <FaGithub></FaGithub>
                  <a
                    href="https://github.com/mr-codex005/mega-news"
                    target="_blank">
                    Source code
                  </a>
                </div>
                <div className="badge badge-outline">
                  <FaLink></FaLink>
                  <a href="https://meganewsss.web.app/" target="_blank">
                    Live link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all">
            <figure>
              <img src="./VibePalace.png" alt="Shoes" />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title leading-3 mt-2">
                Vibe Palace
              </h2>
              <p>The hotel booking platform</p>
                <div className="flex justify-around text-xl">
                  <FaReact className="text-blue-400" title="react js"></FaReact>
                  <FaNode className="text-green-700" title="node js"></FaNode>
                  <SiExpress title="express js"></SiExpress>
                  <DiMongodb
                    className="text-green-600"
                    title="mongo db"></DiMongodb>
                  <RiFirebaseFill
                    className="text-yellow-600"
                    title="firebase"></RiFirebaseFill>
                  <div title="jwt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48">
                      <polygon
                        fill="#546e7a"
                        points="21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43"></polygon>
                      <polygon
                        fill="#f50057"
                        points="17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141"></polygon>
                      <polygon
                        fill="#d500f9"
                        points="15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879"></polygon>
                      <polygon
                        fill="#29b6f6"
                        points="17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137"></polygon>
                      <polygon
                        fill="#00e5ff"
                        points="21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398"></polygon>
                      <polygon
                        fill="#546e7a"
                        points="26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5"></polygon>
                      <polygon
                        fill="#f50057"
                        points="30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859"></polygon>
                      <polygon
                        fill="#d500f9"
                        points="32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12"></polygon>
                      <polygon
                        fill="#29b6f6"
                        points="30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863"></polygon>
                      <polygon
                        fill="#00e5ff"
                        points="26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602"></polygon>
                    </svg>
                  </div>
                </div>
              <div>
                <h3 className="font-semibold">Features</h3>
                <ul className="text-sm list-disc ml-4">
                  <li>Book only available rooms</li>
                  <li>Change booking date ann cancel booking</li>
                  <li>Give review only Own booked room</li>
                </ul>
              </div>
              <div className="card-actions justify-end text-lg font-semibold">
                <div className="badge badge-outline">
                  <FaGithub></FaGithub>
                  <a
                    href="https://github.com/mr-codex005/vibePalace/tree/main"
                    target="_blank">
                    Source code
                  </a>
                </div>
                <div className="badge badge-outline">
                  <FaLink></FaLink>
                  <a href="https://vibe-palace.web.app/" target="_blank">
                    Live link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all">
            <figure>
              <img src="./dreamVenture.png" alt="Shoes" />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title leading-3 mt-2">
                Dream Venture
              </h2>
              <p>Share the knowledge of tourist spots</p>
                <div className="flex justify-around text-xl">
                  <FaReact className="text-blue-400" title="react js"></FaReact>
                  <FaNode className="text-green-700" title="node js"></FaNode>
                  <SiExpress title="express js"></SiExpress>
                  <DiMongodb
                    className="text-green-600"
                    title="mongo db"></DiMongodb>
                  <RiFirebaseFill
                    className="text-yellow-600"
                    title="firebase"></RiFirebaseFill>
                </div>
              <div>
                <h3 className="font-semibold">Features</h3>
                <ul className="text-sm list-disc ml-4">
                  <li>Only Authorized user can see tourist spot info</li>
                  <li>Only Authorized user can add a tourist spot</li>
                  <li>Author can update or delete their post</li>
                </ul>
              </div>
              <div className="card-actions justify-end text-lg font-semibold">
                <div className="badge badge-outline">
                  <FaGithub></FaGithub>
                  <a
                    href="https://github.com/mr-codex005/dreamVenture/tree/main"
                    target="_blank">
                    Source code
                  </a>
                </div>
                <div className="badge badge-outline">
                  <FaLink></FaLink>
                  <a href="https://dream-ventures.web.app/" target="_blank">
                    Live link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
