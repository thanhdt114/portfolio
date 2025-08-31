import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        achievementsRef={achievementsRef}
        contactRef={contactRef}
      />
      <Home
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        achievementsRef={achievementsRef}
        contactRef={contactRef}
      />
      <Footer
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        achievementsRef={achievementsRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default App;
