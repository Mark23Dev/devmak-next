import CTA from "../../layouts/home/CallToAction"
import ProjectsGrid from "../../layouts/projects/ProjectsGrid"
import { projectsData } from "../../data/projectsData"
import ProjectsIntro from "../../layouts/projects/ProjectIntro"

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsIntro />
      <ProjectsGrid title="All Projects" projects={projectsData} showCTA={false} />
      <CTA />
    </div>)
}

export default ProjectsPage