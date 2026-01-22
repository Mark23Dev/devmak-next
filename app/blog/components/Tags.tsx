export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {tags.map((tag) => (
        <span key={tag} className="bg-gray-800 text-white px-3 py-1 rounded-lg shadow-sm">
          {tag}
        </span>
      ))}
    </div>
  );
}
