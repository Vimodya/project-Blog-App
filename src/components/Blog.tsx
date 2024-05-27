import Image from "next/image";
import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div>
      <div className="flex flex-col w-96 mb-8">
        <Image
          src="/blogImage.jpg"
          alt="home"
          width={500}
          height={500}
          className="rounded-lg w-72 h-96"
        />
        <div className="text-[#192841] text-3xl font-bold ">Me and Beach</div>
        <div className="text-[#192841] text-xl font-light ">
          <Link href={""}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
