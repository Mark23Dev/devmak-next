export default function TechStack({ techs }: { techs: string[] }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-pink-400">Tech Stack</h2>
      <ul className="flex flex-wrap gap-4 mt-2">
        {techs.map((tech) => (
          <li key={tech} className="bg-gray-800 text-white px-3 py-1 rounded-lg shadow-sm">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
