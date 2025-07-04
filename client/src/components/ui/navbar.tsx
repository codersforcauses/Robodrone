import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  type NavLink = {
    label: string;
    href: string;
  };
  const navlinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Format & Rules", href: "/format-rules" },
    { label: "Sponsor & Guest", href: "/sponsor-guest" },
    { label: "Leaderboard", href: "/leaderboard" },
  ];
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="medium-sm fixed left-0 top-0 flex h-16 w-screen items-center justify-between bg-light">
        {/* Logo container */}
        {/* <div className="ml-10 rounded p-2 text-center">LOGO</div> */}
        <div className="relative ml-10 h-10 w-28">
          <Image
            className="object-contain"
            src="https://squadrone.com.au/wp-content/uploads/2024/11/squadrone-logo-01-scaled.webp"
            alt="Squadrone Logo"
            width={2560}
            height={889}
          />
        </div>

        {/* Navbar traversal options container */}
        <div className="hidden items-center gap-8 sm:flex">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                router.pathname === link.href ? "nav-link-active" : "nav-link"
              }
            >
              {link.label}
            </Link>
          ))}
          <div className="mr-10 rounded-2xl bg-primary p-3 px-6 font-semibold text-light">
            View Live Results
          </div>
        </div>
        <div onClick={handleNav} className="mr-5 cursor-pointer sm:hidden">
          <FiAlignJustify size={35} />
        </div>
      </nav>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 h-screen w-[65%] bg-light p-10 shadow-xl duration-500 ease-out"
            : "fixed right-[-100%] duration-500 ease-in"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <FiX size={35} />
          </div>
        </div>
        <div className="flex flex-col py-6">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                router.pathname === link.href ? "nav-link-active" : "nav-link"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
