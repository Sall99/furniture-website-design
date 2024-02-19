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
        "w-8 h-8  absolute right-[80%] -bottom-[105.5px]  z-10 arrow",
        onClick !== null ? "arrow-active" : ""
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
        "w-8 h-8  absolute left-[0%] -bottom-[105.5px] arrow z-10",
        onClick !== null ? "arrow-active" : ""
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
      <div className="border border-black w-2 h-2 rounded-_50 active-dot mt-20  transition ease-in-out duration-300"></div>
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
};

const Card: FC<CardProps> = ({ user, description }) => {
  return (
    <div>
      <div className="flex gap-5 items-center mb-7">
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
    <div className="flex px-_100 mt-28 py-16 justify-center">
      <div className="w-_531">
        <h2 className="font-semibold text-3xl mb-8">
          What people are saying about us
        </h2>
        <SliderContainer />
      </div>
      <div>
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
