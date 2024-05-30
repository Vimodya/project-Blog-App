import Image from "next/image";
import React from "react";
import Blog from "./Blog";

function Selectedblog() {
  return (
    <div>
      <div className="flex flex-col">
        <Image
          src="/food.jpg"
          alt="blog"
          width={1920}
          height={500}
          className="rounded-lg h-[500px]"
        />
        <div className="flex flex-row gap-12 justify-center my-12">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default Selectedblog;
