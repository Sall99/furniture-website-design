import React from "react";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Features",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
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
