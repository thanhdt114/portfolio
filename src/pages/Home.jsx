import avatar from "../assets/images/profile.jpg";
import Skill from "../components/Skill";
import Skills from "../data/Skills";
import Project from "../components/Project";
import Projects from "../data/Projects";

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
            <Skill {...skillItem}></Skill>
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
          <Project {...projectItem}></Project>
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
    </>
  );
}

export default Home;
