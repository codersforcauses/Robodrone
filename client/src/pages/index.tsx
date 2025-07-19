import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { LuCircleCheckBig } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { TbDrone } from "react-icons/tb";

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
              <TbDrone size={30} />
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
              <RiCalendarScheduleLine size={30} />
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
              <LuCircleCheckBig size={30} />
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
