export function Navbar() {
  return (
    <div className="fixed left-0 top-0 flex h-16 w-screen items-center justify-between">
      {/* Logo container */}
      <div className="ml-10 rounded p-2 text-center">LOGO</div>

      {/* Navbar traversal options container */}
      <div className="flex gap-8">
        <div className="p-2 text-[#F89200]">Home</div>
        <div className="p-2">Schedule</div>
        <div className="p-2">Format & Rules</div>
        <div className="p-2">Sponsor & Guest</div>
        <div className="p-2">Leaderboard</div>
        <div className="mr-10 rounded-xl bg-[#F89200] p-2 px-4 text-white">
          View Live Results
        </div>
      </div>
    </div>
  );
}
