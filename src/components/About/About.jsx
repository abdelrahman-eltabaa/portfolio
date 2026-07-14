import profileImage from "../../assets/images/profile.jpg";
import { FaUserGraduate, FaCertificate, FaBug, FaLaptopCode } from "react-icons/fa";
import SectionTitle from "../UI/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-24 mx-auto max-w-7xl px-6 py-24 "
    >
   <SectionTitle
  title="About Me"
  subtitle="Get to know more about my background, education, certifications, and passion for Software Quality Assurance."
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

          <p className="mb-10 text-lg leading-9 text-gray-600">
            I'm Abdelrahman Eltabaa, a Computer Engineering graduate and
            ISTQB Certified Software QA Engineer. I enjoy ensuring software
            quality through Manual Testing, API Testing, SQL, and Automation.
            I'm always eager to learn new technologies and contribute to
            building reliable software products.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border p-5 shadow-sm">
              <FaUserGraduate className="mb-3 text-3xl text-blue-600" />
              <h3 className="font-bold">Education</h3>
              <p>Tanta University</p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <FaCertificate className="mb-3 text-3xl text-blue-600" />
              <h3 className="font-bold">Certification</h3>
              <p>ISTQB CTFL v4</p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <FaBug className="mb-3 text-3xl text-blue-600" />
              <h3 className="font-bold">Experience</h3>
              <p>Manual & API Testing</p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <FaLaptopCode className="mb-3 text-3xl text-blue-600" />
              <h3 className="font-bold">Automation</h3>
              <p>Selenium • Java • TestNG</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;