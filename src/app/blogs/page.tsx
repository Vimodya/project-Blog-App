import React from "react";
import Footer from "./../../components/footer/Footer";
import Blog from "../../components/Blog";

export default function page() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-wrap ms-32 my-8">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>

      <Footer />
    </div>
  );
}
