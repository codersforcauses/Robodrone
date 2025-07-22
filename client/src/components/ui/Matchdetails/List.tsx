"use client";

import { useEffect, useState } from "react";

import { MatchDetailsData } from "../Common/types";

export default function MatchDetailsList() {
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [matchData, setMatchData] = useState<MatchDetailsData[][]>([]);
  const [groups, setGroups] = useState<number[]>([]);
  const [stages, setStages] = useState<number[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchDropdownOptions() {
      try {
        const [groupRes, stageRes] = await Promise.all([
          fetch(`${BASE_URL}/details/groups/`),
          fetch(`${BASE_URL}/details/stages/`),
        ]);
        const groupData = await groupRes.json();
        const stageData = await stageRes.json();
        setGroups(groupData);
        setStages(stageData);
        if (stageData.length > 0) setSelectedStage(stageData[0]);
      } catch (err) {
        console.error("Failed to fetch dropdown options", err);
      }
    }

    fetchDropdownOptions();
  }, []);

  useEffect(() => {
    if (!selectedStage) return;

    async function fetchMatchDetails() {
      setLoading(true);
      try {
        let url = `${BASE_URL}/details/knockout_stage/${selectedStage}/`;
        if (selectedGroup !== null) url += `?group_id=${selectedGroup}`;

        const res = await fetch(url);
        const data = await res.json();

        const transformed = data.map((match: any[]) =>
          match.map((item: any) => ({
            teamName: item.team_name,
            matchId: item.match_id,
            matchName: item.match_name,
            group: item.group,
            stage: item.stage,
            honorPoint: item.honor_point,
            point: item.point,
            completedTime: item.completed_time_second,
            p1_postion: item.p1_position,
            p2_postion: item.p2_position,
            whitePins: item.white_pins,
            penaltyPins: item.penalty_pins,
            yellowCard: item.yellow_cards,
            redCard: item.red_cards,
          })),
        );

        setMatchData(transformed);
      } catch (err) {
        console.error("Failed to fetch match details", err);
        setMatchData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMatchDetails();
  }, [selectedGroup, selectedStage]);

  const header = [
    "Team Name",
    "White Pins",
    "Penalty Pins",
    "Yellow Card",
    "Red Card",
    "P1 Position",
    "P2 Position",
    "Honor Points",
    "Regular Points",
    "Completed Time",
  ];

  const sortedMatchData = [...matchData].sort((a, b) => {
    const aId = a[0]?.matchId ?? 0;
    const bId = b[0]?.matchId ?? 0;
    return aId - bId;
  });

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <div className="flex flex-wrap gap-6 bg-white p-4">
          {/* Dropdowns */}
          <div className="relative">
            <label htmlFor="stageSelect" className="body-sm pr-2 text-xs">
              Select Stage (required)
            </label>
            <select
              id="stageSelect"
              value={selectedStage ?? ""}
              onChange={(e) =>
                setSelectedStage(
                  e.target.value ? parseInt(e.target.value) : null,
                )
              }
              className="body-sm rounded-md border border-gray-300 bg-white px-4 py-2 pt-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">-- Select --</option>
              {stages.map((sid) => (
                <option key={sid} value={sid}>
                  Stage {sid}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label htmlFor="groupSelect" className="body-sm pr-2 text-xs">
              Select Group (optional)
            </label>
            <select
              id="groupSelect"
              value={selectedGroup ?? ""}
              onChange={(e) =>
                setSelectedGroup(
                  e.target.value ? parseInt(e.target.value) : null,
                )
              }
              className="body-sm rounded-md border border-gray-300 bg-white px-4 py-2 pt-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">-- None --</option>
              {groups.map((gid) => (
                <option key={gid} value={gid}>
                  Group {gid}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="py-8 text-center">Loading match details...</p>
        ) : selectedStage ? (
          matchData.length === 0 ? (
            <p className="py-6 text-center text-gray-500">
              No match data available.
            </p>
          ) : (
            <div className="space-y-10 px-4 pb-8 pt-4">
              {sortedMatchData.map((match, idx) => (
                <div key={idx}>
                  <h2 className="subtitle mb-4 font-semibold text-primary">
                    {match[0]?.matchName ?? `Match ${idx + 1}`}
                  </h2>
                  <table className="min-w-full bg-white shadow">
                    <thead>
                      <tr className="bg-primary text-center text-xs font-bold text-white sm:text-sm md:text-base">
                        {header.map((col, i) => (
                          <th key={i} className="whitespace-nowrap px-2 py-2">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="body-sm text-center">
                      {match.map((row, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-200 bg-green-50 hover:bg-gray-100"
                        >
                          <td className="px-4 py-2">{row.teamName}</td>
                          <td className="px-4 py-2">{row.whitePins}</td>
                          <td className="px-4 py-2">{row.penaltyPins}</td>
                          <td className="px-4 py-2">{row.yellowCard}</td>
                          <td className="px-4 py-2">{row.redCard}</td>
                          <td className="px-4 py-2">{row.p1_postion}</td>
                          <td className="px-4 py-2">{row.p2_postion}</td>
                          <td className="px-4 py-2">{row.honorPoint}</td>
                          <td className="px-4 py-2">{row.point}</td>
                          <td className="px-4 py-2">{row.completedTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )
        ) : (
          <p className="py-8 text-center text-gray-500">
            Select a stage to view results
          </p>
        )}
      </div>
    </div>
  );
}
