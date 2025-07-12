import { useEffect, useState } from "react";

export default function List() {
  // Mock data for development
  const mockData = [
    {
      rank: 1,
      teamName: "Drone Rangers",
      honourPoints: 350,
      regularPoints: 420,
      missionTime: "01:45:22",
    },
    {
      rank: 2,
      teamName: "Sky Navigators",
      honourPoints: 320,
      regularPoints: 380,
      missionTime: "01:52:10",
    },
    {
      rank: 3,
      teamName: "RoboPilots",
      honourPoints: 290,
      regularPoints: 365,
      missionTime: "02:05:33",
    },
    {
      rank: 4,
      teamName: "Aerial Mechanics",
      honourPoints: 270,
      regularPoints: 340,
      missionTime: "02:11:45",
    },
  ];

  // Just use mockData directly
  const displayData = mockData;

  return (
    <div className="w-full max-w-7xl overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-primary text-center font-bold text-white">
              <th className="title px-6 py-4 md:text-lg">Rank</th>
              <th className="title px-6 py-4 md:text-lg">Team</th>
              <th className="title px-6 py-4 md:text-lg">Honour Points</th>
              <th className="title px-6 py-4 md:text-lg">Regular Points</th>
              <th className="title px-6 py-4 md:text-lg">Mission Time</th>
            </tr>
          </thead>
          <tbody className="body-sm">
            {displayData.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 text-center hover:bg-gray-100`}
              >
                <td className="px-6 py-4 font-bold">{row.rank}</td>
                <td className="px-6 py-4">{row.teamName}</td>
                <td className="px-6 py-4">{row.honourPoints}</td>
                <td className="px-6 py-4">{row.regularPoints}</td>
                <td className="px-6 py-4">{row.missionTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
