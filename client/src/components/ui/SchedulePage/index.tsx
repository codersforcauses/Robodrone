import Image from "next/image";

import ProgressBar from "../progress";
import EventCard from "./EventCard";

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProgressBar pageName="schedule" />

      <p className="medium-lg pt-8">Our next competition is: </p>
      <p className="subtitle pb-8 font-bold">Monday - July 9th, 2025</p>

      <EventCard
        date="Monday - 9 July 2025"
        title="Group Stages Start"
        location="Melbourne Convention Centre"
        time="5:00pm - 8:00pm"
        description="The first stage of the competition kicks off with teams battling it out in the group round."
        imageSrc="/drone.jpg"
      />

      <EventCard
        date="Tuesday - 10 July 2025"
        title="Knockout Stages Start"
        location="Murdoch University"
        time="1:00pm - 4:00pm"
        description="Knock out each other!"
        imageSrc="/drone.jpg"
      />
      <EventCard
        date="Wednesday - 11 July 2025"
        title="Finals Day"
        location="Location"
        time="5:00pm - 8:00pm"
        description="The final match to determine the drone champion of 2025!"
        imageSrc="/drone.jpg"
      />
    </div>
  );
}
