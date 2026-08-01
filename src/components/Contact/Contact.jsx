import SectionTitle from "../UI/SectionTitle";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Contact"
          subtitle="Feel free to reach out for opportunities, collaborations, or just to say hello."
        titleClassName="dark:text-white"
            subtitleClassName="dark:text-gray-300"
       />

        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-xl dark:bg-gray-900 dark:border dark:border-gray-700">

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <a
                  href="mailto:abdo.tabaa5@gmail.com"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  abdo.tabaa5@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </h3>
                <a
                  href="tel:+201212637455"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  +20 121 263 7455
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/abdelrahman-eltabaa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  Abdelrahman Eltabaa
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  GitHub
                </h3>
                <a
                  href="https://github.com/abdelrahman-eltabaa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300"
                >
                  github.com/abdelrahman-eltabaa
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cairo, Egypt
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;