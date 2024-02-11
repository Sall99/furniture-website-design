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
    <div className="w-full text-right flex gap-16 pl-_305">
      {links.map(({ name, path }, key) => (
        <Link href={path} key={key} className="text-white text-lg mt-8">
          {name}
        </Link>
      ))}
    </div>
  );
}
