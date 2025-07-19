import Image from "next/image";

import Dropdown from "../components/ui/Leaderboard/Dropdown";
import List from "../components/ui/Leaderboard/List";

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-light pt-8">
      <div>
        <h1 className="title-large text-center font-bold">Leaderboard</h1>
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
      <div className="">
        <List />
      </div>
    </div>
  );
}
