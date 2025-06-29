// Format & Rules page implementation based on Figma design
import { NextPage } from "next";
import Head from "next/head";

const FormatRulesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Format & Rules - Robodrone Tournament</title>
        <meta
          name="description"
          content="Complete tournament format and rules for the Robodrone competition"
        />
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: "#F5F5F5" }}>
        {/* Navigation Bar - Placeholder for component developed by others */}
        {/* <Navigation /> */}
        <div className="h-16 border-b bg-white shadow-sm">
          {/* Navigation component placeholder */}
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-3xl">
            {/* Hero Section */}
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-neutral-900">
                Format & Rules
              </h1>

              {/* ProgressBar - Placeholder for component developed by others */}
              {/* <ProgressBar /> */}
              <div className="mb-4">
                {/* ProgressBar component placeholder */}
              </div>

              <p className="text-base text-neutral-900">
                Overview of how the competition works. Each match is played
                between two teams of two students, and the match has two stages.
              </p>
            </div>

            {/* Content Sections */}
            <div className="mb-8 space-y-6">
              {/* Stage 1 - Mission Zone */}
              <section>
                <h2 className="mb-3 text-lg font-bold text-neutral-900">
                  Stage 1 – Mission Zone
                </h2>
                <div className="space-y-3">
                  <p className="text-base text-neutral-900">
                    Each team flies their drone in a separate area and tries to{" "}
                    <strong>knock down six white pins</strong>. These are the
                    only pins they're meant to hit. If they knock down any of
                    the yellow pins (called Penalty Pins), they receive time
                    penalties. After successfully completing the mission, the
                    drone must <strong>return to the take-off zone</strong>. As
                    soon as the referee confirms, they can proceed to the next
                    stage.
                  </p>
                </div>
              </section>

              {/* Stage 2 - Obstacle Zone */}
              <section>
                <h2 className="mb-3 text-lg font-bold text-neutral-900">
                  Stage 2 – Obstacle Zone
                </h2>
                <div className="space-y-3">
                  <p className="text-base text-neutral-900">
                    Here, both teams fly through a shared course of four
                    obstacles, each with a different path layout depending on
                    team colour (Red vs. Blue). The drones race to complete the
                    obstacle path, and the finishing order determines{" "}
                    <strong>Honor Points</strong>.
                  </p>
                </div>
              </section>

              {/* Scoring and Ranking System */}
              <section>
                <h2 className="mb-3 text-lg font-bold text-neutral-900">
                  Scoring and Ranking System
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-neutral-900">
                    Each team is ranked based on the following three layers:
                  </p>

                  {/* Honor Points */}
                  <div>
                    <h3 className="mb-2 text-base font-bold text-neutral-900">
                      1. Honor Points – Awarded based on the finish order in the
                      Obstacle Zone. Higher points go to the faster team.
                    </h3>
                    <div className="ml-4 space-y-2">
                      <p className="text-base text-neutral-900">
                        Based on the drone's finishing order in the obstacle
                        course. Higher placement = more points.
                      </p>
                      <p className="text-base text-neutral-900">
                        • <strong>Example:</strong> A team whose drones place
                        1st and 3rd may earn 2 Honor Points.
                      </p>
                      <p className="text-base text-neutral-900">
                        •{" "}
                        <strong>
                          This is the primary method used to rank teams.
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* Regular Points */}
                  <div>
                    <h3 className="mb-2 text-base font-bold text-neutral-900">
                      2. Regular Points – These are calculated as:
                    </h3>
                    <div className="ml-4 space-y-2">
                      <p className="text-base text-neutral-900">
                        Used only if teams are tied in Honor Points. Regular
                        Points are calculated as:
                      </p>
                      <ul className="space-y-1 text-base text-neutral-900">
                        <li>• +2 points for every white pin knocked down</li>
                        <li>
                          • –3 points for each yellow pin hit (Penalty Pin)
                        </li>
                        <li>• –3 points for a yellow card</li>
                        <li>• –10 points for a red card</li>
                      </ul>
                    </div>
                  </div>

                  {/* Mission Zone Time */}
                  <div>
                    <h3 className="mb-2 text-base font-bold text-neutral-900">
                      3. Mission Zone Time – The total time to complete the
                      Mission Zone including penalties. This is only used if
                      teams are tied on both Honor and Regular Points.
                    </h3>
                    <div className="ml-4">
                      <p className="text-base text-neutral-900">
                        If Honor and Regular Points are still tied, the team
                        with the faster adjusted time (including penalty
                        seconds) in the Mission Zone is ranked higher.
                      </p>
                    </div>
                  </div>

                  {/* Scoring Example Table */}
                  <div className="mt-6">
                    <h3 className="mb-3 text-base font-bold text-neutral-900">
                      Scoring Example:
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-300 text-sm text-neutral-900">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 px-2 py-2 text-left font-bold">
                              Team Name
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              Honor Points
                              <br />
                              <span className="text-xs font-normal">
                                (Based on obstacle finish)
                              </span>
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              White Pins
                              <br />
                              <span className="text-xs font-normal">
                                (+2 pts each)
                              </span>
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              Penalty Pins Hit
                              <br />
                              <span className="text-xs font-normal">
                                (-3 pts each)
                              </span>
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              Yellow Cards
                              <br />
                              <span className="text-xs font-normal">
                                (-3 pts each)
                              </span>
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              Red Cards
                              <br />
                              <span className="text-xs font-normal">
                                (-10 pts each)
                              </span>
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              Regular Points
                              <br />
                              <span className="text-xs font-normal">
                                (Total from above)
                              </span>
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              Mission Time (s)
                              <br />
                              <span className="text-xs font-normal">
                                (incl. penalties)
                              </span>
                            </th>
                            <th className="border border-gray-300 px-2 py-2 text-center font-bold">
                              Total Rank
                              <br />
                              <span className="text-xs font-normal">
                                (Final position)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-green-50">
                            <td className="border border-gray-300 px-2 py-2 font-medium">
                              Red Falcons
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              3
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              6
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-medium">
                              12
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              55
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-bold">
                              1
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 py-2 font-medium">
                              Blue Hawks
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              2
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              6
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              1
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              1
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-medium">
                              6
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              60
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-bold">
                              2
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 py-2 font-medium">
                              Silver Sparks
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              1
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              5
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              1
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-medium">
                              7
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              58
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-bold">
                              3
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 py-2 font-medium">
                              Golden Drones
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              4
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              2
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              1
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              0
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-medium">
                              -1
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                              65
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center font-bold">
                              4
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2 text-sm text-neutral-900">
                      <strong>Note:</strong> Red Falcons won due to highest
                      Honor Points (3). Even though Silver Sparks had higher
                      Regular Points (7) than Blue Hawks (6), Blue Hawks ranked
                      higher due to better Honor Points (2 vs 1).
                    </p>
                  </div>
                </div>
              </section>

              {/* How the rank is determined */}
              <section>
                <h2 className="mb-3 text-lg font-bold text-neutral-900">
                  How the rank is determined:
                </h2>
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-neutral-900">
                    Scoring System
                  </h3>
                  <p className="text-base text-neutral-900">
                    Each team's performance is ranked based on{" "}
                    <strong>three criteria</strong>, used in this exact order:
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-base font-bold text-neutral-900">
                        1. Honor Points
                      </h4>
                      <p className="ml-4 text-base text-neutral-900">
                        Based on the drone's finishing order in the obstacle
                        course. Higher placement = more points.
                      </p>
                      <div className="ml-4 space-y-1 text-base text-neutral-900">
                        <p>
                          • Example: A team whose drones place 1st and 3rd may
                          earn 2 Honor Points.
                        </p>
                        <p>• This is the primary method used to rank teams.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-neutral-900">
                        2. Regular Points
                      </h4>
                      <p className="ml-4 text-base text-neutral-900">
                        Used only if teams are tied in Honor Points. Regular
                        Points are calculated as:
                      </p>
                      <div className="ml-8 space-y-1 text-base text-neutral-900">
                        <p>• +2 points per white pin knocked down</p>
                        <p>• –3 points per yellow pin hit (penalty pins)</p>
                        <p>
                          • –3 points per yellow card (minor rule violation)
                        </p>
                        <p>• –10 points per red card (serious violation)</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-neutral-900">
                        3. Mission Zone Completion Time
                      </h4>
                      <p className="ml-4 text-base text-neutral-900">
                        If Honor and Regular Points are still tied, the team
                        with the faster adjusted time (including penalty
                        seconds) in the Mission Zone is ranked higher.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Penalties */}
              <section>
                <h2 className="mb-3 text-lg font-bold text-neutral-900">
                  Penalties – When Cards Are Issued
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-base font-bold text-neutral-900">
                      Yellow Cards (–3 pts) are issued for minor infractions
                      like:
                    </h3>
                    <ul className="ml-4 space-y-1 text-base text-neutral-900">
                      <li>◦ Stepping into the arena without permission</li>
                      <li>
                        ◦ Knocking over field barriers or obstacles by accident
                      </li>
                      <li>◦ Ignoring referee warnings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 text-base font-bold text-neutral-900">
                      Red Cards (–10 pts) are given for serious violations like:
                    </h3>
                    <ul className="ml-4 space-y-1 text-base text-neutral-900">
                      <li>◦ Deliberately crashing into an opponent</li>
                      <li>◦ Using hands to block drones</li>
                      <li>◦ Modifying the drone outside approved specs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Focus Statement */}
              <section>
                <p className="text-base font-medium text-neutral-900">
                  Focus on safety, fair play, and showcasing technical skills.
                </p>
              </section>
            </div>

            {/* CheckList Section - Placeholder for component developed by others */}
            {/* <CheckList /> */}
            <section className="min-h-64 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              {/* CheckList component placeholder */}
            </section>
          </div>
        </main>

        {/* Footer - Placeholder for component developed by others */}
        {/* <Footer /> */}
        <footer className="min-h-80 bg-gray-900 text-white">
          {/* Footer component placeholder */}
        </footer>
      </div>
    </>
  );
};

export default FormatRulesPage;
