import React from "react";
import Image from "next/image";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around mt-24 mb-8">
        <div className="flex flex-col w-96">
          <div className="text-[#192841] text-6xl font-bold w-72">
            Creative Thoughts Agency
          </div>
          <div className="mt-4 text-[#192841] ">
            Here is the biggest collection of the best creative thoughts, just
            find the thoughts for your business.
          </div>
          <div className="mt-8 flex flex-row justify-between">
            <button className="bg-blue-300 text-black px-4 py-2 rounded-lg">
              Learn More
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-lg">
              Contact
            </button>
          </div>
          <div className="flex flex-row justify-between mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
              <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
              <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
              <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
              <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
          </div>
        </div>
        <div>
          <Image
            src="/homeImage.avif"
            alt="home"
            width={700}
            height={500}
            className="rounded-lg "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
