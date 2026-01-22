import ProjectsIntro from "./components/ProjectIntro";
import ProjectsGrid from "./components/ProjectsGrid";
import { projectsData } from "../../data/projectsData";
import CTA from "../home/CallToAction";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <ProjectsIntro />
      <ProjectsGrid title="All Projects" projects={projectsData} showCTA={false} />
      <CTA />
    </div>
  );
}
