import Image from "next/image";

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
    <div className="mt-12 w-full bg-[#54595F] px-8 py-16">
      <h2
        className={`text-center font-montserrat text-3xl font-bold leading-[1.15em] text-black`}
      >
        Special Guests
      </h2>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {guests.map((guest, idx) => (
          <div key={idx} className="text-center">
            {/* Guest image box */}
            <div className="relative mx-auto mb-4 flex h-[200px] w-[200px] items-center justify-center overflow-hidden bg-white shadow-md">
              {guest.image ? (
                <Image
                  src={guest.image}
                  alt={guest.name}
                  className="h-full w-full object-cover"
                  fill
                />
              ) : null}
            </div>

            {/* Guest name and description */}
            <div>
              <h3
                className={`mb-2 font-montserrat text-lg font-semibold text-white`}
              >
                {guest.name}
              </h3>
              <p className={`font-montserrat text-sm text-white`}>
                {guest.description}
              </p>
              <p className={`font-montserrat text-sm text-white`}>
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
