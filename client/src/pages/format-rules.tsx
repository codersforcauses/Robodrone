import { NextPage } from "next";
import Head from "next/head";

import CheckList from "../components/ui/FormatRules/CheckList";
import Navbar from "../components/ui/navbar";
import ProgressBar from "../components/ui/progress";

// Style constants definition
const styles = {
  // Text styles
  contentText: "body-sm text-neutral-900",
  sectionTitle: "medium-lg mb-3 text-neutral-900",
  subsectionTitle: "medium-md mb-2 text-neutral-900",

  // Layout styles
  listContent: "ml-2 md:ml-4 space-y-2 body-sm text-neutral-900",
  listIndented: "ml-4 md:ml-8 space-y-1 body-sm text-neutral-900",
  sectionSpacing: "space-y-4",
  cardSpacing: "w-full px-6 md:px-14",

  // Table styles
  tableCell: "border border-gray-300 px-2 py-2 text-center caption",
  tableCellMedium:
    "border border-gray-300 px-2 py-2 text-center font-medium caption",
  tableCellBold:
    "border border-gray-300 px-2 py-2 text-center font-bold caption",
  tableHeader: "border border-gray-300 px-2 py-2 text-left font-bold caption",

  // Container styles
  pageBackground: "bg-gray-100",

  // Special styles
  importantText: "body-lg text-neutral-900 font-medium",
  warningText: "body-sm text-red-600 font-medium",
} as const;

// Reusable component definitions
interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const ContentText = ({ children, className = "" }: TextProps) => (
  <p className={`${styles.contentText} ${className}`}>{children}</p>
);

const ImportantText = ({ children }: { children: React.ReactNode }) => (
  <p className={styles.importantText}>{children}</p>
);

const WarningText = ({ children }: { children: React.ReactNode }) => (
  <p className={styles.warningText}>{children}</p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className={styles.sectionTitle}>{children}</h2>
);

const SubsectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className={styles.subsectionTitle}>{children}</h3>
);

interface TableCellProps {
  children: React.ReactNode;
  variant?: "normal" | "medium" | "bold";
}

const TableCell = ({ children, variant = "normal" }: TableCellProps) => {
  const cellStyles = {
    normal: styles.tableCell,
    medium: styles.tableCellMedium,
    bold: styles.tableCellBold,
  };

  return <td className={cellStyles[variant]}>{children}</td>;
};

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className={styles.tableHeader}>{children}</th>
);

const ListContent = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.listContent}>{children}</div>
);

