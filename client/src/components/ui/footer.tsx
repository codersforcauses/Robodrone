import { Slot } from "@radix-ui/react-slot";
import Image from "next/image";
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
        className={cn("px-6 py-12 text-white", className)}
        style={{ backgroundColor: "#212529" }}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          {/* Main content with horizontal line */}
          <div className="stroke-3 grid w-full grid-cols-1 gap-y-8 border-b border-white pb-8 pr-5 sm:grid-cols-2 lg:grid-cols-[40%_20%_30%_10%]">
            {/* Logo */}
            <div className="pr-10">
              <h2 className="ft-title mb-5">Event Organizers</h2>
              <Image
                className="mb-5 object-contain pr-8"
                src="/images/aicode_logo_HD.png"
                alt="AICODE Logo"
                width={282}
                height={55}
              />
              <Image
                className="mb-5 object-contain pr-8"
                src="https://squadrone.com.au/wp-content/uploads/2024/11/squadrone-logo-01-scaled.webp"
                alt="Squadrone Logo"
                width={160}
                height={56}
              />
            </div>

            {/* Pages */}
            <div className="pr-10">
              <h3 className="ft-subtitle mb-3">Pages</h3>
              <ul className="ft-content mb-2 text-gray-300">
                <li className="mb-4">
                  <Link href="#" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-white">
                    Schedule
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-white">
                    Format & Rules
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-white">
                    Sponsor & Guest
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-white">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="pr-10">
              <h3 className="ft-subtitle mb-3">Contact Info</h3>
              <p className="ft-content mb-2 text-gray-300">
                Email:
                <br />
                <a
                  href="mailto:info@youthdronetournament.com.au"
                  className="ft-content break-all underline hover:text-white"
                >
                  info@youthdronetournament.com.au
                </a>
              </p>
              <a
                href="#"
                className="ft-content text-gray-300 underline hover:text-white"
              >
                Venue:
                <br />
                Melbourne Convention Centre
                <br />
                1 Convention Centre Pl
                <br />
                South Wharf VIC 3006
              </a>
              <br />
              <Link
                href="#"
                className="ft-content text-gray-300 underline hover:text-white"
              >
                Contact Form →
              </Link>
            </div>

            {/* Socials */}
            <div className="pr-10">
              <h3 className="ft-subtitle mb-3">Socials</h3>
              <ul className="ft-content mb-2 text-gray-300">
                <li className="mb-4">
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Centered copyright below the line */}
          <div className="pt-2 text-center">
            <p className="ft-content text-sm text-white">
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
