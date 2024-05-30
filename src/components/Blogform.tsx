"use client";
import React, { useState } from "react";
import Sectionblog from "./Sectionblog";

function Blogform() {
  const [formData, setFormData] = useState({
    authorName: "",
    blogTitle: "",
    publishDate: "",
    blogCategory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        authorName: "",
        blogTitle: "",
        publishDate: "",
        blogCategory: "",
      });
    } else {
      alert("Error submitting form");
    }
  };
  return (
    <div>
      <div className="flex justify-center text-3xl text-[#192841] italic">
        Publish a blog
      </div>
      <form onSubmit={handlePublish}>
        <div className="flex flex-row gap-4 my-8 justify-center">
          <div className="flex flex-col gap-4">
            <div className="text-[#192841]">Author name</div>
            <input
              type="text"
              value={formData.authorName}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Publish date</div>
            <input
              type="date"
              value={formData.publishDate}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Choose blog category</div>
            <select
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
              value={formData.blogCategory}
            >
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="food">Education</option>
              <option value="food">Sports</option>
              <option value="food">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 ml-24">
            <div className="text-[#192841]">Choose a template</div>
            <Sectionblog onClick={""} />
            <Sectionblog onClick={""} />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#192841] text-white p-2 rounded-lg">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Blogform;
