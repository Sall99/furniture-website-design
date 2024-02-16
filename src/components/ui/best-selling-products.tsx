import Image from "next/image";
import React from "react";
import { SliderBestSellingProducts } from "./slider-best-selling";
import { products } from "@/constants";

export default function BestSellingProducts() {
  return (
    <div className="mt-44">
      <div className="w-_480 m-auto text-center mb-_168 relative">
        <Image
          src="/images/star-thin.png"
          alt="by-shoop"
          width={110}
          height={110}
          className="absolute -top-24 -left-40"
        />
        <h2 className="text-40 font-semibold mb-7 capitalize">
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
