export default function Solution({ solution }: { solution: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-green-400">Solution</h2>
      <p className="text-gray-300">{solution}</p>
    </div>
  );
}
