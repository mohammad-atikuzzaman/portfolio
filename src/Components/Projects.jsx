import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-142px)] bg-orange-50 p-2 m-4 md:p-4 md:m-8 rounded-xl">
      <h2 className="text-3xl font-bold p-2">I have done the projects__</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        <div>
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all">
            <figure>
              <img src="./megaNews.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Mega News
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>The trending article sharing platform.</p>
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
            <div className="card-body">
              <h2 className="card-title">
                Vibe Palace
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>The hotel booking platform</p>
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
            <div className="card-body">
              <h2 className="card-title">
                Dream Venture
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Share the knowledge of tourist spots</p>
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
