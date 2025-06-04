import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Coding perspective"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Kritik</p>
            <p className="subtext">
              Passionate about Back-end development, machine learning, and building 
              innovative solutions that solve real-world problems.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="DBMS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="OOPS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="OPERATING SYSTEMS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="ALGORITHMS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="NETWORKING"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "10%", left: "15%" }}
              image="assets/logos/python-logo-black-and-white.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "20%", left: "60%" }}
              image="assets/logos/c++-brandlogo.net.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "5%", left: "80%" }}
              image="assets/logos/R_logo.svg.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "40%", left: "10%" }}
              image="assets/logos/JavaScript_logo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "80%", left: "10%" }}
              image="assets/logos/github.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "60deg", top: "55%", left: "85%" }}
              image="assets/logos/mongo-db.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <div className="subtext">
              <div className="text-sm space-y-2">
                <p><span className="text-blue-400">•</span> <strong>MERN Stack:</strong> MongoDB, Express.js, Node.js</p>
                <p><span className="text-green-400">•</span> <strong>Languages:</strong> Python, C/C++, JavaScript, R</p>
                <p><span className="text-purple-400">•</span> <strong>ML/DataScience</strong></p>
                <p><span className="text-cyan-400">•</span> <strong>Tools:</strong> GitHub | MatLab | Linux | Kaggle | AutoCad | GNS3 | Arduino | VScode | Xcode | Rstudio</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
