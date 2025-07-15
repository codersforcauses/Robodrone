import Image from "next/image";
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
      progress = 33;
      titleName = "Format & Rules";
      break;
    case "guests-sponsors":
      titleName = "Guests & Sponsors";
      progress = 66;
      break;
    case "leaderboard":
      titleName = "Leaderboard";
      progress = 90;
      break;
  }

  return (
    <div>
      <div className="w-full flex-col justify-center">
        <div className="mb-4 flex items-center justify-center">
          <a className="title-large text-center text-[50px] text-dark md:text-[60px]">
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
              width="25"
              height="10"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex w-full">
          <div className="h-[2px] w-full bg-dark" />
        </div>
      </div>
    </div>
  );
}
