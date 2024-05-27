import React from "react";
import Image from "next/image";
import Footer from "./../../components/footer/Footer";

export default function page() {
  return (
    <div>
      <div className="flex flex-row justify-around mt-24 mb-8">
        <div className="flex flex-col w-96">
          <div className="text-blue-300 text-xl font-light w-72 mb-4">
            About Agency
          </div>
          <div className="text-[#192841] text-3xl font-bold w-96 mb-8">
            We create digital ideas that are bigger, bolder, braver and better.
          </div>
          <div className="mt-4 text-[#192841] text-md font-light ">
            We create digital ideas that are bigger, bolder, braver and better.
            We belive in the power of digital ideas to create a better future
            for our clients, our society and our planet.
          </div>
          <div className="mt-8 flex flex-row justify-between">
            <div className="flex flex-col">
              <div className=" text-gray-200 px-4 py-2 rounded-lg">10 K+</div>
              <div className="text-[#192841]">Years of experience</div>
            </div>
            <div className="flex flex-col">
              <div className=" text-gray-200 px-4 py-2 rounded-lg">10 K+</div>
              <div className="text-[#192841]">Years of experience</div>
            </div>
            <div className="flex flex-col">
              <div className=" text-gray-200 px-4 py-2 rounded-lg">10 K+</div>
              <div className="text-[#192841]">Years of experience</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/aboutImage.avif"
            alt="home"
            width={500}
            height={500}
            className="rounded-lg "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
