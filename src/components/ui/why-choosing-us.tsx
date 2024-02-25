"use client";
import React, { useEffect } from "react";
import { Button } from ".";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyChoosingUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-8 px-12 md:mt-40 md:flex-row lg:gap-16 lg:px-28 desktop:gap-_196">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div className="md:w-_448">
          <h2 className="mb-5 inline-flex flex-col text-40 font-semibold">
            <span>Why choosing</span> <span className="text-center">us</span>
          </h2>
          <p className="mb-5 flex flex-col gap-4 text-13">
            <span>
              Lorem ipsum dolor sit amet consectetur. Molestie vel nisl justo
              vitae ridiculus malesuada id dapibus posuere. At in ac duis tortor
              sem lectus eget. Purus arcu massa eget massa risus fringilla.
              Lacus condimentum pulvinar vulputate natoque. Ac consequat eget
              fusce nulla viverra. Nulla nibh massa mattis in. Tristique a
              tellus placerat ac eget. Enim nunc augue fringilla amet.
              Parturient ornare blandit fames auctor augue.e. Ac consequat eget
              fusce nulla viverra.
            </span>
            <span>
              Nulla nibh massa mattis in. Tristique a tellus placerat ac eget.
              Enim nunc augue fringilla amet. Parturient ornare blandit fames
              auctor augue.e. Ac consequat eget fusce nulla viverra. Nulla nibh
              massa mattis in. Tristique a tellus placerat ac eget. Enim nunc
              augue fringilla amet. Parturient ornare blandit fames auctor
              augue.
            </span>

            <span>
              e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis
              in. Tristique a tellus placerat ac eget. Enim nunc augue fringilla
              amet. Parturient ornare blandit fames auctor augue.
            </span>
          </p>
          <Button
            variant="primary"
            label="Read more"
            size="sm"
            onClick={() => {}}
          />
        </div>
      </motion.div>
      <motion.div
        className="mt-16 font-bold text-white lg:pl-_108"
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div className="why-choosing-us  flex flex-col gap-9 md:flex-row">
          <div className="why-choosing-card-container">
            <div className="why-choosing-card bg-primary-300">
              <div className="why-choosing-card-round">
                <Image
                  src="/images/delivery.png"
                  alt="hero"
                  width={58}
                  height={58}
                />
              </div>
              <h2>
                free <br /> Delivery
              </h2>
            </div>
            <div className="why-choosing-card relative bg-secondary-100">
              {" "}
              <div className="why-choosing-card-round">
                <Image
                  src="/images/wrench.png"
                  alt="hero"
                  width={58}
                  height={58}
                />
              </div>
              <h2>
                free <br /> installation
              </h2>
              <Image
                src="/images/ellipse-sm-1.png"
                alt="hero"
                width={61}
                height={119}
                className="absolute bottom-7 left-0"
              />
            </div>
          </div>
          <div className="why-choosing-card-container mt-16">
            <div className="why-choosing-card relative bg-secondary-100">
              {" "}
              <div className="why-choosing-card-round">
                <Image src="/images/ok.png" alt="hero" width={58} height={58} />
              </div>
              <h2>
                secure <br /> payment
              </h2>
              <Image
                src="/images/ellipse-sm-2.png"
                alt="hero"
                width={61}
                height={119}
                className="absolute bottom-7 right-0"
              />
            </div>
            <div className="why-choosing-card bg-primary-300">
              {" "}
              <div className="why-choosing-card-round">
                <Image
                  src="/images/square.png"
                  alt="hero"
                  width={58}
                  height={58}
                />
              </div>
              <h2>Guarantee</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
