"use client";
import { TiSocialFacebook } from "react-icons/ti";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const links = [
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "FAQ", path: "/faq" },
];

const socialLinks = [
  { Icon: <TiSocialFacebook />, path: "/" },
  { Icon: <FaInstagram />, path: "/" },
  { Icon: <FaTwitter />, path: "/" },
  { Icon: <CiLinkedin />, path: "/" },
];

const bottomLinks = [
  { name: "Privacy Policy", path: "/" },
  { name: "Terms of Service", path: "/" },
  { name: "Cookies Settings", path: "/" },
];

export default function Footer() {
  return (
    <div className="w-full bg-secondary-500 px-12 py-20 md:h-_384 md:pt-_142 lg:px-20">
      <div className="mb-10 flex flex-col justify-between gap-9 lg:flex-row ">
        <h2 className="text-2xl font-bold text-white">Furniture</h2>
        <ul className="flex flex-wrap items-center gap-8">
          {links.map(({ name, path }, key) => (
            <li key={key} className="text-white">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-8">
          {socialLinks.map(({ Icon, path }, key) => (
            <li key={key} className="text-white">
              <Link href={path}>{Icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="mt-10 flex flex-col justify-center gap-5 text-13 md:flex-row">
        <p className="text-white">&copy;2022, All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-8">
          {bottomLinks.map(({ name, path }, key) => (
            <li key={key} className="text-white">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
