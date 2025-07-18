import { Montserrat } from "next/font/google";
import React, { useEffect, useState } from "react";

import { GuestSection,SponsorSection } from "@/components/SponsorsGuests";

type Partner = {
  name: string;
  logo: string;
  link: string;
};

// Type definition for guest data
type Guest = {
  name: string;
  description: string;
  link: string;
  photo?: string;
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SponsorsAndGuest = () => {
  const [partners, setPartners] = useState<Partner[]>([]); // Holds sponsor data
  const [guests, setGuests] = useState<Guest[]>([]); // Holds guest data
  const [loading, setLoading] = useState(true); // Controls loading state

  useEffect(() => {
    // Define an async function to fetch data
    const fetchPartners = async () => {
      try {
        // Send request to backend (asynchronous)
        const res = await fetch("http://localhost:8000/api/partners");

        // Wait for JSON response (also asynchronous)
        const data = await res.json();

        // Update state with the fetched partners
        setPartners(data.partners || []);
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        // Hide the loading state regardless of success/failure
        setLoading(false);
      }
    };

    // Call the async function when component mounts
    fetchPartners();
  }, []); // Only runs once when the component is first rendered

  return (
    // MAIN CONTAINER
    <div className="min-h-screen bg-background">
      <div className="pt-20 text-center">
        <h1
          className={`text-6xl font-semibold leading-none ${montserrat.className}`}
        >
          Guests & Sponsors
        </h1>
      </div>

      {/* SPECIAL GUESTS CONTAINER */}
      <div
        className="mt-12 w-full px-8 py-16"
        style={{ backgroundColor: "#54595F" }}
      >
        <h2
          className={`text-center text-3xl font-bold text-black ${montserrat.className}`}
          style={{ lineHeight: "1.15em" }}
        >
          Special Guests
        </h2>
        {/* GUEST CARDS CONTAINER*/}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* GUEST CARD INFO 1*/}
          <div className="text-center">
            <div
              className="mx-auto mb-4 flex items-center justify-center bg-white shadow-md"
              style={{ width: "200px", height: "200px" }}
            ></div>
            <div>
              <h3
                className={`mb-2 text-lg font-semibold text-white ${montserrat.className}`}
              >
                Guess Name
              </h3>
              <p className={`${montserrat.className} text-sm text-white`}>
                Short Description &{" "}
                <a
                  href="#"
                  className={`${montserrat.className} ml-1 underline`}
                >
                  Link
                </a>
              </p>
            </div>
          </div>
          {/* GUEST CARD INFO 2*/}
          <div className="text-center">
            <div
              className="mx-auto mb-4 flex items-center justify-center bg-white shadow-md"
              style={{ width: "200px", height: "200px" }}
            ></div>
            <div>
              <h3
                className={`mb-2 text-lg font-semibold text-white ${montserrat.className}`}
              >
                Guess Name
              </h3>
              <p className={`${montserrat.className} text-sm text-white`}>
                Short Description &{" "}
                <a
                  href="#"
                  className={`${montserrat.className} ml-1 underline`}
                >
                  Link
                </a>
              </p>
            </div>
          </div>
          {/* GUEST CARD INFO 3*/}
          <div className="text-center">
            <div
              className="mx-auto mb-4 flex items-center justify-center bg-white shadow-md"
              style={{ width: "200px", height: "200px" }}
            ></div>
            <div>
              <h3
                className={`mb-2 text-lg font-semibold text-white ${montserrat.className}`}
              >
                Guess Name
              </h3>
              <p className={`${montserrat.className} text-sm text-white`}>
                Short Description &{" "}
                <a
                  href="#"
                  className={`${montserrat.className} ml-1 underline`}
                >
                  Link
                </a>
              </p>
            </div>
          </div>
          {/* GUEST CARD INFO 4*/}
          <div className="text-center">
            <div
              className="mx-auto mb-4 flex items-center justify-center bg-white shadow-md"
              style={{ width: "200px", height: "200px" }}
            ></div>
            <div>
              <h3
                className={`mb-2 text-lg font-semibold text-white ${montserrat.className}`}
              >
                Guess Name
              </h3>
              <p className={`${montserrat.className} text-sm text-white`}>
                Short Description &{" "}
                <a
                  href="#"
                  className={`${montserrat.className} ml-1 underline`}
                >
                  Link
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SPONSORS SECTION */}
      <div className="mt-16">
        {loading ? (
          <p className="text-center text-gray-500">Loading sponsors...</p>
        ) : (
          // Pass the fetched data to the SponsorSection component
          <SponsorSection partners={partners} />
        )}
      </div>
    </div>
  );
};

export default SponsorsAndGuest;
