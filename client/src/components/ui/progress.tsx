import Image from "next/image";
import { title } from "process";
import * as React from "react";

export default function ProgressBar({ pageName }: { pageName: string }) {
  let progress = 0;
  let titleName = "";
  switch (pageName) {
    case "schedule":
      progress = 0;
      titleName = "Drone Competition Schedule";
      break;
    case "format-rules":
      progress = 25;
      titleName = "Format Rules";
      break;
    case "leaderboard":
      titleName = "Leaderboard";
      progress = 50;
      break;
    case "sponsor-guest":
      titleName = "Sponsor & Guest";
      progress = 75;
      break;
    case "progress":
      titleName = "Progress";
      progress = 15;
      break;
  }

  return (
    <div className="w-full px-10">
      <div className="customerBar w-full flex-col justify-center gap-2">
        <div className="mb-10 flex items-center justify-center">
          <a className="title-large text-center text-[2.5rem] font-bold text-dark">
            {titleName}
          </a>
        </div>
        <div className="flex flex-1">
          <div
            className="flex-shrink-0"
            style={{
              width: `${progress}%`,
              transition: "width 3s ease-in-out",
            }}
          />
          <div>
            <Image
              src="/Drone.svg"
              alt="Drone"
              width="50"
              height="20"
              className="object-contain"
            />
          </div>

          <div className="ml-auto">
            <Image
              src="/FinishFlag.svg"
              alt="Finish Flag"
              width="50"
              height="20"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex w-full">
          <div className="h-[2px] w-full bg-black" />
        </div>
      </div>
    </div>
  );
}
