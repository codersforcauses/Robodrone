import Image from "next/image";

export default function Landing() {
  return (
    /* trying to create hero section between nav bar and running add*/
    <main>
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 text-center text-white"
        style={{ backgroundImage: "url('/drone.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-gray-900/50"></div>
        <div className="relative z-20 max-w-4xl space-y-6">
          {" "}
          {/* space-y-6 rounded-lg bg-black/50 p-8   semi-tranparent background with vertical space between sub-elements of 24px */}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Where Skill, Speed and{" "}
            <span className="text-orange-400">Strategy</span> Take Flight
          </h1>
          <h2 className="text-xl font-semibold text-orange-400 sm:text-2xl md:text-3xl">
            The 2025 Australia Youth Drone Tournament
          </h2>
          <h3 className="text-lg md:text-xl">FTF Obstacle Challenge</h3>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            {/*flex-col to stack on small screen and md:flex-row for med screens*/}
            <button className="rounded-md bg-orange-400 px-5 py-3 font-semibold text-white transition hover:bg-orange-500">
              View Live Leaderboard
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
          {/* marquee is just an image scroll btw */}
          <span className="mx-4 inline-block">
            🔴 LIVE: Competition starts in: 15 days, 4 hours, 32 minutes{"   "}
          </span>
          <span className="mx-4 inline-block">
            📅 Group Stages: March 15-16, 2025{"   "}
          </span>
          <span className="mx-4 inline-block">
            🏆 Finals: March 17, 2025{"   "}
          </span>
          <span className="mx-4 inline-block">
            📍 Venue: Melbourne Convention Centre{"   "}
          </span>
        </div>
      </div>

      {/* 3 cards is a separate sections because of my difficulties animating runnig add inside the section, prob because of cente text */}
      <section className="bg-background bg-gray-100 px-6 py-16 text-center text-foreground dark:bg-muted">
        {/* Horizontal padding is 1.5rem, vertical padding is 4rem, span help to give 'inovators' different color */}
        {/* Should I make running adds and 3 cards separate sections? Horizontal padding is 1.5rem, vertical padding is 4rem, span help to give 'inovators' different color */}
        <h2 className="primary mb-4 text-4xl font-bold text-primary">
          An Event for the Next Generation of{" "}
          <span className="text-primary">Innovators</span>
        </h2>
        <p className="mb-12 text-xl text-muted-foreground">
          Fostering STEM skills through competitive drone racing, teamwork, and
          strategic thinking
        </p>
        {/*Using grid layout to have thre containers, one for each square*/}
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
          {" "}
          {/*stacking vertically 1 card at the time on smaller screens and centering the grid */}
          <div className="rounded-xl bg-white p-6 shadow dark:bg-muted">
            <div className="mb-4 text-primary">
              <span className="text-4xl"></span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">The Challenge</h3>
            <p className="mb-4 text-sm">
              2v2 team-based format featuring Mission Zone precision and
              Obstacle Zone speed challenges. Teams must strategize and execute
              flawlessly.
            </p>
            <a href="#" className="font-medium text-primary">
              Learn More About the Event →
            </a>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-muted">
            <div className="mb-4 text-primary">
              <span className="text-4xl"></span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">The Schedule</h3>
            <p className="mb-4 text-sm">
              March 15-16: Group Stages March 17: Finals Day Venue: Melbourne
              Convention Centre
            </p>
            <a href="#" className="font-medium text-primary">
              View Full Schedule →
            </a>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-muted">
            <div className="mb-4 text-primary">
              <span className="text-4xl"></span>
            </div>
            <h3 className="mb-2 text-xl font-semibold">The Rules</h3>
            <p className="mb-4 text-sm">
              Teams bring their own drones (less than 250g, fully enclosed
              guard). Focus on safety, fair play, and showcasing technical
              skills.
            </p>
            <a href="#" className="font-medium text-primary">
              Download Rules And Manual →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center">
        <h2 className="mb-2 text-3xl font-bold">
          Powered By Our{" "}
          <span className="text-primary">Partners</span>
        </h2>
        <p className="mb-12 text-muted-foreground">
          Supporting the next generation of innovators and engineers
        </p>

        <div className="bg-grey/20 mb-17 flex flex-wrap items-center justify-center gap-8">
          {/*I get warning when I try to use img tag, is there another way that you would prefere it? do we need alt for search engines*/}
          <Image
            src="/aicodeLogo.png"
            alt="AICodeLogo"
            className="hover:scale-120 inset-0 h-12"
            width={350}
            height={450}
          />
          <Image
            src="/squadroneLogo.png"
            alt="SquadroneLogo"
            className="hover:scale-120 inset-0 h-12"
            width={350}
            height={450}
          />
        </div>

        <div className="mx-auto max-w-3xl rounded-xl bg-gray-100/60 px-6 py-8 text-sm text-muted-foreground dark:bg-muted">
          <p className="mb-2 text-xl">
            "We're proud to support this incredible event that brings together
            Australia's brightest young minds in STEM education and competitive
            robotics."
          </p>
          <button className="rounded-md bg-orange-400 px-5 py-3 text-xl font-semibold text-white transition hover:bg-orange-500">
            Become a Sponsor
          </button>
        </div>
      </section>
    </main>
  );
}
