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
        "flex min-h-screen flex-col items-center gap-4 bg-light p-24 font-sans",
        fontSans.variable,
      )}
    >
      <SchedulePage />
    </main>
  );
}
