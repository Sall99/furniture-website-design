"use client";
import { testmonialsData } from "@/constants";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";
import Slider from "react-slick";

interface CardProps {
  user: {
    id: number;
    bio: string;
    name: string;
    image: string;
  };

  description: string;
}

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className={clsx(
        "arrow absolute  -bottom-[105.5px] right-[80%] z-10  h-8 w-8",
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
        "arrow absolute  -bottom-[105.5px] left-[0%] z-10 h-8 w-8",
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
  dots: false,
  infinite: false,
  speed: 500,
  slidesPerRow: 1,
  rows: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
      },
    },
  ],
};

const Card: FC<CardProps> = ({ user, description }) => {
  return (
    <div>
      <div className="mb-7 flex items-center gap-5">
        <Image src={user.image} alt={user.name} width={73} height={73} />
        <div>
          <p>{user.name}</p>
          <p>{user.bio}</p>
        </div>
      </div>
      <p>“{description}”</p>
    </div>
  );
};

const SliderContainer = () => {
  return (
    <Slider {...settings}>
      {testmonialsData.map(({ user, description }, key) => (
        <Card key={key} user={user} description={description} />
      ))}
    </Slider>
  );
};

export default function Testmonials() {
  return (
    <div className="mb-24 mt-28 flex justify-center px-12 py-16 lg:px-_100 xl:mb-0">
      <div className=" w-full  md:w-_531">
        <h2 className="mb-8 text-3xl font-semibold">
          What people are saying about us
        </h2>
        <SliderContainer />
      </div>
      <div className="hidden xl:block">
        <Image
          src="/images/testimonial.png"
          alt="testimonial"
          width={517}
          height={312}
        />
      </div>
    </div>
  );
}
