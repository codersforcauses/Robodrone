import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main>
      <section
        className="relative z-0 flex min-h-screen items-center justify-center bg-cover bg-center px-4 text-center text-white"
        style={{ backgroundImage: "url('/drone.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-gray-900/50"></div>
        <div className="relative z-20 max-w-4xl space-y-6">
          <h1 className="font-fugazone text-4xl md:text-7xl">
            WHERE SKILL, SPEED, AND{" "}
            <span className="text-primary">STRATEGY</span> TAKE FLIGHT
          </h1>
          <h2 className="subtitle text-primary sm:text-2xl md:text-3xl">
            The 2025 Australia Youth Drone Tournament
          </h2>
          <h3 className="body-sm md:text-xl">FTF Obstacle Challenge</h3>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/*flex-col to stack on small screen and md:flex-row for med screens*/}
            {/* <Link
              href="/leaderboard"
              className="btn-secondary w-fit self-center md:w-auto md:self-auto"
            >
              View Leaderboard
            </Link>
            <Link
              href="/schedule"
              className="btn-secondary w-fit self-center md:w-auto md:self-auto"
            >
              See The Schedule
            </Link> */}
          </div>
        </div>
      </section>

      <div className="overflow-hidden whitespace-nowrap bg-primary">
        <div className="inline-block px-4 py-4"></div>
      </div>

      {/* 3 cards */}
      <section className="flex flex-col justify-center bg-background bg-gray-100 px-6 py-16 text-center text-foreground dark:bg-muted">
        <h2 className="subtitle mb-4 text-4xl text-dark">
          An Event for the Next Generation of{" "}
          <span className="text-primary">Innovators</span>
        </h2>
        <p className="caption mb-10 text-muted-foreground">
          Fostering STEM skills through competitive drone racing, teamwork, and
          strategic thinking
        </p>
        {/*Using grid layout to have thre containers, one for each square*/}
        <div className="mx-auto grid max-w-[68rem] grid-cols-1 gap-6 md:grid-cols-3">
          {/*stacking vertically 1 card at the time on smaller screens and centering the grid */}
          <div className="landing-card">
            <div className="card-icon bg-orange-100 text-orange-400">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-current"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10h4v4h-4z" />
                <path d="M10 10l-3.5 -3.5" />
                <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
                <path d="M14 10l3.5 -3.5" />
                <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
                <path d="M14 14l3.5 3.5" />
                <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
                <path d="M10 14l-3.5 3.5" />
                <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
              </svg>
            </div>
            <h3 className="card-heading">The Challenge</h3>
            <p className="caption text-muted-foreground">
              2v2 team-based format featuring Mission Zone precision and
              Obstacle Zone speed challenges. Teams must strategize and execute
              flawlessly.
            </p>
            <Link href="/leaderboard" className="body-sm text-primary">
              Check Out the Current Standings →
            </Link>
          </div>

          <div className="landing-card">
            <div className="card-icon bg-blue-100 text-blue-500">
              <svg
                height="30"
                width="30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 3V1H9V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V9H20V5H17V7H15V5H9V7H7V5H4V19H10V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7ZM17 12C14.7909 12 13 13.7909 13 16C13 18.2091 14.7909 20 17 20C19.2091 20 21 18.2091 21 16C21 13.7909 19.2091 12 17 12ZM11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16ZM16 13V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V13H16Z"></path>
              </svg>
            </div>
            <h3 className="card-heading">The Schedule</h3>
            <div>
              <p className="caption text-muted-foreground">
                <span className="font-semibold">March 15-16: </span>Group Stages
              </p>
              <p className="caption text-muted-foreground">
                <span className="font-semibold">March 17: </span>Finals Day
              </p>
              <p className="caption text-muted-foreground">
                <span className="font-semibold">Venue: </span>Melbourne
                Convention Centre
              </p>
            </div>
            <Link href="/schedule" className="body-sm mb-5 text-primary">
              View Full Schedule →
            </Link>
          </div>

          <div className="landing-card">
            <div className="card-icon bg-yellow-100 text-yellow-400">
              {/* <LuCircleCheckBig size={30} /> */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-current"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <h3 className="card-heading">The Rules</h3>
            <p className="caption text-muted-foreground">
              Teams bring their own drones (less than 250g, fully enclosed
              guard). Focus on safety, fair play, and showcasing technical
              skills.
            </p>
            <Link href="/format-rules" className="body-sm text-primary">
              View Competition Format & Rules →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center">
        <h2 className="subtitle mb-2 text-dark">
          Powered By Our <span className="text-primary">Partners</span>
        </h2>
        <p className="caption mb-12 text-muted-foreground">
          Supporting the next generation of innovators and engineers
        </p>

        <div className="bg-grey/20 mb-10 flex flex-wrap items-center justify-center gap-8">
          <Image
            src="/aicodeLogo.png"
            alt="AICodeLogo"
            className="opacity-70 transition duration-300 ease-in-out hover:scale-110 hover:opacity-100"
            width={275}
            height={200}
          />
          <Image
            src="/squadroneLogo.png"
            alt="SquadroneLogo"
            className="opacity-70 transition duration-300 ease-in-out hover:scale-110 hover:opacity-100"
            width={175}
            height={200}
          />
        </div>

        <div className="mx-auto max-w-2xl space-y-5 rounded-xl bg-gray-100/60 px-8 py-8 text-muted-foreground dark:bg-muted">
          <p className="caption">
            "We're proud to support this incredible event that brings together
            Australia's brightest young minds in STEM education and competitive
            robotics."
          </p>
          {/* <button className="caption hover:bg-orange-350 rounded-md bg-orange-400 px-5 py-3 text-white transition">
            Become a Sponsor
          </button> */}
        </div>
      </section>
    </main>
  );
}
