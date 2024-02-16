import Image from "next/image";
import React from "react";

export default function ByRoom() {
  return (
    <div className="mt-32">
      <div className="w-_480 m-auto text-center mb-_168">
        <h2 className="text-40 font-semibold mb-7">Shop by room</h2>
        <p className="text-13 capitalize">
          e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis in.
          Tristique a tellus placerat ac eget. Enim nunc augue fringilla amet.
          Parturient ornare blandit fames auctor augue.
        </p>
      </div>
      <div className="by-shop-card-container px-24 flex flex-col gap-28">
        <div className="by-shop-card flex gap-20 justify-center items-center">
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
          <div className="right-contain w-_448 relative">
            <h2 className="text-4xl font-semibold mb-7">Living Rom</h2>
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
              className="absolute -top-_200 left-_156"
            />
          </div>
        </div>
        <div className="by-shop-card flex gap-20 justify-center items-center">
          <div className="left-contain w-_448">
            <h2 className="text-4xl font-semibold mb-7">Dinning room</h2>
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
              className="absolute -top-7 -left-7 -z-10"
            />
          </div>
        </div>
        <div className="by-shop-card flex gap-20 justify-center items-center">
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
            <div className="right-contain w-_448">
              <h2 className="text-4xl font-semibold mb-7">Bedroom</h2>
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
