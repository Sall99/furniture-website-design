import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <header className="flex w-full gap-4 px-12 text-right md:gap-16 lg:pl-_108">
      {links.map(({ name, path }, key) => (
        <Link href={path} key={key} className="mt-8 text-lg text-white">
          {name}
        </Link>
      ))}
    </header>
  );
}
