"use client";

import { useEffect, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

type TeamResult = {
  team_name: string;
  honor_point: number;
  point: number;
  completed_time_second: number;
  group: number;
  group_rank: number;
  qualified: boolean;
};

export default function List() {
  const [groups, setGroups] = useState<number[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [rawData, setRawData] = useState<TeamResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch group list on first load
  useEffect(() => {
    async function fetchGroups() {
      try {
        const res = await fetch(`${API_BASE}/details/groups/`);
        const data: number[] = await res.json();
        const filteredGroups = data.filter((groupId) => groupId !== 0);
        setGroups(filteredGroups);
        if (filteredGroups.length > 0) {
          setSelectedGroup(filteredGroups[0]);
        }
      } catch (err) {
        console.error("Failed to fetch groups:", err);
      }
    }

    fetchGroups();
  }, []);

  // Fetch leaderboard for selected group
  useEffect(() => {
    if (selectedGroup === null) return;

    async function fetchLeaderboard() {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_BASE}/details/group_leaderboard/${selectedGroup}/`,
        );
        const data = await res.json();
        setRawData(data);
      } catch (err) {
        console.error("Failed to fetch leaderboard:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, [selectedGroup]);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGroup = parseInt(e.target.value, 10);
    setSelectedGroup(newGroup);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        {/* Group selection dropdown */}
        <div className="flex bg-white p-4">
          <div className="relative">
            <label
              htmlFor="groupSelect"
              className="body-sm bg-white pr-2 text-xs"
            >
              Select Group:
            </label>
            <select
              id="groupSelect"
              value={selectedGroup ?? ""}
              onChange={handleGroupChange}
              className="body-sm rounded-md border border-gray-300 bg-white px-4 py-2 pt-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>
                -- Select --
              </option>
              {groups.map((groupId) => (
                <option key={groupId} value={groupId}>
                  Group {groupId}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="py-8 text-center">Loading leaderboard...</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr className="title bg-primary text-center text-xs font-bold text-white sm:text-sm md:text-base">
                <th className="md:text-l px-6 py-4">Group Rank</th>
                <th className="px-6 py-4 md:text-lg">Team</th>
                <th className="px-6 py-4 md:text-lg">Honour Points</th>
                <th className="px-6 py-4 md:text-lg">Regular Points</th>
                <th className="px-6 py-4 md:text-lg">Mission Time</th>
                <th className="px-6 py-4 md:text-lg">Status</th>
              </tr>
            </thead>
            <tbody className="body-sm">
              {rawData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-gray-400">
                    No results yet
                  </td>
                </tr>
              ) : (
                rawData.map((row, index) => (
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
                    <td className="px-6 py-4">{row.honor_point}</td>
                    <td className="px-6 py-4">{row.point}</td>
                    <td className="px-6 py-4">{row.completed_time_second}</td>
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
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
