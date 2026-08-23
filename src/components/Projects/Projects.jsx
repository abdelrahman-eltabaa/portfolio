import { useState } from "react";
import projects from "../../data/projects";
import SectionTitle from "../UI/SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaBug,
  FaDatabase,
  FaJava,
  FaReact,
  FaRobot,
} from "react-icons/fa";
import { MdApi } from "react-icons/md";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: "✨" },
    { name: "Manual", icon: <FaBug /> },
    { name: "API", icon: <MdApi /> },
    { name: "Automation", icon: <FaRobot /> },
    { name: "Database", icon: <FaDatabase /> },
    { name: "Java", icon: <FaJava /> },
    { name: "React", icon: <FaReact /> },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          title="Projects"
          subtitle="Some of the Software Testing projects I have worked on."
          titleClassName="dark:text-white"
          subtitleClassName="dark:text-gray-300"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-sm ${
                selectedCategory === category.name
                  ? "scale-105 bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:-translate-y-1 hover:bg-blue-50 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-base sm:text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:max-w-none"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover sm:h-48"
              />

              <div className="flex h-full flex-col p-4 sm:p-5">
                <div className="mb-2">
                  {project.category === "Manual" && (
                    <span className="inline-block rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300 sm:text-xs">
                      🐞 Manual Testing
                    </span>
                  )}

                  {project.category === "API" && (
                    <span className="inline-block rounded-full bg-cyan-100 px-2.5 py-1 text-[10px] font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300 sm:text-xs">
                      🔗 API Testing
                    </span>
                  )}

                  {project.category === "Automation" && (
                    <span className="inline-block rounded-full bg-purple-100 px-2.5 py-1 text-[10px] font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 sm:text-xs">
                      🤖 Automation
                    </span>
                  )}

                  {project.category === "Database" && (
                    <span className="inline-block rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 sm:text-xs">
                      🗄️ Database
                    </span>
                  )}

                  {project.category === "Java" && (
                    <span className="inline-block rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300 sm:text-xs">
                      ☕ Java
                    </span>
                  )}

                  {project.category === "React" && (
                    <span className="inline-block rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 sm:text-xs">
                      ⚛️ React
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-2 py-1 text-[10px] text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 sm:text-sm"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.linkedin && (
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:text-sm"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;