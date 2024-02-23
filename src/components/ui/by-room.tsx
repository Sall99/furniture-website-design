import Image from "next/image";
import React from "react";

export default function ByRoom() {
  return (
    <div className="mt-32 px-12">
      <div className="m-auto mb-20 md:mb-_168 md:w-_480 md:text-center">
        <h2 className="mb-7 text-40 font-semibold">Shop by room</h2>
        <p className="text-13 capitalize">
          e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis in.
          Tristique a tellus placerat ac eget. Enim nunc augue fringilla amet.
          Parturient ornare blandit fames auctor augue.
        </p>
      </div>
      <div className="by-shop-card-container flex flex-col gap-28 lg:px-24">
        <div className="by-shop-card flex flex-col-reverse items-center justify-center gap-20 md:flex-row">
          <div className="left-contain relative">
            <Image
              src="/images/byshoop-1.png"
              alt="by-shoop"
              width={452}
              height={218}
            />
            <Image
              src="/images/byshoop-ellipse.png"
              alt="by-shoop"
              width={452}
              height={218}
              className="absolute -top-7 left-7 -z-10"
            />
          </div>
          <div className="right-contain relative md:w-_448">
            <h2 className="mb-7 text-4xl font-semibold">Living Rom</h2>
            <p className="text-13 capitalize">
              e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis
              in. Tristique a tellus placerat ac eget. Enim nunc augue fringilla
              amet. Parturient ornare blandit fames auctor augue.
            </p>
            <Image
              src="/images/star-thin.png"
              alt="by-shoop"
              width={110}
              height={110}
              className="absolute -top-_142 hidden md:-top-_200 md:left-_156 md:block"
            />
          </div>
        </div>
        <div className="by-shop-card flex flex-col items-center justify-center gap-20 md:flex-row">
          <div className="left-contain md:w-_448">
            <h2 className="mb-7 text-4xl font-semibold">Dinning room</h2>
            <p className="text-13 capitalize">
              e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis
              in. Tristique a tellus placerat ac eget. Enim nunc augue fringilla
              amet. Parturient ornare blandit fames auctor augue.
            </p>
          </div>
          <div className="right-contain relative">
            <Image
              src="/images/byshoop-2.png"
              alt="by-shoop"
              width={452}
              height={218}
            />
            <Image
              src="/images/byshoop-ellipse.png"
              alt="by-shoop"
              width={452}
              height={218}
              className="absolute -left-7 -top-7 -z-10"
            />
          </div>
        </div>
        <div className="by-shop-card flex flex-col-reverse items-center justify-center gap-20 md:flex-row">
          <div className="left-contain relative">
            <Image
              src="/images/byshoop-3.png"
              alt="by-shoop"
              width={452}
              height={218}
            />
            <Image
              src="/images/byshoop-ellipse.png"
              alt="by-shoop"
              width={452}
              height={218}
              className="absolute -top-7 left-7 -z-10"
            />
          </div>
          <div className="right-contain">
            <div className="right-contain md:w-_448">
              <h2 className="mb-7 text-4xl font-semibold">Bedroom</h2>
              <p className="text-13 capitalize">
                e. Ac consequat eget fusce nulla viverra. Nulla nibh massa
                mattis in. Tristique a tellus placerat ac eget. Enim nunc augue
                fringilla amet. Parturient ornare blandit fames auctor augue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
