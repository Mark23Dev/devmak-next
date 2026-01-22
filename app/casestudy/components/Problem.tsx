export default function Problem({ problem }: { problem: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-purple-400">Problem</h2>
      <p className="text-gray-300">{problem}</p>
    </div>
  );
}
