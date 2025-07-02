export function Navbar() {
  return (
    <div className="medium-sm fixed left-0 top-0 flex h-16 w-screen items-center justify-between bg-light">
      {/* Logo container */}
      <div className="ml-10 rounded p-2 text-center">LOGO</div>

      {/* Navbar traversal options container */}
      <div className="flex items-center gap-8">
        <div className="p-2 text-primary">Home</div>
        <div className="p-2 text-dark">Schedule</div>
        <div className="p-2 text-dark">Format & Rules</div>
        <div className="p-2 text-dark">Sponsor & Guest</div>
        <div className="p-2 text-dark">Leaderboard</div>
        <div className="mr-10 rounded-2xl bg-primary p-3 px-6 font-semibold text-light">
          View Live Results
        </div>
      </div>
    </div>
  );
}
