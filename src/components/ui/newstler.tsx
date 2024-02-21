"use client";
import React from "react";
import { Button } from ".";

export default function Newstler() {
  return (
    <div className="flex h-_490 w-full flex-col items-end bg-newstler-pattern bg-cover px-12 pr-_100 pt-_100 lg:bg-contain lg:bg-repeat-round">
      <div className="flex flex-col items-start gap-10">
        <div>
          <h2 className="mb-5 text-40 font-semibold text-white">
            Get more discount <br /> Off your order
          </h2>
          <p className="text-xl font-light text-white">Join our mailing list</p>
        </div>
        <form action="" className="flex flex-col gap-6 md:flex-row">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="h-_60 w-_384 rounded-lg px-6 font-light text-secondary-400"
            />
          </div>
          <Button
            label="Shop Now"
            variant="secondary"
            size="sm"
            onClick={() => {}}
            className="rounded-lg"
          />
        </form>
      </div>
    </div>
  );
}
