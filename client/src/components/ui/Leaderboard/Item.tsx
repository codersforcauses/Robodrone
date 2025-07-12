export default function Item({ row, isLastItem }) {
  return (
    <div
      className={`grid w-full grid-cols-5 text-center hover:bg-gray-50 ${
        isLastItem ? "rounded-b-lg" : "border-b border-gray-200"
      }`}
    >
      <div className="px-3 py-3 font-bold">{row.rank}</div>
      <div className="px-3 py-3">{row.teamName}</div>
      <div className="px-3 py-3">{row.honourPoints}</div>
      <div className="px-3 py-3">{row.regularPoints}</div>
      <div className="px-3 py-3">{row.missionTime}</div>
    </div>
  );
}
