import profile from "../../data/profile";

function HeroStats() {
  const { stats } = profile;

  const items = [
    { value: stats.projects, label: "Projects" },
    { value: stats.certificates, label: "Certificates" },
    { value: stats.sqlProblems, label: "SQL Problems" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;