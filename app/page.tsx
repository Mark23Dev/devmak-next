import Navbar from "../components/Navbar";
import AboutSnippet from "../layouts/home/AboutSnippet";
import CTA from "../layouts/home/CallToAction";
import FeaturesSnippet from "../layouts/home/Features";

import Hero from "../layouts/home/Hero";
import ProjectsGrid from "../layouts/projects/ProjectsGrid";
import TechStack from "../layouts/home/TechStack";

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
