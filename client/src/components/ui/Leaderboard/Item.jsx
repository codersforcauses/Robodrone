export default function Item({ row }) {
    return(
        <tr className="border-b text-center">
            <td className="py-3 px-3 font-bold">{row.rank}</td>
            <td className="py-3 px-3">{row.teamName}</td>
            <td className="py-3 px-3">{row.honourPoints}</td>
            <td className="py-3 px-3">{row.regularPoints}</td>
            <td className="py-3 px-3">{row.missionTime}</td>
        </tr>
    );
}