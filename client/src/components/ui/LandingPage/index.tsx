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

      <EventCard
        date="Monday - 9 July 2025"
        title="Group Stages Start"
        location="Melbourne Convention Centre"
        time="5:00pm - 8:00pm"
        description="The first stage of the competition kicks off with teams battling it out in the group round."
        imageSrc="/drone.svg"
      />

      <EventCard
        date="Tuesday - 10 July 2025"
        title="Knockout Stages Start"
        location="Murdoch University"
        time="1:00pm - 4:00pm"
        description="Knock out each other!"
        imageSrc="/drone.svg"
      />
      <EventCard
        date="Wednesday - 11 July 2025"
        title="Finals Day"
        location="Location"
        time="5:00pm - 8:00pm"
        description="The final match to determine the drone champion of 2025!"
        //imageSrc="/drone.svg"
      />
    </div>
  );
}
