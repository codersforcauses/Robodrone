import Image from "next/image";

export default function EventCard() {
  return (
    <div className="flex items-center gap-4 rounded-3xl p-6 outline outline-1 outline-gray-950">
      {/* Text */}
      <div className="min-w-0 flex-[2] pr-4">
        <p className="body-lg mb-1 text-secondary">Monday - 9 July 2025</p>
        <h2 className="subtitle mb-3">Group Stages Start</h2>
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
          <p className="text-text">Melbourne Convention Centre</p>
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
          <p className="text-text">5:00pm - 8:00pm</p>
        </div>
        <p className="line-clamp-3 text-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante
          rhoncus, hendrerit dui eget, pulvinar purus. Donec rutrum euismod
          consequat.
        </p>
      </div>
      {/* Image */}
      <div className="relative h-[200px] min-w-[180px] flex-[1]">
        <Image
          src="/placeholder-svg.svg"
          alt="placeholder-svg"
          fill
          className="rounded-2xl object-cover"
          priority
        />
      </div>
    </div>
  );
}
