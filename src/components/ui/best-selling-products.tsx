import Image from "next/image";
import React from "react";
import { SliderBestSellingProducts } from "./slider-best-selling";
import { products } from "@/constants";

export default function BestSellingProducts() {
  return (
    <div className="mt-20 px-12 md:mt-44">
      <div className="relative m-auto mb-20 md:mb-_168 md:w-_480 md:text-center">
        <Image
          src="/images/star-thin.png"
          alt="by-shoop"
          width={110}
          height={110}
          className="absolute -left-40 -top-24 hidden md:block"
        />
        <h2 className="mb-7 text-40 font-semibold capitalize">
          best selling products
        </h2>
        <p className="text-13 capitalize">
          e. Ac consequat eget fusce nulla viverra. Nulla nibh massa mattis in.
          Tristique a tellus placerat ac eget. Enim nunc augue fringilla amet.
          Parturient ornare blandit fames auctor augue.
        </p>
      </div>
      <div>
        <SliderBestSellingProducts products={products} />
      </div>
    </div>
  );
}
