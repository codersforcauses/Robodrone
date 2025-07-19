import Image from "next/image";
import { useEffect, useState } from "react";

import { MatchDetailsData } from "../components/ui/Common/types";
import List, { MatchDetailsProps } from "../components/ui/Matchdetails/List";

const columns = [
  "Team name",
  "Opponent",
  "White Pins",
  "Penalty Pins",
  "Yellow Card",
  "Red Card",
  "P1 position",
  "P2 position",
  "Honour Point",
  "Regular Point",
  "Completed Time",
];

const mockData: MatchDetailsData[] = [
  {
    teamName: "Red Falcons",
    opponent: "Blue Hawks",
    whitePins: 2,
    penaltyPins: 0,
    yellowCard: 1,
    redCard: 0,
    p1_postion: 1,
    p2_postion: 0,
    honorPoint: 3,
    regularPoint: 3,
    completedTime: 240,
  },
  {
    teamName: "Blue Hawks",
    opponent: "Red Falcons",
    whitePins: 2,
    penaltyPins: 0,
    yellowCard: 1,
    redCard: 0,
    p1_postion: 1,
    p2_postion: 0,
    honorPoint: 3,
    regularPoint: 3,
    completedTime: 240,
  },
];

export default function MatchDetails() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    // Send API Request
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-light pt-8">
      <div>
        <h1 className="title-large text-center font-bold">Match Details</h1>
        <div className="relative mx-auto h-[80px] w-[1100px]">
          <Image
            src="/ProgressBar4.svg"
            alt="Progress Bar"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="relative mx-auto h-[80px] w-[1100px]">
        <List header={columns} matchData={data} />
      </div>
    </div>
  );
}
