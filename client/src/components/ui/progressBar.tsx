import path from "path";
import * as React from "react";

export function ProgressBar({ pageName }: { pageName: string }) {
  let progress = 0;
  switch (pageName) {
    case "schedule":
      progress = 0;
      break;
    case "format-rules":
      progress = 25;
      break;
    case "leaderboard":
      progress = 50;
      break;
    case "sponsor-guest":
      progress = 75;
      break;
  }

  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
      <div
        className="absolute left-0 top-0 h-full bg-primary transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
