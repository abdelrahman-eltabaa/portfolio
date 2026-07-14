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
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Contact"
          subtitle="Feel free to reach out for opportunities, collaborations, or just to say hello."
        />

        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-xl">

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:abdo.tabaa5@gmail.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  abdo.tabaa5@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+201212637455"
                  className="text-gray-600 hover:text-blue-600"
                >
                  +20 121 263 7455
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/abdelrahman-eltabaa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Abdelrahman Eltabaa
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/abdo659"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  github.com/abdo659
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">
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