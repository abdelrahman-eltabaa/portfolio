import SectionTitle from "../UI/SectionTitle";
import certificates from "../../data/certificates";
import { FaAward } from "react-icons/fa";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-white py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-6">
<SectionTitle
  title="Certificates"
  subtitle="Professional certifications that demonstrate my knowledge and continuous learning in Software Testing."
  titleClassName="dark:text-white"
  subtitleClassName="dark:text-gray-300"
/>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900"
            >
              <FaAward className="mb-6 text-5xl text-blue-600" />

              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {certificate.title}
              </h3>

              <p className="mb-1 text-gray-600 dark:text-gray-300">
                {certificate.issuer}
              </p>

              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                {certificate.year}
              </p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                View Certificate
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;