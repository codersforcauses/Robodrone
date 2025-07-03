import Image from "next/image";

import EventCard from "./EventCard";

export default function LandingPage() {
  return (
    <div>
      <h1 className="title-large text-center font-bold text-dark">
        {" "}
        Drone Competition Schedule{" "}
      </h1>
      <div className="relative mx-auto h-[80px] w-[1100px]">
        <Image
          src="/ProgressBar1.svg"
          alt="Progress Bar"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="medium-lg pt-8">Our next competition is: </p>
      <p className="subtitle pb-8 font-bold">Monday - July 9th, 2025</p>

      <EventCard />
    </div>
  );
}
