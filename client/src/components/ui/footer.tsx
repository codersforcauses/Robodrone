import { Slot } from "@radix-ui/react-slot";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
          <div className="stroke-3 grid w-full grid-cols-1 gap-y-8 border-b border-white pb-8 pr-5 sm:grid-cols-2 lg:grid-cols-[35%_20%_30%_15%]">
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
                  <Link href="#" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary">
                    Schedule
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary">
                    Format & Rules
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary">
                    Sponsors & Guests
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-primary">
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
                  className="ft-content break-all underline hover:text-primary"
                >
                  info@youthdronetournament.com.au
                </a>
              </p>
              <p className="ft-content mb-2">
                Venue:
                <br />
                Melbourne Convention Centre
                <br />
                1 Convention Centre Pl
                <br />
                South Wharf VIC 3006
              </p>
            </div>

            {/* Socials */}
            <div className="pr-5">
              <h3 className="ft-subtitle mb-5">Follow Us</h3>
              <div className="mb-5 flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition hover:border-primary hover:text-primary"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition hover:border-primary hover:text-primary"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
              <p className="ft-content text-sm text-gray-300">
                Stay updated with the latest news and highlights from the
                tournament
              </p>
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
