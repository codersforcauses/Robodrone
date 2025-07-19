import Image from "next/image";

import List from "../components/ui/Leaderboard/List";
import ProgressBar from "../components/ui/progress";

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-light pt-8">
      <ProgressBar pageName="progress" />
      <div className="w-full">
        <List />
      </div>
    </div>
  );
}
