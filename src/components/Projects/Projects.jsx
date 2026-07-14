import projects from "../../data/projects";
import SectionTitle from "../UI/SectionTitle";

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Projects"
          subtitle="Some of the Software Testing projects I have worked on."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                {project.id === 1 && (
                  <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    ⭐ Featured Project
                  </span>
                )}

                <h3 className="mb-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-5 text-gray-600">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                >
                  View LinkedIn Post
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;