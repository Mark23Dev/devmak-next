export default function Results({ results }: { results: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-purple-500">Results & Learnings</h2>
      <p className="text-gray-300">{results}</p>
    </div>
  );
}
