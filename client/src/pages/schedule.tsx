import { Inter as FontSans } from "next/font/google";
import { useState } from "react";

import { usePings } from "@/hooks/pings";
import { cn } from "@/lib/utils";

import { Button } from "../components/ui/button";
import SchedulePage from "../components/ui/SchedulePage";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Schedule() {
  const [clicked, setClicked] = useState(false);
  const { data, isLoading } = usePings({
    enabled: clicked,
  });

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
