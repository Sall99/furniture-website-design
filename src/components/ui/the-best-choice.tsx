import Image from "next/image";
import React from "react";

export default function TheBestChoice() {
  return (
    <div className="mt-72 flex justify-center gap-_100">
      <div className="flex flex-col gap-11">
        <div>
          <h2 className="text-4xl font-semibold inline-flex flex-col mb-5">
            The Best Furniture <br /> Manufacturer of your choice
          </h2>
          <p className="w-_480">
            Furnitre power is a software as services for multiperpose business
            management system, expecially for them who are running two or more
            business exploree the future Furnitre power is a software as
            services
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/thinsmooth.png"
            alt="hero"
            width={74}
            height={74}
            className=""
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <Image
            src="/images/the-best-1.png"
            alt="hero"
            width={500}
            height={300}
          />
          <Image
            src="/images/the-best-2.png"
            alt="hero"
            width={200}
            height={180}
            className="absolute -bottom-10 right-9"
          />
          <Image
            src="/images/Arrow_04.png"
            alt="hero"
            width={92}
            height={92}
            className="absolute left-0 -bottom-_100"
          />

          <div className="absolute -top-10 right-5 bg-secondary-300 h-_200 w-_353 rounded-_15 -z-10" />
          <div className="absolute bottom-14 -left-14 bg-primary-300 h-_200 w-_400 rounded-_15 -z-10" />
        </div>
        <div className="mt-_100 text-center">
          <h2 className="text-2xl font-semibold mb-5">Interior Design by us</h2>
          <p className="text-13 w-_353 text-cente capitalize m-auto">
            e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis
            in. Tristique a tellus placerat ac eget. Enim nunc augue fringilla
            amet. Parturient ornare blandit fames auctor augue.
          </p>
        </div>
      </div>
    </div>
  );
}
