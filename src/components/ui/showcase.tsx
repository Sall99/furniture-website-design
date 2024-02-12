"use client";
import React from "react";
import Header from "../layout/header";
import { Button } from ".";
import Image from "next/image";

export default function Showcase() {
  return (
    <div className="h-_784 bg-hero-pattern bg-contain">
      <Header />
      <div className="flex justify-between">
        <div className="pl-_108 pr-_156 text-white font-bold mt-16">
          <h2 className="text-2xl">Furniture</h2>
          <div className="w-_200 mt-8 flex flex-col items-center gap-8">
            <p className="text-xs flex flex-col gap-1">
              <span>
                Lorem ipsum dolor sit amet consectetur. At rhoncus etiam
                convallis ullamcorper sit. Velit pretium vitae molestie viverra
                nibh posuere.
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur. At rhoncus etiam
                convallis ullamcorper sit. Velit pretium vitae molestie viverra
                nibh posuere.
              </span>
            </p>
            <Button
              type="button"
              onClick={() => {}}
              label="read more"
              variant="primary"
              size="sm"
            />
          </div>
        </div>

        <div className="mt-32 w-_469 text-center text-white">
          <div>
            <h2 className="font-semibold text-64 text-white font-border capitalize">
              Make a room comfortable & elegant
            </h2>
          </div>
        </div>

        <div className="text-white mr-_156 mt-28">
          <h2 className="text-2xl font-bold">Featured</h2>
          <div className="mt-7 flex flex-col gap-16">
            <div className="relative">
              <Image
                src="/images/hero-1.png"
                alt="hero"
                width={170}
                height={166}
              />
              <p className="absolute text-black flex flex-col featured-pricing capitalize">
                <span>Blue sofa</span>
                <span>$250</span>
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-2.png"
                alt="hero"
                width={170}
                height={166}
              />
              <p className="absolute text-black flex flex-col featured-pricing capitalize">
                <span>Orange chair</span>
                <span>$250</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
