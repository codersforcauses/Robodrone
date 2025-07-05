import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SponsorsAndGuest = () => {
  return (
    // MAIN CONTAINER
    <div className="min-h-screen bg-background">
      <div className="pt-20 text-center">
        <h1
          className={`text-6xl font-semibold leading-none ${montserrat.className}`}
        >
          Sponsors & Guests
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
    </div>
  );
};

export default SponsorsAndGuest;
