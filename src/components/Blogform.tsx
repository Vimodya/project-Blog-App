"use client";
import React, { useState } from "react";

function Blogform() {
  const [formData, setFormData] = useState({
    authorName: "",
    publishDate: "",
    blogCategory: "",
    blogTitle: "",
    blogContent: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePublish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/publish", {
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
          publishDate: "",
          blogCategory: "",
          blogTitle: "",
          blogContent: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error submitting form: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Fetch error:", (error as Error).message);
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
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Publish date</div>
            <input
              type="date"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Choose blog category</div>
            <select
              name="blogCategory"
              value={formData.blogCategory}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            >
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="education">Education</option>
              <option value="sports">Sports</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 ml-24">
            <div className="text-[#192841]">Blog Title</div>
            <input
              type="text"
              name="blogTitle"
              value={formData.blogTitle}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            />
            <div className="text-[#192841]">Blog Content</div>
            <textarea
              name="blogContent"
              value={formData.blogContent}
              onChange={handleChange}
              className="rounded-lg border border-[#192841] p-2 bg-gray-200"
            ></textarea>
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
