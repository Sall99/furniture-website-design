import Image from "next/image";
import React from "react";

export default function HeroCard() {
  return (
    <div className="px-32">
      <div className="h-_182 bg-primary-200  rounded-_53 relative -top-11 overflow-hidden">
        <Image
          src="/images/ellipse-1.png"
          alt="hero"
          width={452}
          height={218}
          className="absolute left-11"
        />
        <Image
          src="/images/ellipse-2.png"
          alt="hero"
          width={452}
          height={218}
          className="absolute right-11 bottom-0"
        />

        <div className="hero-card-text flex justify-center items-center pt-10">
          <div>
            <p>
              <span className="text-top">7</span>
              <span className="text-bottom">Year Experience</span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-top">2</span>
              <span className="text-bottom">Opened in the country</span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-top">10k+</span>
              <span className="text-bottom">Furniture sold</span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-top">260+</span>
              <span className="text-bottom">Variant Furniture</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
