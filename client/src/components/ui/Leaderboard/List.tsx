import { useEffect, useState } from "react";

export default function List({ data = [] }) {
  // Mock data for development (with four teams per group)
  const mockData = [
    // Group A teams
    {
      groupRank: 1,
      teamName: "Drone Rangers",
      honourPoints: 350,
      regularPoints: 420,
      missionTime: "01:45:22",
      group: "Group A",
      qualified: true,
    },
    {
      groupRank: 2,
      teamName: "RoboPilots",
      honourPoints: 290,
      regularPoints: 365,
      missionTime: "02:05:33",
      group: "Group A",
      qualified: true,
    },
    {
      groupRank: 3,
      teamName: "Airborne Coders",
      honourPoints: 210,
      regularPoints: 280,
      missionTime: "02:15:40",
      group: "Group A",
      qualified: false,
    },
    {
      groupRank: 4,
      teamName: "Flying Algorithms",
      honourPoints: 180,
      regularPoints: 240,
      missionTime: "02:30:15",
      group: "Group A",
      qualified: false,
    },

    // Group B teams
    {
      groupRank: 1,
      teamName: "Sky Navigators",
      honourPoints: 320,
      regularPoints: 380,
      missionTime: "01:52:10",
      group: "Group B",
      qualified: true,
    },
    {
      groupRank: 2,
      teamName: "Circuit Flyers",
      honourPoints: 250,
      regularPoints: 310,
      missionTime: "02:18:20",
      group: "Group B",
      qualified: true,
    },
    {
      groupRank: 3,
      teamName: "Byte Squadron",
      honourPoints: 220,
      regularPoints: 290,
      missionTime: "02:25:17",
      group: "Group B",
      qualified: false,
    },
    {
      groupRank: 4,
      teamName: "Quantum Wings",
      honourPoints: 190,
      regularPoints: 250,
      missionTime: "02:35:45",
      group: "Group B",
      qualified: false,
    },

    // Group C teams
    {
      groupRank: 1,
      teamName: "Aerial Mechanics",
      honourPoints: 270,
      regularPoints: 340,
      missionTime: "02:11:45",
      group: "Group C",
      qualified: true,
    },
    {
      groupRank: 2,
      teamName: "PropCoders",
      honourPoints: 240,
      regularPoints: 300,
      missionTime: "02:20:30",
      group: "Group C",
      qualified: true,
    },
    {
      groupRank: 3,
      teamName: "Binary Flyers",
      honourPoints: 200,
      regularPoints: 270,
      missionTime: "02:28:55",
      group: "Group C",
      qualified: false,
    },
    {
      groupRank: 4,
      teamName: "Aerodynamic Devs",
      honourPoints: 170,
      regularPoints: 230,
      missionTime: "02:38:20",
      group: "Group C",
      qualified: false,
    },
  ];

  // Use provided data or fallback to mock data
  const teamsData = data.length > 0 ? data : mockData;

  // Get unique groups for dropdown
  const groups = [...new Set(teamsData.map((item) => item.group))];

  // Initialize selectedGroup with the first group instead of "All Groups"
  const [selectedGroup, setSelectedGroup] = useState(groups[0] || "Group A");

  // Filter data for the selected group only
  const displayData = teamsData.filter((item) => item.group === selectedGroup);

  const handleGroupChange = (e: any) => {
    setSelectedGroup(e.target.value);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        {/* Group selection dropdown */}
        <div className="flex bg-white p-4">
          <div className="relative">
            <label
              htmlFor="groupSelect"
              className="body-sm absolute -top-2 left-3 z-10 bg-white px-1 text-xs"
            >
              Select Group:
            </label>
            <select
              id="groupSelect"
              value={selectedGroup}
              onChange={handleGroupChange}
              className="body-sm rounded-md border border-gray-300 bg-white px-4 py-2 pt-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {groups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>
        </div>

        <table className="min-w-full bg-white">
          <thead>
            <tr className="title bg-primary text-center font-bold text-white">
              <th className="px-6 py-4 md:text-lg">Group Rank</th>
              <th className="px-6 py-4 md:text-lg">Team</th>
              <th className="px-6 py-4 md:text-lg">Honour Points</th>
              <th className="px-6 py-4 md:text-lg">Regular Points</th>
              <th className="px-6 py-4 md:text-lg">Mission Time</th>
              <th className="px-6 py-4 md:text-lg">Status</th>
            </tr>
          </thead>
          <tbody className="body-sm">
            {displayData.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 text-center hover:bg-gray-100 ${
                  row.qualified ? "bg-green-50" : ""
                }`}
              >
                <td className="body-lg px-6 py-4 font-bold italic">
                  {row.groupRank}
                </td>
                <td className="px-6 py-4">{row.teamName}</td>
                <td className="px-6 py-4">{row.honourPoints}</td>
                <td className="px-6 py-4">{row.regularPoints}</td>
                <td className="px-6 py-4">{row.missionTime}</td>
                <td className="px-6 py-4">
                  {row.qualified ? (
                    <span className="font-medium text-green-600">
                      Qualified
                    </span>
                  ) : (
                    <span className="text-gray-500">Not Qualified</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
