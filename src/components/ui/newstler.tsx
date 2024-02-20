"use client";
import React from "react";
import { Button } from ".";

export default function Newstler() {
  return (
    <div className="bg-newstler-pattern w-full h-_490 bg-repeat-round bg-contain pt-_100 flex items-end pr-_100 flex-col">
      <div className="flex flex-col items-start gap-10">
        <div>
          <h2 className="text-white text-40 font-semibold mb-5">
            Get more discount <br /> Off your order
          </h2>
          <p className="text-xl text-white font-light">Join our mailing list</p>
        </div>
        <form action="" className="flex gap-6">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="w-_384 h-_60 rounded-lg px-6 text-secondary-400 font-light"
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
