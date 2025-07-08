export default function Landing() {
  return (
    /* trying to create hero section between nav bar and running add*/
    <main>
      <section
        className="relative bg-background bg-cover bg-center text-foreground"
        style={{ backgroundImage: "url('/drone.jpg')" }}
      >
        <div className="space-y-6 rounded-lg bg-black/50 p-8 text-center text-white">
          {" "}
          {/* semi-tranparent background with vertical space between sub-elements of 24px */}
          <h1 className="font-extabold text-6xl leading-tight">
            where skill, speed and{" "}
            <span className="text-orange-400">Strategy</span> take flight
          </h1>
          <h2 className="text-3xl font-semibold text-orange-400">
            The 2025 Australia Youth Drone Tournament
          </h2>
          <h3 className="text-lg">FTF Obstacle Challenge</h3>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            {/*flex-col to stack on small screen and md:flex-row for med screens*/}
            <button className="rounded-md bg-orange-400 px-5 py-3 font-semibold text-white transition hover:bg-orange-500">
              View Live Leaderboard{" "}
            </button>
            <button className="rounded-md bg-orange-400 px-5 py-3 font-semibold text-white transition hover:bg-orange-500">
              Schedule
            </button>
          </div>
        </div>
      </section>

      <div className="overflow-hidden whitespace-nowrap bg-orange-500 text-white">
        {/* running ad line, also called stock line, does anyone know how to do the actual countdown? */}
        <div className="animate-marquee inline-block px-4 py-2 text-sm font-bold">
          {" "}
          {/* marquee is just an image scroll btw */}
          📅 Group Stages: March 15-16, 2025 🏆 Finals: March 17, 2025 📍 Venue:
          Melbourne Convention Centre
        </div>
      </div>

      {/* 3 cards is a separate sections because of my difficulties animating rnnig add inside the section, prob because of cente text */}
      <section className="bg-background px-6 py-16 text-center text-foreground">
        {" "}
        {/* Horizontal padding is 1.5rem, vertical padding is 4rem, span help to give 'inovators' different color */}
        {/* Should I make running adds and 3 cards separate sections? Horizontal padding is 1.5rem, vertical padding is 4rem, span help to give 'inovators' different color */}
        <h2 className="mb-4 text-4xl font-bold">
          An Event for the Next Generation of{" "}
          <span className="text-primary">Innovators</span>
        </h2>
        <p className="mb-12 text-xl text-muted-foreground">
          Fostering STEM skills through competitive drone racing, teamwork, and
          strategic thinking
        </p>
      </section>

      <div className="container mx-auto px-4">
        {" "}
        {/* mx-auto class centers the containers horizontally within the viewport - this part will be used for 2 sections on top of the drone's photo 'view life leaderboard' and 'see the schedule'*/}
        <h1 className="text-2x1 font-bold">
          {" "}
          {/* Container for the main body with 3 fieldsets, the challenge, the schedule the rules and the  */}
        </h1>
      </div>
    </main>
  );
}
