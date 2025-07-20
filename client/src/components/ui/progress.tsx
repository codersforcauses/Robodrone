import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getPageConfigByName } from "../../config/pages";

export default function ProgressBar({ pageName }: { pageName: string }) {
  const [progressWidth, setProgressWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const previousPageRef = useRef<string>("");
  const previousProgressRef = useRef<number>(0);
  const isFirstRenderRef = useRef<boolean>(true);

  const pageConfig = getPageConfigByName(pageName);
  const progress = pageConfig?.progress || 0;
  const titleName = pageConfig?.title || "";

  useEffect(() => {
    const updateProgress = () => {
      let targetProgress = progress;

      if (pageName === "leaderboard") {
        targetProgress = window.innerWidth >= 768 ? 90 : 80;
      }

      if (isFirstRenderRef.current) {
        setProgressWidth(0);
        setIsAnimating(true);
        setTimeout(() => {
          setProgressWidth(targetProgress);
          previousProgressRef.current = targetProgress;
          previousPageRef.current = pageName;
          isFirstRenderRef.current = false;
        }, 10);
      } else if (previousPageRef.current !== pageName) {
        setIsAnimating(false);
        setProgressWidth(previousProgressRef.current);

        setTimeout(() => {
          setIsAnimating(true);
          setProgressWidth(targetProgress);
          previousProgressRef.current = targetProgress;
          previousPageRef.current = pageName;
        }, 10);
      } else {
        setProgressWidth(targetProgress);
        previousProgressRef.current = targetProgress;
      }
    };

    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, [pageName, progress]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div>
      <div className="w-full flex-col justify-center">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="title-large text-center text-[30px] text-dark md:text-[50px] lg:text-[60px]">
            {titleName}
          </h1>
        </div>
        <div className="flex flex-1 items-center">
          <div
            className="flex-shrink-0"
            style={{
              width: `${progressWidth}%`,
              transition: isAnimating ? "width 3s ease-in-out" : "none",
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
