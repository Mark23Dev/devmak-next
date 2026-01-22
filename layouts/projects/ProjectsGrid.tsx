"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  img: string;
  title: string;
  desc: string;
  link: string;
};

interface ProjectsGridProps {
  title?: string;
  projects: Project[];
  showCTA?: boolean;
}

export default function ProjectsGrid({
  title = "Featured Projects",
  projects,
  showCTA = true,
}: ProjectsGridProps) {
  return (
    <section
      id="projects"
      className="w-full py-20"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col rounded-2xl overflow-hidden border transition transform hover:-translate-y-2"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                boxShadow: `0 0 20px rgba(56,189,248,0.2)`, // subtle cyan shadow
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Image */}
              <div
                className="relative h-48 w-full overflow-hidden"
                style={{ backgroundColor: "var(--muted)" }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p
                    className="text-sm line-clamp-4"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {project.desc}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  aria-label={`View case study for ${project.title}`}
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--primary), var(--accent))",
                    color: "var(--foreground)",
                  }}
                >
                  View Case Study
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        {showCTA && (
          <div className="text-center mt-10">
            <a
              href="/projects"
              className="inline-flex items-center transition"
              style={{ color: "var(--primary)" }}
            >
              See All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
