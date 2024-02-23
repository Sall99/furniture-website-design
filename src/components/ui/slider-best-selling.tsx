"use client";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

interface ArrowProps {
  onClick?: () => void;
}

const Card: FC<Product> = ({ imageUrl, title, price, promoPrice }) => {
  return (
    <div className="m-auto h-_353 w-_246">
      <div className=" relative rounded-2xl border border-gray-500">
        <Image src={imageUrl} alt={title} width={246} height={250} />
        <div className="absolute bottom-4 right-5 flex h-6 w-6 items-center justify-center rounded-_50 bg-secondary-200 transition ease-in-out hover:scale-95 hover:cursor-pointer">
          <Image
            src="/images/plus.png"
            alt="plus signe"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-base font-semibold text-primary-100">{title}</h2>
        <p className="text-primary-100">
          <span className="mr-4 text-13">${promoPrice}</span>
          <span className="text-xs line-through opacity-45">${price}</span>
        </p>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className={clsx(
        "arrow absolute  -bottom-[105.5px] right-[39%] z-10  h-8 w-8",
        onClick !== null ? "arrow-active" : "",
      )}
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className={clsx(
        "arrow absolute  -bottom-[105.5px] left-[38%] z-10 h-8 w-8",
        onClick !== null ? "arrow-active" : "",
      )}
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

const settings = {
  customPaging: function (i: any) {
    return (
      <div className="active-dot mt-20 h-2 w-2 rounded-_50 border border-black  transition duration-300 ease-in-out"></div>
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
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1343,
      settings: {
        slidesPerRow: 3,
      },
    },
    {
      breakpoint: 1184,
      settings: {
        arrows: false,
        slidesPerRow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 2,
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesPerRow: 1,
        dots: false,
      },
    },
  ],
};

export function SliderBestSellingProducts({ products }: ProductsProps) {
  return (
    <div className="slider-container m-auto xl:px-24 desktop:w-_1339">
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
