"use client";
import React from "react";
import Header from "../layout/header";
import { Button } from ".";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <div className="h-_784 bg-hero-pattern bg-contain">
      <Header />
      <div className="flex flex-col px-12 lg:flex-row lg:px-0">
        <motion.div
          className="mt-16 font-bold text-white lg:pl-_108"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <div className="mt-16 font-bold text-white">
            <h2 className="text-2xl">Furniture</h2>
            <div className="mt-8 flex flex-col items-center gap-8 md:w-96 lg:w-_200">
              <p className="flex flex-col gap-1 text-xs">
                <span>
                  Lorem ipsum dolor sit amet consectetur. At rhoncus etiam
                  convallis ullamcorper sit. Velit pretium vitae molestie
                  viverra nibh posuere.
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur. At rhoncus etiam
                  convallis ullamcorper sit. Velit pretium vitae molestie
                  viverra nibh posuere.
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
        </motion.div>

        <div className="mt-28 text-center text-white md:mt-8 lg:ml-10 lg:mt-32 lg:w-_469">
          <div className="relative">
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h2 className="font-border text-5xl font-semibold capitalize leading-tight text-white md:text-64 md:leading-normal">
                Make a room comfortable & elegant
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="absolute -top-[15px] left-6"
            >
              <Image
                src="/images/Highlight.png"
                alt="hero"
                width={39}
                height={43}
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="ml-56 mt-_88 hidden text-white desktop:block">
            <h2 className="text-2xl font-bold">Featured</h2>
            <div className="mt-7 flex flex-col gap-16">
              <div className="relative">
                <Image
                  src="/images/hero-1.png"
                  alt="hero"
                  width={170}
                  height={166}
                />
                <p className="featured-pricing absolute flex flex-col capitalize text-black">
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
                <p className="featured-pricing absolute flex flex-col capitalize text-black">
                  <span>Orange chair</span>
                  <span>$250</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
