import SectionTitle from "../UI/SectionTitle";
import skillsProgress from "../../data/skillsProgress";

function Skills() {
  return (
    <section id="skills" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use in Software Quality Assurance."
          titleClassName="dark:text-white"
          subtitleClassName="dark:text-gray-300"
        />

        <div className="relative -mt-10 mb-12 flex justify-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-center text-sm font-semibold text-blue-600 dark:bg-blue-900/30">
            Manual • API • Database • Automation Testing
          </span>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <div className="w-full rounded-3xl bg-gray-50 p-6 shadow-xl sm:p-8 dark:bg-gray-900">
            <h3 className="mb-8 text-lg font-bold uppercase tracking-widest text-blue-600">
              Core Competencies
            </h3>

            {skillsProgress.map((skill) => (
              <div key={skill.name} className="mb-6 last:mb-0">
                <div className="mb-2 flex justify-between gap-4">
                  <span className="font-medium dark:text-white">
                    {skill.name}
                  </span>

                  <span className="font-semibold text-blue-600">
                    {skill.value}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;