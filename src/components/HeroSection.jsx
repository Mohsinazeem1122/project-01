import React from "react";
import hero from "../assets/hero4.png";
import { Button } from "@/components/ui/button";
import { Magnetic } from "./ui/magnetic";

function HeroSection() {
  const springOptions = { bounce: 0.5 };
  return (
    <div
      style={{ backgroundImage: "url(" + hero + ")" }}
      className="h-[300px] lg:h-screen bg-cover "
    >
      <div className="py-12 px-5 space-y-3 lg:space-y-5 lg:pt-40 lg:pl-20">
        <h1 className="text-xl lg:text-3xl text-yellow-500 font-semibold">
          Get Ready To
        </h1>
        <h1 className="text-3xl lg:text-5xl font-semibold">Style Your Life</h1>
        <p className="text-sm w-[18rem] lg:text-base lg:w-full lg:max-w-2xl text-slate-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          explicabo ipsum, delectus nisi doloribus recusandae molestias aperiam
          odit facilis quam?
        </p>

        <Magnetic
          intensity={0.2}
          springOptions={springOptions}
          actionArea="global"
          range={200}
        >
          <button
            type="button"
            className="bg-stone-950 text-white px-3 py-1.5 rounded-md"
          >
            <Magnetic
              intensity={0.1}
              springOptions={springOptions}
              actionArea="global"
              range={200}
            >
              <span>Buy Now</span>
            </Magnetic>
          </button>
        </Magnetic>
      </div>
    </div>
  );
}

export default HeroSection;
