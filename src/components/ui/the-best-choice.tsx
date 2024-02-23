import Image from "next/image";
import React from "react";

export default function TheBestChoice() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-_100 px-12 lg:mt-72 xl:flex-row">
      <div className="flex flex-col gap-11">
        <div>
          <h2 className="mb-5 inline-flex flex-col text-4xl font-semibold">
            The Best Furniture <br /> Manufacturer of your choice
          </h2>
          <p className="md:w-_480">
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
        <div className="relative md:w-_500">
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
            className="absolute -bottom-_100 left-0"
          />

          <div className="absolute -top-10 right-5 -z-10 hidden h-_200 w-_353 rounded-_15 bg-secondary-300 md:block" />
          <div className="absolute -left-14 bottom-14 -z-10 hidden h-_200 w-_400 rounded-_15 bg-primary-300 md:block" />
        </div>
        <div className="mt-_100 text-center">
          <h2 className="mb-5 text-2xl font-semibold">Interior Design by us</h2>
          <p className="text-cente m-auto w-_353 text-13 capitalize">
            e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis
            in. Tristique a tellus placerat ac eget. Enim nunc augue fringilla
            amet. Parturient ornare blandit fames auctor augue.
          </p>
        </div>
      </div>
    </div>
  );
}
