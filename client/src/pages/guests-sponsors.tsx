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

const SponsorsAndGuest = () => {
  const [partners, setPartners] = useState<Partner[]>([]); // Holds sponsor data
  const [guests, setGuests] = useState<Guest[]>([]); // Holds guest data
  const [loading, setLoading] = useState(true); // Controls loading state

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const [partnerRes, guestRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sponsor/`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sponsor/guests/`),
        ]);
        const partnerData = await partnerRes.json();
        const guestData = await guestRes.json();

        setPartners(partnerData);
        setGuests(guestData);
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
          className={`text-6xl font-semibold leading-none font-montserrat`}
        >
          Guests & Sponsors
        </h1>
      </div>
      {/* Special Guests & Sponsors Section */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <>
          <GuestSection
            guests={guests.map((guest) => ({
              name: guest.name,
              description: guest.description,
              link: guest.link,
              image: guest.photo, // mapped to 'image' for component
            }))}
          />
          <div className="mt-16">
            <SponsorSection partners={partners} />
          </div>
        </>
      )}
    </div>
  );
};

export default SponsorsAndGuest;