const IndentedList = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.listIndented}>{children}</div>
);

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

      <div className={`min-h-screen ${styles.pageBackground}`}>
        {/* Navbar is still included from _app.tsx line 46 */}

        {/* Main Content - Add pt-20 to avoid being blocked by fixed navbar */}
        <main className="container mx-auto px-4 py-8 pt-10 md:pt-20">
          <div className="mx-auto px-5 py-10 md:px-12">
            {/* Hero Section */}
            <div className="mb-8 text-center">
              {/* ProgressBar Component replaces the title */}
              <ProgressBar pageName="format-rules" />

              <ContentText className="body-lg">
                Complete guide to the 2025 WRC Drone Speed Challenge. Each match
                is a<strong> 3-minute </strong>2v2 team competition with two
                distinct stages.
              </ContentText>
            </div>

            {/* Content Sections */}
            <div className={`mb-8 ${styles.sectionSpacing}`}>
              {/* Competition Overview Section */}
              <section>
                <SectionTitle>Competition Overview</SectionTitle>
                <div className={styles.sectionSpacing}>
                  <div>
                    <SubsectionTitle>Venue Specifications</SubsectionTitle>
                    <ContentText>
                      <strong>Arena:</strong> 6m x 4m competition field
                      featuring Mission Zone, Player Movement Zone, Obstacle
                      Zone, and Takeoff/Landing Zone. Safety barriers surround
                      the entire arena.
                    </ContentText>
                  </div>

                  <div>
                    <SubsectionTitle>Match Duration</SubsectionTitle>
                    <ContentText>
                      Each match lasts <strong>3 minutes</strong>. If the match
                      ends in a tie, a <strong>1-minute overtime</strong> is
                      held where the first drone to complete Obstacle D wins.
                    </ContentText>
                  </div>

                  <div>
                    <SubsectionTitle>Competition Stages</SubsectionTitle>
                    <ContentText>
                      <strong>1. Group Round-Robin:</strong> Teams divided into
                      groups of 4, each team plays every other team once (6
                      matches per group)
                    </ContentText>
                    <ContentText>
                      <strong>2. Tie-Breaking Stage:</strong> Additional matches
                      if the number of group winners is not a power of 2 (e.g.,
                      reducing 10 teams to 8)
                    </ContentText>
                    <ContentText>
                      <strong>3. Elimination Stage:</strong> Single-elimination
                      tournament format
                    </ContentText>
                  </div>
                </div>
              </section>

              {/* Equipment Requirements Section */}
              <section>
                <SectionTitle>Equipment Requirements</SectionTitle>
                <div className={styles.cardSpacing}>
                  <ContentText>
                    All teams must bring their own drones meeting these
                    specifications:
                  </ContentText>
                  <ul className={styles.listContent}>
                    <li className={styles.contentText}>
                      • <strong>Aircraft model:</strong> Quadcopter (four
                      rotors)
                    </li>
                    <li className={styles.contentText}>
                      • <strong>Aircraft wheelbase:</strong> Maximum 180mm
                    </li>
                    <li className={styles.contentText}>
                      • <strong>Flight time:</strong> At least 5 minutes
                    </li>
                    <li className={styles.contentText}>
                      • <strong>Takeoff weight:</strong> Less than 250g
                      (including protective guard and battery)
                    </li>
                    <li className={styles.contentText}>
                      • <strong>Protection design:</strong> Fully enclosed
                      protective guard for flight safety
                    </li>
                    <li className={styles.contentText}>
                      • <strong>Control method:</strong> Must be controlled via
                      physical remote controller
                    </li>
                  </ul>
                  <WarningText>
                    All equipment will be inspected by organizers before
                    competition.
                  </WarningText>
                </div>
              </section>

              {/* Stage 1 - Mission Zone (Updated) */}
              <section>
                <SectionTitle>Stage 1 – Mission Zone</SectionTitle>
                <div className={styles.cardSpacing}>
                  <ContentText>
                    Each team flies their drone in a separate area and tries to{" "}
                    <strong>knock down all 6 white pins</strong>. These are the
                    only pins they're meant to hit. After successfully
                    completing the mission, the drone must{" "}
                    <strong>return to the take-off zone</strong> and notify the
                    referee.
                  </ContentText>

                  <div>
                    <SubsectionTitle>
                      Penalty Pins and Time Penalties
                    </SubsectionTitle>
                    <ContentText>
                      If they knock down any of the 6 yellow pins (Penalty
                      Pins), they receive:
                    </ContentText>
                    <IndentedList>
                      <ContentText>
                        • <strong>-3 points</strong> for each yellow pin hit
                      </ContentText>
                      <ContentText>
                        • <strong>5-second time penalty</strong> - drone must
                        land in takeoff zone and remain there for 5 seconds
                        before continuing
                      </ContentText>
                      <ContentText>
                        • Penalty time starts when referee announces "Penalty
                        Start" and ends with "Penalty Over"
                      </ContentText>
                    </IndentedList>
                  </div>

                  <div>
                    <SubsectionTitle>Mission Completion</SubsectionTitle>
                    <ContentText>
                      Teams must notify the referee upon mission completion.
                      Only after referee confirmation can they proceed to Stage
                      2. The first team to complete moves to the Obstacle Zone.
                    </ContentText>
                  </div>
                </div>
              </section>

              {/* Special Touch Opportunity Section */}
              <section>
                <SectionTitle>Special Touch Opportunity</SectionTitle>
                <div className={styles.cardSpacing}>
                  <ImportantText>
                    Each participant has{" "}
                    <strong>ONE opportunity per match</strong> to intentionally
                    enter the competition zone and touch their drone.
                  </ImportantText>

                  <ContentText>Rules for Special Touch:</ContentText>
                  <ul className={styles.listContent}>
                    <li className={styles.contentText}>
                      • Must <strong>raise hand to signal</strong> before
                      entering the zone
                    </li>
                    <li className={styles.contentText}>
                      • Must{" "}
                      <strong>immediately return to operator area</strong> after
                      touching the drone
                    </li>
                    <li className={styles.contentText}>
                      • Can be used to adjust drone position, remove obstacles,
                      etc.
                    </li>
                    <li className={styles.contentText}>
                      • <strong>Cannot be used</strong> to move objects,
                      interfere with mission, or disrupt opponents
                    </li>
                    <li className={styles.warningText}>
                      • <strong>NOT allowed in Obstacle Zone</strong>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Stage 2 - Obstacle Zone (Updated) */}
              <section>
                <SectionTitle>Stage 2 – Obstacle Zone</SectionTitle>
                <div className={styles.cardSpacing}>
                  <ContentText>
                    Both teams navigate through a shared course of four
                    obstacles (A, B, C, D) following different paths based on
                    team color. The finishing order determines{" "}
                    <strong>Honor Points</strong>.
                  </ContentText>

                  <div>
                    <SubsectionTitle>Team Paths</SubsectionTitle>
                    <ContentText>
                      <strong>Red Team Path:</strong> B → A → C → D
                    </ContentText>
                    <ContentText>
                      <strong>Blue Team Path:</strong> A → B → C → D
                    </ContentText>
                    <ContentText>
                      <strong>Point D is the finish line.</strong> Rankings are
                      based on the order drones pass through Obstacle D.
                    </ContentText>
                  </div>

                  <div>
                    <SubsectionTitle>Strategic Rules</SubsectionTitle>
                    <ContentText>
                      Teams may strategically disrupt opponent flight paths
                      using drone maneuvers, but{" "}
                      <strong>physical interference</strong> (blocking with
                      hands or objects) is <strong>strictly prohibited</strong>{" "}
                      and results in a red card (disqualification).
                    </ContentText>
                    <WarningText>
                      No Special Touch Opportunity is allowed in the Obstacle
                      Zone.
                    </WarningText>
                  </div>
                </div>
              </section>

              {/* Scoring and Ranking System (Updated) */}
              <section>
                <SectionTitle>Scoring and Ranking System</SectionTitle>
                <div className={styles.sectionSpacing}>
                  <ImportantText>
                    Teams are ranked using{" "}
                    <strong>three criteria in this exact order:</strong>
                    <br />
                    1. Honor Points → 2. Regular Points → 3. Mission Zone Time
                  </ImportantText>

                  {/* Honor Points (Updated) */}
                  <div>
                    <SubsectionTitle>
                      1. Honor Points – Based on Obstacle Zone finishing order
                    </SubsectionTitle>
                    <ListContent>
                      <ContentText>
                        Awarded according to the combination of drone finishing
                        positions in Obstacle Zone:
                      </ContentText>
                    </ListContent>
                  </div>

                  {/* Regular Points (Updated) */}
                  <div>
                    <SubsectionTitle>
                      2. Regular Points – Used if Honor Points are tied
                    </SubsectionTitle>
                    <ListContent>
                      <ContentText>Calculated as follows:</ContentText>
                      <IndentedList>
                        <ContentText>
                          • <strong>+2 points</strong> per white pin knocked
                          down
                        </ContentText>
                        <ContentText>
                          • <strong>-3 points</strong> per yellow pin hit
                          (penalty pins)
                        </ContentText>
                        <ContentText>
                          • <strong>-3 points</strong> per yellow card received
                        </ContentText>
                        <ContentText>
                          • <strong>-10 points</strong> per red card received
                        </ContentText>
                      </IndentedList>
                    </ListContent>
                  </div>

                  {/* Mission Zone Time */}
                  <div>
                    <SubsectionTitle>
                      3. Mission Zone Time – Final tiebreaker
                    </SubsectionTitle>
                    <ListContent>
                      <ContentText>
                        If both Honor and Regular Points are tied, the team with
                        faster
                        <strong> Mission Zone completion time</strong>{" "}
                        (including all penalty seconds) is ranked higher.
                      </ContentText>
                    </ListContent>
                  </div>

                  {/* Honor Points Table */}
                  <div className="mt-6">
                    <SubsectionTitle>Honor Points Award Table:</SubsectionTitle>
                    <div className="overflow-x-auto">
                      <table className="caption w-full border border-gray-300 text-neutral-900">
                        <thead className="bg-gray-100">
                          <tr>
                            <TableHeader>Rank Combination</TableHeader>
                            <TableHeader>Honor Points</TableHeader>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <TableCell variant="medium">
                              1st place (solo)
                            </TableCell>
                            <TableCell>1 point</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              1st & 2nd place (team)
                            </TableCell>
                            <TableCell>3 points</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              1st & 3rd place (team)
                            </TableCell>
                            <TableCell>2 points</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              1st & 4th place (team)
                            </TableCell>
                            <TableCell>1 point</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              2nd & 3rd place (team)
                            </TableCell>
                            <TableCell>0 points</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              2nd & 4th place (team)
                            </TableCell>
                            <TableCell>0 points</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              3rd & 4th place (team)
                            </TableCell>
                            <TableCell>0 points</TableCell>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Scoring Example Table */}
                  <div className="mt-6">
                    <SubsectionTitle>Scoring Example:</SubsectionTitle>
                    <div className="overflow-x-auto">
                      <table className="caption w-full border border-gray-300 text-neutral-900">
                        <thead className="bg-gray-100">
                          <tr>
                            <TableHeader>Team Name</TableHeader>
                            <TableHeader>
                              Honor Points
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (Based on obstacle finish)
                              </span>
                            </TableHeader>
                            <TableHeader>
                              White Pins
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (+2 pts each)
                              </span>
                            </TableHeader>
                            <TableHeader>
                              Penalty Pins Hit
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (-3 pts each)
                              </span>
                            </TableHeader>
                            <TableHeader>
                              Yellow Cards
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (-3 pts each)
                              </span>
                            </TableHeader>
                            <TableHeader>
                              Red Cards
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (-10 pts each)
                              </span>
                            </TableHeader>
                            <TableHeader>
                              Regular Points
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (Total from above)
                              </span>
                            </TableHeader>
                            <TableHeader>
                              Mission Time (s)
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (incl. penalties)
                              </span>
                            </TableHeader>
                            <TableHeader>
                              Final Rank
                              <br />
                              <span
                                className="font-normal"
                                style={{ fontSize: "12px" }}
                              >
                                (Final position)
                              </span>
                            </TableHeader>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-green-50">
                            <TableCell variant="medium">Red Falcons</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>6</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell variant="medium">12</TableCell>
                            <TableCell>55</TableCell>
                            <TableCell variant="bold">1</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">Blue Hawks</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>6</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell variant="medium">6</TableCell>
                            <TableCell>60</TableCell>
                            <TableCell variant="bold">2</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              Silver Sparks
                            </TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell variant="medium">7</TableCell>
                            <TableCell>58</TableCell>
                            <TableCell variant="bold">3</TableCell>
                          </tr>
                          <tr>
                            <TableCell variant="medium">
                              Golden Drones
                            </TableCell>
                            <TableCell>0</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell variant="medium">-1</TableCell>
                            <TableCell>65</TableCell>
                            <TableCell variant="bold">4</TableCell>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ContentText className="caption mt-2">
                      <strong>Note:</strong> Red Falcons won due to highest
                      Honor Points (3). Even though Silver Sparks had higher
                      Regular Points (7) than Blue Hawks (6), Blue Hawks ranked
                      higher due to better Honor Points (2 vs 1).
                    </ContentText>
                  </div>
                </div>
              </section>

              {/* Violations and Penalties (Updated) */}
              <section>
                <SectionTitle>Violations and Penalties</SectionTitle>
                <div className={styles.sectionSpacing}>
                  <div>
                    <SubsectionTitle>
                      Yellow Cards (–3 pts) are issued for minor infractions:
                    </SubsectionTitle>
                    <ul className={styles.listContent}>
                      <li className={styles.contentText}>
                        ◦ Deliberately crossing into restricted zones or using
                        body/objects to touch or block opponent drones
                      </li>
                      <li className={styles.contentText}>
                        ◦ Accidentally knocking over obstacles in mission zone
                        (must restore to original position)
                      </li>
                      <li className={styles.contentText}>
                        ◦ Crossing into restricted areas and interfering with
                        opponents
                      </li>
                      <li className={styles.contentText}>
                        ◦ Ignoring referee warnings or inappropriate behavior
                      </li>
                      <li className={styles.contentText}>
                        ◦ Disputing match results without valid grounds (after
                        written appeal review)
                      </li>
                    </ul>
                    <WarningText>
                      Each team allowed up to 2 yellow card warnings. Third
                      yellow card = red card.
                    </WarningText>
                  </div>

                  <div>
                    <SubsectionTitle>
                      Red Cards (–10 pts) are given for serious violations:
                    </SubsectionTitle>
                    <ul className={styles.listContent}>
                      <li className={styles.contentText}>
                        ◦ Intentionally controlling drone to crash into field
                        structures, spectators, or unrelated individuals
                      </li>
                      <li className={styles.contentText}>
                        ◦ Using unauthorized modifications or external signal
                        devices to interfere with match
                      </li>
                      <li className={styles.contentText}>
                        ◦ Physical interference like blocking with hands or
                        objects (automatic disqualification)
                      </li>
                    </ul>
                    <WarningText>
                      Red card = immediate stop of drone operation. Another team
                      member may take over unless drone is in dangerous position
                      (referee decision).
                    </WarningText>
                  </div>
                </div>
              </section>

              {/* Safety Guidelines Section */}
              <section>
                <SectionTitle>Safety Guidelines</SectionTitle>
                <div className={styles.cardSpacing}>
                  <ImportantText>
                    Safety is our top priority. All participants must:
                  </ImportantText>
                  <ul className={styles.listContent}>
                    <li className={styles.contentText}>
                      • Carefully read and follow drone user manual and safety
                      procedures before operation
                    </li>
                    <li className={styles.contentText}>
                      • Stay behind safety barriers when not competing -
                      spectators and non-participants must remain behind
                      barriers at all times
                    </li>
                    <li className={styles.contentText}>
                      • Immediately stop drone operation if malfunction occurs
                      or safety risk is detected
                    </li>
                    <li className={styles.contentText}>
                      • Follow safety instructions from on-site personnel
                      immediately
                    </li>
                    <li className={styles.warningText}>
                      • Never operate drones or related equipment near the venue
                      without permission
                    </li>
                  </ul>
                </div>
              </section>

              {/* Focus Statement */}
              <section>
                <ImportantText>
                  Focus on safety, fair play, and showcasing technical skills.
                  Good sportsmanship and respect for referees and opponents are
                  essential.
                </ImportantText>
              </section>
            </div>

            {/* CheckList Section */}
            <CheckList />
          </div>
        </main>
      </div>
    </>
  );
};

export default FormatRulesPage;
