import { useEffect, useState } from "react";

import { MatchDetailsData } from "../Common/types";

export type MatchDetailsProps = {
  matchData: MatchDetailsData[];
  header: string[];
};

export default function List({ matchData, header }: MatchDetailsProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="title bg-primary text-center font-bold text-white">
              {header.map((row, index) => (
                <th key={index} className="px-6 py-4 md:text-lg">
                  {row}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="body-sm">
            {matchData.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 bg-green-50 text-center hover:bg-gray-100`}
              >
                <td className="px-6 py-4">{row.teamName}</td>
                <td className="px-6 py-4">{row.opponent}</td>
                <td className="px-6 py-4">{row.whitePins}</td>
                <td className="px-6 py-4">{row.penaltyPins}</td>
                <td className="px-6 py-4">{row.yellowCard}</td>
                <td className="px-6 py-4">{row.redCard}</td>
                <td className="px-6 py-4">{row.p1_postion}</td>
                <td className="px-6 py-4">{row.p2_postion}</td>
                <td className="px-6 py-4">{row.honorPoint}</td>
                <td className="px-6 py-4">{row.regularPoint}</td>
                <td className="px-6 py-4">{row.completedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
