import { Montserrat } from "next/font/google";
import React, { useEffect, useState } from "react";

import { GuestSection, SponsorSection } from "@/components/SponsorsGuests";

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
    const fetchData = async () => {
      try {
        const [partnerRes, guestRes] = await Promise.all([
          fetch("http://localhost:8000/api/partners"),
          fetch("http://localhost:8000/api/guests"),
        ]);
        const partnerData = await partnerRes.json();
        const guestData = await guestRes.json();

        setPartners(partnerData.partners || []);
        setGuests(guestData.guests || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <div className="pt-20 text-center">
        <h1
          className={`text-6xl font-semibold leading-none ${montserrat.className}`}
        >
          Guests & Sponsors
        </h1>
      </div>

      {/* Special Guests Section */}
      <GuestSection
        guests={guests.map((guest) => ({
          name: guest.name,
          description: guest.description,
          link: guest.link,
          image: guest.photo, // mapped to 'image' for component
        }))}
      />

      {/* Sponsors Section */}
      <div className="mt-16">
        {loading ? (
          <p className="text-center text-gray-500">Loading sponsors...</p>
        ) : (
          <SponsorSection partners={partners} />
        )}
      </div>
    </div>
  );
};

export default SponsorsAndGuest;
