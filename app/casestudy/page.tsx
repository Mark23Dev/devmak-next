import CaseStudyLayout from "./layout";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import TechStack from "./components/TechStack";
import Gallery from "./components/Gallery";
import Results from "./components/Results";

export default function CaseStudy() {
  const dummyCaseStudy = {
    title: "EcoThreads: Sustainable Fashion Platform",
    subtitle: "Building a scalable Go backend for ethical fashion e-commerce.",
    heroImage: "/echothreads-hero.png",
    overview: "EcoThreads is a platform designed to connect sustainable fashion brands with conscious consumers. The platform manages inventory, order flows, and analytics efficiently.",
    problem: "Existing e-commerce platforms were either too generic or lacked scalability. Brands needed a solution tailored for sustainability tracking and fast order processing.",
    solution: "We built a Go backend with clean architecture principles, integrated payment gateways, implemented role-based access for admins, and provided a dashboard for analytics and sustainability metrics.",
    techStack: ["Go", "PostgreSQL", "Redis", "React", "TailwindCSS", "Docker", "AWS"],
    gallery: ["/echothreads-1.png", "/echo-threads-2.png", "/echothreads-3.png"],
    results: "Successfully launched a scalable platform handling 10k+ users and 50+ brands. Reduced average order processing time by 40% and increased user engagement through personalized recommendations."
  };

  return (
    <CaseStudyLayout>
      <Hero title={dummyCaseStudy.title} subtitle={dummyCaseStudy.subtitle} image={dummyCaseStudy.heroImage} />
      <Overview summary={dummyCaseStudy.overview} />
      <Problem problem={dummyCaseStudy.problem} />
      <Solution solution={dummyCaseStudy.solution} />
      <TechStack techs={dummyCaseStudy.techStack} />
      <Gallery images={dummyCaseStudy.gallery} />
      <Results results={dummyCaseStudy.results} />
    </CaseStudyLayout>
  );
}
