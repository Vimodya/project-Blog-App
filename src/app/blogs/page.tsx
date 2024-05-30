"use client";
import React, { useState } from "react";
import Footer from "./../../components/footer/Footer";
import Blog from "../../components/Blog";
import Sectionblog from "../../components/Sectionblog";
import Selectedblog from "../../components/Selectedblog";

export default function page() {
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  const handleSectionClick = (index) => {
    setSelectedBlogIndex(index);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-12 my-8 justify-center">
        {selectedBlogIndex === null ? (
          <>
            <Sectionblog onClick={() => handleSectionClick(0)} />
            <Sectionblog onClick={() => handleSectionClick(1)} />
            <Sectionblog onClick={() => handleSectionClick(2)} />
          </>
        ) : (
          <Selectedblog />
        )}
      </div>
      {selectedBlogIndex === null && (
        <>
          <div className="text-4xl font-semibold text-[#040326] text-start my-8 ms-8">
            Most viewed blogs
          </div>
          <div className="flex flex-wrap ms-32 my-8 gap-24">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
