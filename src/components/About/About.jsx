import profileImage from "../../assets/images/profile.jpg";
import {
  FaUserGraduate,
  FaCertificate,
  FaBug,
  FaLaptopCode,
} from "react-icons/fa";
import SectionTitle from "../UI/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="About Me"
          subtitle="Get to know more about my background, education, certifications, and passion for Software Quality Assurance."
       titleClassName="dark:text-white"
            subtitleClassName="dark:text-gray-300"
      />

        <div className="grid items-center gap-16 md:grid-cols-2">

          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="About"
              className="h-96 w-80 rounded-3xl object-cover shadow-2xl"
            />
          </div>

          <div>

            <p className="mb-10 text-lg leading-9 text-gray-600 dark:text-gray-300">
              I'm Abdelrahman Eltabaa, a Computer Engineering graduate and
              ISTQB Certified Software QA Engineer. I enjoy ensuring software
              quality through Manual Testing, API Testing, SQL, and Automation.
              I'm always eager to learn new technologies and contribute to
              building reliable software products.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <FaUserGraduate className="mb-3 text-3xl text-blue-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tanta University
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <FaCertificate className="mb-3 text-3xl text-blue-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Certification
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ISTQB CTFL v4
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <FaBug className="mb-3 text-3xl text-blue-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Manual & API Testing
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <FaLaptopCode className="mb-3 text-3xl text-blue-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Selenium • Java • TestNG
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;