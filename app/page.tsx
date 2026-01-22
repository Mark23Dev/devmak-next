import Navbar from "../components/Navbar";
import AboutSnippet from "./home/AboutSnippet";
import CTA from "./home/CallToAction";
import FeaturesSnippet from "./home/Features";

import Hero from "./home/Hero";
import ProjectsGrid from "./projects/components/ProjectsGrid";
import TechStack from "./home/TechStack";

import { projectsData } from "../data/projectsData";

const HomePage = () => {
  // Dynamically get featured projects
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <AboutSnippet />
        <FeaturesSnippet />
        <ProjectsGrid projects={featuredProjects} />
        <TechStack />
        <CTA />
      </main>
    </div>
  );
};

export default HomePage;
