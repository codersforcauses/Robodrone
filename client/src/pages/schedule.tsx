import { useState } from "react";

import { usePings } from "@/hooks/pings";

import { Button } from "../components/ui/button";
import ProgressBar from "../components/ui/progress";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const { data, isLoading } = usePings({
    enabled: clicked,
  });

  return (
    <>
      <div className="mt-4 w-full justify-center">
        <ProgressBar pageName="schedule" />
      </div>
      <h1 className="title-large text-dark">Title Test</h1>
      <Button onClick={() => setClicked(true)}>
        {isLoading ? "Loading" : "Ping"}
      </Button>
      <p>
        Response from server: <span>{data as string}</span>
      </p>
    </>
  );
}
