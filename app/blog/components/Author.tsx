export default function Author({ name, date }: { name: string; date: string }) {
  return (
    <div className="flex items-center justify-between text-gray-400 mt-6">
      <span>By {name}</span>
      <span>{date}</span>
    </div>
  );
}
