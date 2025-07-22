import Image from "next/image";

type EventCardProps = {
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
  imageSrc: string;
};

export default function EventCard({
  date,
  title,
  location,
  time,
  description,
  imageSrc,
}: EventCardProps) {
  return (
    <div className="mb-14 flex flex-col items-center gap-4 rounded-3xl bg-gray-100 p-6 sm:flex-row">
      {/* Text */}
      <div className="min-w-0 flex-[5] pr-4 pt-2">
        <p className="body-lg mb-1 text-secondary">{date}</p>
        <h2 className="subtitle mb-3">{title}</h2>
        <div className="mb-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 flex-shrink-0 text-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="text-text">{location}</p>
        </div>
        <div className="mb-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 flex-shrink-0 text-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-text">{time}</p>
        </div>
        <p className="line-clamp-3 text-text">{description}</p>
      </div>
      {/* Image */}
      <div className="relative aspect-[411/333] w-full max-w-xs flex-[3] sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Image
          src={imageSrc}
          alt="Event image"
          fill
          className="rounded-2xl object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
