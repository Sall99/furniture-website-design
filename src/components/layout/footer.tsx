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
    <div className="w-full h-_384 bg-secondary-500 pt-_142 px-20">
      <div className="flex justify-between mb-10">
        <h2 className="text-white text-2xl font-bold">Furniture</h2>
        <ul className="flex gap-8 items-center">
          {links.map(({ name, path }, key) => (
            <li key={key} className="text-white">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-8 items-center">
          {socialLinks.map(({ Icon, path }, key) => (
            <li key={key} className="text-white">
              <Link href={path}>{Icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="flex justify-center mt-10 text-13">
        <p className="text-white">&copy;2022, All rights reserved.</p>
        <ul className="flex gap-8 items-center">
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
