import { useEffect, useState } from "react";

const groupNames: String[] = ["Group A", "Group B", "Group C"];

export default function List({ data = [] }) {
  // Mock data for development (with four teams per group)
  const mockData = [
    // Group A teams
    {
      team_name: "Drone Rangers",
      honor_points: 350,
      regular_points: 420,
      total_time_seconds: 154,
      group: 1,
    },
    {
      team_name: "RoboPilots",
      honor_points: 290,
      regular_points: 365,
      total_time_seconds: 234,
      group: 1,
    },
    {
      team_name: "Airborne Coders",
      honor_points: 210,
      regular_points: 280,
      total_time_seconds: 163,
      group: 1,
    },
    {
      team_name: "Flying Algorithms",
      honor_points: 180,
      regular_points: 240,
      total_time_seconds: 274,
      group: 1,
    },

    // Group B teams
    {
      team_name: "Sky Navigators",
      honor_points: 320,
      regular_points: 380,
      total_time_seconds: 198,
      group: 2,
    },
    {
      team_name: "Circuit Flyers",
      honor_points: 250,
      regular_points: 310,
      total_time_seconds: 193,
      group: 2,
    },
    {
      team_name: "Byte Squadron",
      honor_points: 220,
      regular_points: 290,
      total_time_seconds: 198,
      group: 2,
    },
    {
      team_name: "Quantum Wings",
      honor_points: 190,
      regular_points: 250,
      total_time_seconds: 183,
      group: 2,
    },

    // Group C teams
    {
      team_name: "Aerial Mechanics",
      honor_points: 270,
      regular_points: 340,
      total_time_seconds: 348,
      group: 3,
    },
    {
      team_name: "PropCoders",
      honor_points: 240,
      regular_points: 300,
      total_time_seconds: 314,
      group: 3,
    },
    {
      team_name: "Binary Flyers",
      honor_points: 200,
      regular_points: 270,
      total_time_seconds: 109,
      group: 3,
    },
    {
      team_name: "Aerodynamic Devs",
      honor_points: 170,
      regular_points: 230,
      total_time_seconds: 54,
      group: 3,
    },
  ];

  // Use provided data or fallback to mock data
  const rawData = data.length > 0 ? data : mockData;

  // Get unique groups for dropdown
  const groups = [...new Set(rawData.map((item) => item.group))];

  function addCalculatedFields(rawData: any) {
    let teamsData: Array<any> = [];

    for (let i = 0; i < groups.length; i++) {
      // For each group
      // Get all the teams in that group
      let groupData = rawData.filter((team) => {
        return team.group === i;
      });

      // Sort them descending by points
      groupData.sort((teamA, teamB) => {
        console.log(teamA.regular_points, teamB.regular_points);
        return teamB.regular_points - teamA.regular_points;
      });

      // Add each of those teams into the teamData with calculated fields
      for (let j = 0; j < groupData.length; j++) {
        let team = groupData[j];
        team.group_rank = j + 1;
        team.qualified = team.group_rank <= 2;
        team.mission_time =
          "" +
          Math.floor(team.total_time_seconds / 60) +
          ":" +
          (team.total_time_seconds % 60);
        teamsData.push(team);
      }
    }
    return teamsData;
  }

  // Add calculated fields group_rank and qualified to the data
  const teamsData = addCalculatedFields(rawData);

  // Initialize selectedGroup with the first group instead of "All Groups"
  const [selectedGroup, setSelectedGroup] = useState(groups[0] || 1);

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
                  {row.group_rank}
                </td>
                <td className="px-6 py-4">{row.team_name}</td>
                <td className="px-6 py-4">{row.honor_points}</td>
                <td className="px-6 py-4">{row.regular_points}</td>
                <td className="px-6 py-4">{row.mission_time}</td>
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
