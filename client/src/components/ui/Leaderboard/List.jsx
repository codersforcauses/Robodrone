import Item from "./Item"
import { useState, useEffect } from "react"

export default function List({  }) {
    // Mock data for development
    const mockData = [
        { rank: 1, teamName: "Drone Rangers", honourPoints: 350, regularPoints: 420, missionTime: "01:45:22" },
        { rank: 2, teamName: "Sky Navigators", honourPoints: 320, regularPoints: 380, missionTime: "01:52:10" },
        { rank: 3, teamName: "RoboPilots", honourPoints: 290, regularPoints: 365, missionTime: "02:05:33" },
        { rank: 4, teamName: "Aerial Mechanics", honourPoints: 270, regularPoints: 340, missionTime: "02:11:45" },
        { rank: 5, teamName: "Circuit Flyers", honourPoints: 250, regularPoints: 310, missionTime: "02:18:20" },
        { rank: 6, teamName: "ByteCopters", honourPoints: 230, regularPoints: 290, missionTime: "02:25:17" },
        { rank: 7, teamName: "AlgoDrones", honourPoints: 210, regularPoints: 270, missionTime: "02:31:09" },
    ];

    // Use provided data or fallback to mock data
    const displayData = data && data.length > 0 ? data : mockData;

    return(
        <div className="">
            <table className="leaderboard-table border-collapse shadow-md rounded-md overflow-hidden">
                <thead>
                    <tr className=" bg-primary font-bold text-center" style={{color: 'white'}}> {/* For some reason, no amount of tailwind would make these headings white */}
                        <th className="py-3 px-3">Rank</th>
                        <th className="py-3 px-3">Team</th>
                        <th className="py-3 px-3">Honour Points</th>
                        <th className="py-3 px-3">Regular Points</th>
                        <th className="py-3 px-3">Mission Time</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 text-center">
                            <td className="py-3 px-3 font-bold">{row.rank}</td>
                            <td className="py-3 px-3">{row.teamName}</td>
                            <td className="py-3 px-3">{row.honourPoints}</td>
                            <td className="py-3 px-3">{row.regularPoints}</td>
                            <td className="py-3 px-3">{row.missionTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}