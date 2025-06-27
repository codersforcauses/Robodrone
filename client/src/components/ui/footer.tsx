import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "footer";

    return (
      <Comp
        className={cn("px-6 py-12 font-sans text-white", className)}
        style={{ backgroundColor: "#212529" }}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          {/* Main content with horizontal line */}
          <div className="stroke-3 grid grid-cols-1 gap-10 border-b border-white pb-5 md:grid-cols-4">
            {/* Logo */}
            <div>
              <h2 className="mb-2 text-xl font-bold">Event Organizers</h2>
            </div>

            {/* Pages */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Pages</h3>
              <ul className="mb-2 space-y-1 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Format & Rules
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sponsor & Guest
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Contact Info</h3>
              <p className="mb-2 text-sm text-gray-300">
                Email:{" "}
                <a
                  href="mailto:info@youthdronetournament.com.au"
                  className="underline hover:text-white"
                >
                  info@youthdronetournament.com.au
                </a>
              </p>
              <p className="text-sm text-gray-300">
                Venue:
                <br />
                Melbourne Convention Centre
                <br />
                1 Convention Centre Pl
                <br />
                South Wharf VIC 3006
              </p>
              <Link
                href="#"
                className="text-sm text-gray-300 underline hover:text-white"
              >
                Contact Form →
              </Link>
            </div>

            {/* Socials */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Socials</h3>
              <ul className="mb-2 space-y-1 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Centered copyright below the line */}
          <div className="pt-2 text-center">
            <p className="text-sm font-medium text-white">
              Copyright © 2025 Australia Youth Drone Tournament. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </Comp>
    );
  },
);

Footer.displayName = "Footer";

export { Footer };
