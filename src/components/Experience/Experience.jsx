import experience from "../../data/experience";
import SectionTitle from "../UI/SectionTitle";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Experience"
          subtitle="My professional journey in Software Quality Assurance."
          titleClassName="dark:text-white"
          subtitleClassName="dark:text-gray-300"
        />

        <div className="relative mx-auto max-w-4xl border-l-4 border-blue-600 pl-10">

          {experience.map((job) => (
            <div key={job.id} className="relative mb-16">

              {/* Timeline Dot */}
              <div className="absolute -left-[54px] top-2 h-6 w-6 rounded-full border-4 border-white bg-blue-600 dark:border-gray-900"></div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">

                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {job.position}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">

                      <span className="flex items-center gap-2">
                        <FaBuilding />
                        {job.company}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        {job.type}
                      </span>

                    </div>
                  </div>

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    {job.period}
                  </span>

                </div>

                <div className="mb-6 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
                  <FaBriefcase className="text-blue-600" />
                  Technologies & Responsibilities
                </div>

                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-900/40 dark:hover:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;