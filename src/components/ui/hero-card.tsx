"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroCard() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <div className="hidden px-12 md:block lg:px-32">
        <div className="relative -top-11  h-_182 overflow-hidden rounded-_53 bg-primary-200">
          <Image
            src="/images/ellipse-1.png"
            alt="hero"
            width={452}
            height={218}
            className="absolute left-11"
          />
          <Image
            src="/images/ellipse-2.png"
            alt="hero"
            width={452}
            height={218}
            className="absolute bottom-0 right-11"
          />

          <div className="hero-card-text flex items-center justify-center pt-10">
            <div>
              <p>
                <span className="text-top">7</span>
                <span className="text-bottom">Year Experience</span>
              </p>
            </div>
            <div>
              <p>
                <span className="text-top">2</span>
                <span className="text-bottom">Opened in the country</span>
              </p>
            </div>
            <div>
              <p>
                <span className="text-top">10k+</span>
                <span className="text-bottom">Furniture sold</span>
              </p>
            </div>
            <div>
              <p>
                <span className="text-top">260+</span>
                <span className="text-bottom">Variant Furniture</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
