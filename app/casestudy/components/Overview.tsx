export default function Overview({ summary }: { summary: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-cyan-400">Overview</h2>
      <p className="text-gray-300">{summary}</p>
    </div>
  );
}
