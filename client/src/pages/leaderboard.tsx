import Image from "next/image";

import List from "../components/ui/Leaderboard/List";

export default function LeaderboardPage() {
    return(
        <div className="bg-light min-h-screen w-full flex flex-col items-center pt-8">
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
            <div className="">
                <List />
            </div>
        </div>
    );
}