"use client";
import React from "react";
import { Button } from ".";
import Image from "next/image";

export default function WhyChoosingUs() {
  return (
    <div className="px-28 mt-40 flex gap-_196 items-center justify-center">
      <div className="w-_448">
        <h2 className="text-40 font-semibold inline-flex flex-col mb-5">
          <span>Why choosing</span> <span className="text-center">us</span>
        </h2>
        <p className="flex flex-col gap-4 text-13 mb-5">
          <span>
            Lorem ipsum dolor sit amet consectetur. Molestie vel nisl justo
            vitae ridiculus malesuada id dapibus posuere. At in ac duis tortor
            sem lectus eget. Purus arcu massa eget massa risus fringilla. Lacus
            condimentum pulvinar vulputate natoque. Ac consequat eget fusce
            nulla viverra. Nulla nibh massa mattis in. Tristique a tellus
            placerat ac eget. Enim nunc augue fringilla amet. Parturient ornare
            blandit fames auctor augue.e. Ac consequat eget fusce nulla viverra.
          </span>
          <span>
            Nulla nibh massa mattis in. Tristique a tellus placerat ac eget.
            Enim nunc augue fringilla amet. Parturient ornare blandit fames
            auctor augue.e. Ac consequat eget fusce nulla viverra. Nulla nibh
            massa mattis in. Tristique a tellus placerat ac eget. Enim nunc
            augue fringilla amet. Parturient ornare blandit fames auctor augue.
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
      <div className="why-choosing-us  flex gap-9">
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
          <div className="why-choosing-card bg-secondary-100">
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
          </div>
        </div>
        <div className="why-choosing-card-container mt-16">
          <div className="why-choosing-card bg-secondary-100">
            {" "}
            <div className="why-choosing-card-round">
              <Image src="/images/ok.png" alt="hero" width={58} height={58} />
            </div>
            <h2>
              secure <br /> payment
            </h2>
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
    </div>
  );
}
