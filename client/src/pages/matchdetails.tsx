import Image from "next/image";

import MatchDetailsList from "@/components/ui/Matchdetails/List";

export default function MatchDetailsPage() {
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
      <div className="w-full">
        <MatchDetailsList />
      </div>
    </div>
  );
}
