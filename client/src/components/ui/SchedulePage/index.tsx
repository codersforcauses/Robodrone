import Image from "next/image";

import ProgressBar from "../progress";
import EventCard from "./EventCard";

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <EventCard
        date="Thursday - 31 July 2025"
        title="South Metro"
        location="St Columba's Catholic Primary School"
        time="9:00am - 2:30pm"
        // description="The first stage of the competition kicks off with teams battling it out in the group round."
        imageSrc="/drone.jpg"
      />

      <EventCard
        date="Friday - 1 August 2025"
        title="North Metro"
        location="St Andrew's Grammar School"
        time="9:00am - 2:30pm"
        // description="Knock out each other!"
        imageSrc="/drone.jpg"
      />
      <EventCard
        date="Saturday - 2 August 2025"
        title="Award Ceremony & Family STEM Day"
        location="Murdoch University"
        time="9:30am - 4pm"
        // description="The final match to determine the drone champion of 2025!"
        imageSrc="/drone.jpg"
      />
    </div>
  );
}
