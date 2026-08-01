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
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section
      id="projects"
      className="bg-gray-50 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Projects"
          subtitle="Some of the Software Testing projects I have worked on."
          titleClassName="dark:text-white"
          subtitleClassName="dark:text-gray-300"
        />

        {/* Filter */}

        <div className="mb-12 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? "scale-105 bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:-translate-y-1 hover:bg-blue-50 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="flex h-[380px] flex-col p-6">

                {/* Category Badge */}

                <div className="mb-3">

                  {project.category === "Manual" && (
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      🐞 Manual Testing
                    </span>
                  )}

                  {project.category === "API" && (
                    <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                      🔗 API Testing
                    </span>
                  )}

                  {project.category === "Automation" && (
                    <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                      🤖 Automation
                    </span>
                  )}

                  {project.category === "Database" && (
                    <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                      🗄️ Database
                    </span>
                  )}

                  {project.category === "Java" && (
                    <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
                      ☕ Java
                    </span>
                  )}

                  {project.category === "React" && (
                    <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                      ⚛️ React
                    </span>
                  )}

                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white transition hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700"
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
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;