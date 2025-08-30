import avatar from "../assets/images/profile.jpg";
import Skill from "../components/Skill";
import Skills from "../data/Skills";
import Project from "../components/Project";
import Projects from "../data/Projects";
import Experience from "../components/Experience";
import Experiences from "../data/Experiences";
import Achievement from "../components/Achievement";
import Achievements from "../data/Achievements";

function Home() {
  return (
    <>
      {/* About me */}
      <div className="px-5">
        <div className="mt-18 text-center">
          <h1 className="text-5xl font-bold">Johnny Tran</h1>
          <p className="text-xl mt-5 lg:px-80 lg:mt-11 text-balance">
            I’m a full-stack developer with great experience and passion for
            coding and building plain interfaces. I have a manic love for great
            high-loaded projects. Plus, I’m an easy-going person and fit in any
            team. I work remotely and save your budget on my workplace. So, if
            you have a complicated task, you’ve found the right person. 
          </p>
          <div className="flex justify-center mt-8 lg:mt-14">
            <img
              className="aspect-square object-cover h-40 rounded-full lg:h-70"
              src={avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="mt-16 relative h-28 px-5 lg:mt-20 md:mt-16">
          <div className="h-24 bg-primary rounded-md lg:h-80 md:h-60"></div>
          <h1 className="text-white text-4xl font-medium flex justify-center items-end absolute inset-0">
            Skills
          </h1>
        </div>
        <div className="md:absolute md:grid md:grid-cols-2 md:gap-12 lg:mx-24 lg:gap-22 md:mx-5">
          {Skills.map((skillItem, index) => (
            <Skill key={index} {...skillItem}></Skill>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button className="md:absolute md:mt-[580px]  mt-12 bg-fourth text-white px-6 py-3 rounded-sm hover:bg-fourth-hover transition-all duration-300 cursor-pointer">
            Here is my CV
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-100 mt-16 md:mt-[720px]"></div>

      {/* Projects */}
      <div className="mt-16 text-center ">
        <h1 className="text-4xl font-medium">Projects</h1>
        <p className="mt-8 text-xl text-brand-gray">
          Have a look at some of the rolled-out projects I'm proud of:
        </p>
        {Projects.map((projectItem, index) => (
          <Project key={index} {...projectItem}></Project>
        ))}
      </div>

      {/* Interested */}
      <div className="mt-18 bg-gradient-to-br from-fourth to-primary text-center px-5">
        <h1 className="text-white text-4xl text-balance font-medium pt-30">
          Interested in working together?
        </h1>
        <p className="mt-8 text-white text-balance text-xl">
          You can trust your project in my expert hands. I'm always eager to do
          something nice and complicated. Let's discuss all the features in a
          private conversation.
        </p>
        <button className="text-primary bg-white px-6 py-3 rounded-sm font-medium mt-8 mb-21 hover:bg-gray-200 cursor-pointer transition-all duration-300">
          Contact me
        </button>
      </div>

      {/* Experience */}
      <div className="mt-18 mx-5">
        <h1 className="text-center text-4xl font-medium">Experience</h1>
        <div className="mt-18 space-y-14 md:hidden">
          {Experiences.map((experienceItem, index) => (
            <div className="mx-10">
              <Experience key={index} {...experienceItem} />
            </div>
          ))}
        </div>
        <div className="hidden md:flex md:justify-center mt-16">
          <div className="bg-fourth h-4 rounded-full w-4"></div>
        </div>

        <div className="hidden md:grid md:grid-cols-3">
          {Experiences.map((experienceItem, index) =>
            index % 2 === 0 ? (
              <>
                <div></div>
                <div>
                  <div className="flex justify-center">
                    <div className="h-45 w-1 bg-fourth"></div>
                    <div className="absolute grid grid-cols-2">
                      <div className="mt-7 flex justify-end">
                        <div className="bg-fourth h-3 w-1.5 rounded-l-full"></div>
                      </div>
                      <div className="flex mt-7">
                        <div className="bg-fourth h-3 w-1.5 rounded-r-full"></div>
                        <div className="h-1 md:w-25 lg:w-36 bg-fourth mt-1 transition-discrete duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Experience
                  key={index}
                  {...experienceItem}
                  isFlip={index % 2 !== 0}
                />
              </>
            ) : (
              <>
                <Experience
                  key={index}
                  {...experienceItem}
                  isFlip={index % 2 !== 0}
                />
                <div>
                  <div className="flex justify-center">
                    <div className="h-45 w-1 bg-fourth"></div>
                    <div className="absolute grid grid-cols-2">
                      <div className="flex mt-7">
                        <div className="h-1 md:w-25 lg:w-36 bg-fourth mt-1 transition-discrete duration-300"></div>
                        <div className="bg-fourth h-3 w-1.5 rounded-l-full"></div>
                      </div>
                      <div className="mt-7">
                        <div className="bg-fourth h-3 w-1.5 rounded-r-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </>
            )
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="md:mb-[500px] lg:mb-[450px]">
        <div className="mt-18 relative h-28 px-5 md:mt-0">
          <div className="h-24 bg-fourth rounded-md lg:h-80 md:h-60"></div>
          <h1 className="text-white text-4xl font-medium flex justify-center items-end absolute inset-0">
            Achievements
          </h1>
        </div>
        <div className="md:absolute md:grid md:grid-cols-2 md:gap-12 lg:mx-24 lg:gap-22 md:mx-5">
          {Achievements.map((achievementItem, index) => (
            <Achievement key={index} {...achievementItem}></Achievement>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="relative">
        <div className="md:mt-0 mt-20 mx-5 md:grid md:grid-cols-2 md:gap-11 lg:mx-20 items-center md:mx-10 absolute z-50">
          <div className="bg-white md:h-full border-2 border-gray-100 shadow-primary py-8 px-6 text-center text-balance rounded-md">
            <h1 className="text-4xl font-medium">Contact me</h1>
            <div className="mt-8 text-xl flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              &nbsp;
              <p className="font-bold">Email:</p>&nbsp;
              <p>thanhdt114@gmail.com</p>
            </div>
            <p className="mt-16 text-xl text-brand-gray">
              If you got any questions, please do not hesitate to send me a
              message.
            </p>
          </div>
          <div className="rounded-md bg-white mt-10 border-2 border-gray-100 shadow-primary py-9 px-6 md:mt-0">
            <div className="bg-seventh p-3 rounded-md flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-seventh-hover"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                className="w-full focus:outline-none text-gray-700"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div className="bg-seventh p-3 rounded-md flex mt-6 space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-seventh-hover"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <input
                className="w-full focus:outline-none text-gray-700"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="bg-seventh p-3 rounded-md flex mt-6 space-x-1 h-32">
              <textarea
                className="w-full focus:outline-none text-gray-700"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fourth mt-[450px] w-full h-[340px] md:h-[150px] lg:h-[200px] lg:mt-[600px] md:mt-[700px]"></div>
    </>
  );
}

export default Home;
