import SectionTitle from "../UI/SectionTitle";
import skillsProgress from "../../data/skillsProgress";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <SectionTitle
            title="Skills"
            subtitle="Technologies and tools I use in Software Quality Assurance."
            titleClassName="dark:text-white"
            subtitleClassName="dark:text-gray-300"
          />

          <span className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30">
            Manual • API • Database • Automation Testing
          </span>

          <h3 className="mb-5 text-4xl font-bold text-gray-900 dark:text-white">
            Software QA Engineer
          </h3>

          <p className="leading-8 text-gray-600 dark:text-gray-300">
            Passionate about software quality with hands-on experience in
            Manual Testing, API Testing, Database Testing and Automation.
            Experienced using Jira, Postman, MySQL, Selenium, Java and Git
            while following Agile methodologies.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-lg rounded-3xl bg-gray-50 p-8 shadow-xl dark:bg-gray-900">

          <h3 className="mb-8 text-lg font-bold uppercase tracking-widest text-blue-600">
            Core Competencies
          </h3>

          {skillsProgress.map((skill) => (
            <div key={skill.name} className="mb-6">

              <div className="mb-2 flex justify-between">
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
    </section>
  );
}

export default Skills;