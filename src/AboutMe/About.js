import Hero from "./Hero";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Project from "./Project";
import Achievements from "./Achievements";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Introduction />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Project />

      {/* Achievements Section */}
      <Achievements />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
