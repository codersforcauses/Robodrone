import Image from "next/image";
import * as React from "react";

export default function ProgressBar({ pageName }: { pageName: string }) {
  const [progressWidth, setProgressWidth] = React.useState(0);
  let progress = 0;
  let titleName = "";

  switch (pageName) {
    case "schedule":
      progress = 0;
      titleName = "Drone Competition Schedule";
      break;
    case "format-rules":
      progress = 30;
      titleName = "Format & Rules";
      break;
    case "guests-sponsors":
      titleName = "Guests & Sponsors";
      progress = 60;
      break;
    case "leaderboard":
      titleName = "Leaderboard";
      progress = 80;
      break;
  }

  React.useEffect(() => {
    const updateProgress = () => {
      if (pageName === "leaderboard") {
        setProgressWidth(window.innerWidth >= 768 ? 90 : 80);
      } else {
        setProgressWidth(progress);
      }
    };

    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, [pageName, progress]);

  return (
    <div>
      <div className="w-full flex-col justify-center">
        <div className="mb-4 flex items-center justify-center">
          <a className="title-large text-center text-[30px] text-dark md:text-[50px] lg:text-[60px]">
            {titleName}
          </a>
        </div>
        <div className="flex flex-1 items-center">
          <div
            className="flex-shrink-0"
            style={{
              width: `${progressWidth}%`,
              transition: "width 3s ease-in-out",
            }}
          />
          <div className="flex-shrink-0">
            <Image
              src="/Drone.svg"
              alt="Drone"
              width="30"
              height="12"
              className="object-contain md:h-[16px] md:w-[40px] lg:h-[20px] lg:w-[50px]"
            />
          </div>

          <div className="ml-auto flex-shrink-0">
            <Image
              src="/FinishFlag.svg"
              alt="Finish Flag"
              width="20"
              height="8"
              className="object-contain md:h-[12px] md:w-[30px] lg:h-[20px] lg:w-[50px]"
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
