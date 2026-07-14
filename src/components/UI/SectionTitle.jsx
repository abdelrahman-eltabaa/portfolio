function SectionTitle({
  title,
  subtitle,
  titleClassName = "",
  subtitleClassName = "",
}) {
  return (
    <div className="mb-16 text-center">
      <h2
        className={`text-5xl font-bold text-gray-900 ${titleClassName}`}
      >
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded bg-blue-600"></div>
      <div className="mx-auto mt-3 h-1 w-16 rounded bg-blue-400"></div>

      <p
        className={`mt-6 text-lg text-gray-600 ${subtitleClassName}`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;