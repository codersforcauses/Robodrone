// components/GuestSection.tsx
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Type definition for a guest item
type Guest = {
  name: string;
  description: string;
  link: string;
  image?: string; // optional photo URL
};

interface GuestSectionProps {
  guests: Guest[]; // list of guests passed from parent component
}

// GuestSection component renders the special guests section
const GuestSection = ({ guests }: GuestSectionProps) => {
  return (
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

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {guests.map((guest, idx) => (
          <div key={idx} className="text-center">
            {/* Guest image box */}
            <div
              className="relative mx-auto mb-4 flex items-center justify-center overflow-hidden bg-white shadow-md"
              style={{ width: "200px", height: "200px" }}
            >
              {guest.image ? (
                <Image
                  src={guest.image}
                  alt={guest.name}
                  className="h-full w-full object-cover"
                  layout="fill"
                />
              ) : null}
            </div>

            {/* Guest name and description */}
            <div>
              <h3
                className={`mb-2 text-lg font-semibold text-white ${montserrat.className}`}
              >
                {guest.name}
              </h3>
              <p className={`${montserrat.className} text-sm text-white`}>
                {guest.description}
              </p>
              <p className={`${montserrat.className} text-sm text-white`}>
                {guest.link && (
                  <a
                    href={guest.link}
                    className="ml-1 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestSection;
