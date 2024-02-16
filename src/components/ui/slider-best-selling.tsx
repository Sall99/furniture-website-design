"use client";
import Image from "next/image";
import React, { FC } from "react";
import Slider from "react-slick";

interface Product {
  id?: string;
  imageUrl: string;
  title: string;
  description?: string;
  price: number;
  promoPrice: number;
}

interface ProductsProps {
  products: Product[];
}
const Card: FC<Product> = ({ imageUrl, title, price, promoPrice }) => {
  return (
    <div className="w-_246 h-_353">
      <div className=" border border-gray-500 rounded-2xl relative">
        <Image src={imageUrl} alt={title} width={246} height={250} />
        <div className="absolute bg-secondary-200 w-6 h-6 flex items-center justify-center rounded-_50 right-5 bottom-4 hover:cursor-pointer hover:scale-95 transition ease-in-out">
          <Image
            src="/images/plus.png"
            alt="plus signe"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-base text-primary-100">{title}</h2>
        <p className="text-primary-100">
          <span className="text-13 mr-4">${promoPrice}</span>
          <span className="text-xs opacity-45 line-through">${price}</span>
        </p>
      </div>
    </div>
  );
};

export function SliderBestSellingProducts({ products }: ProductsProps) {
  const settings = {
    customPaging: function (i: any) {
      return (
        <div className="border border-black w-2 h-2 rounded-_50 active-dot"></div>
      );
    },
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    dots: true,
    infinite: false,
    speed: 500,
    slidesPerRow: 4,
    rows: 2,
  };
  return (
    <div className="slider-container w-_1339 m-auto px-24">
      <Slider {...settings}>
        {products.map(({ imageUrl, id, title, price, promoPrice }, key) => (
          <div key={id}>
            <Card
              imageUrl={imageUrl}
              title={title}
              price={price}
              promoPrice={promoPrice}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
