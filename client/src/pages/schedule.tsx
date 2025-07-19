import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import SchedulePage from "../components/ui/SchedulePage";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Schedule() {
  return (
    <main
      className={cn(
        "md:pt-15 flex min-h-screen flex-col items-center gap-4 bg-light px-4 py-10 pt-4 font-sans md:px-12",
        fontSans.variable,
      )}
    >
      <SchedulePage />
    </main>
  );
}
