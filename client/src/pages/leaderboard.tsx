import Image from "next/image";

import List from "../components/ui/Leaderboard/List";

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-light pt-8">
      <div className="">
        <List />
      </div>
    </div>
  );
}
