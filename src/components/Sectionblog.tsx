import Image from "next/image";
import React from "react";

function Sectionblog({ onClick }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center shadow-normalComponent rounded-lg">
        <Image
          src="/food.jpg"
          alt="blog"
          width={200}
          height={200}
          className="rounded-lg "
        />
        <div
          className="text-2xl font-light my-4 text-[#040326] italic cursor-pointer"
          onClick={onClick}
        >
          Foods
        </div>
      </div>
    </div>
  );
}

export default Sectionblog;
