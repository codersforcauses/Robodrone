import Image from "next/image";

export default function EventCard() {
  return (
    <div className="outline-solid flex items-center rounded-3xl p-4 outline outline-1 outline-gray-950">
      {/* Text */}
      <div className="flex-auto">
        <p className="text-gray-500"> Monday - 9 July 2025</p>
        <h2 className="text-2xl font-bold"> Group Stages Start </h2>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
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
          <p className="text-gray-500">Melbourne Convention Centre</p>
        </div>
      </div>
      {/* Image */}
      <div className="relative h-[200px] w-[200px] flex-auto">
        <Image
          src="/placeholder-svg.svg"
          alt="placeholder-svg"
          fill
          className="rounded-2xl object-contain"
          priority
        />
      </div>
    </div>
  );
}
