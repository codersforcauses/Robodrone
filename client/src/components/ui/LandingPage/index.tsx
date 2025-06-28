import Image from "next/image";

import EventCard from "./EventCard";

export default function LandingPage() {
  return (
    <div>
      <h1 className="text-dark text-center text-5xl font-bold">
        {" "}
        Drone Competition Schedule{" "}
      </h1>
      <div className="relative mx-auto h-[80px] w-[800px]">
        <Image
          src="/ProgressBar1.svg"
          alt="Progress Bar"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="pt-8">Our next competition is: </p>
      <p className="pb-8 text-2xl font-bold">Monday - July 9th, 2025</p>

      <EventCard />
    </div>
  );
}
