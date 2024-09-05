// "use client";
// import {
//   CldUploadWidget,
//   CloudinaryUploadWidgetInfo,
//   CloudinaryUploadWidgetResults,
// } from "next-cloudinary";
// import React, { useState } from "react";

// function Blogform() {
//   const [formData, setFormData] = useState({
//     authorName: "",

//     blogCategory: "",
//     blogTitle: "",
//     blogContent: "",
//     blogImage: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handlePublish = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_URL}/api/publish`,
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         setFormData({
//           authorName: "",

//           blogCategory: "",
//           blogTitle: "",
//           blogContent: "",
//           blogImage: "",
//         });
//       } else {
//         const errorData = await response.json();
//         alert(`Error submitting form: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error.message);
//       alert("Error submitting form");
//     }
//   };

//   const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
//     const uploadResults = result.info as CloudinaryUploadWidgetInfo;
//     const blogImageURL = uploadResults.secure_url;

//     setFormData((prevData) => ({
//       ...prevData,
//       blogImage: blogImageURL,
//     }));
//   };

//   return (
//     <div>
//       <div className="flex justify-center text-3xl text-[#5f7c7b] italic">
//         Publish a blog
//       </div>
//       <form onSubmit={handlePublish}>
//         <div className="flex sm:flex-row flex-col mx-8 md:mx-8 lg:mx-0 gap-4 my-8 justify-center">
//           <div className="flex flex-col gap-4">
//             <div className="text-[#5f7c7b]">Author name</div>
//             <input
//               type="text"
//               name="authorName"
//               value={formData.authorName}
//               onChange={handleChange}
//               className="rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             />

//             <div className="text-[#5f7c7b]">Choose blog category</div>
//             <select
//               name="blogCategory"
//               value={formData.blogCategory}
//               onChange={handleChange}
//               className="rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             >
//               <option className="text-[#5f7c7b]" value="Technology">
//                 Technology
//               </option>
//               <option className="text-[#5f7c7b]" value="LifeStyle">
//                 Lifestyle
//               </option>
//               <option className="text-[#5f7c7b]" value="Travel">
//                 Travel
//               </option>
//               <option className="text-[#5f7c7b]" value="Music">
//                 Music
//               </option>
//               <option className="text-[#5f7c7b]" value="Foods">
//                 Food
//               </option>
//               <option className="text-[#5f7c7b]" value="Education">
//                 Education
//               </option>
//               <option className="text-[#5f7c7b]" value="Sports">
//                 Sports
//               </option>
//               <option className="text-[#5f7c7b]" value="Others">
//                 Others
//               </option>
//             </select>
//             <div className="text-[#5f7c7b]">Blog Title</div>
//             <input
//               type="text"
//               name="blogTitle"
//               value={formData.blogTitle}
//               onChange={handleChange}
//               className="rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             />
//           </div>
//           <div className="flex flex-col gap-4 sm:ml-24 ml-0">
//             <div className="text-[#5f7c7b]">Blog image</div>
//             <CldUploadWidget
//               uploadPreset="hxuyyd1e"
//               onSuccess={handleImageUpload}
//             >
//               {({ open }) => (
//                 <button
//                   type="button"
//                   onClick={() => open()}
//                   className="bg-[#5f7c7b] hover:bg-[#5f7c7b] text-white font-bold py-2 px-4 rounded"
//                 >
//                   Upload an Image
//                 </button>
//               )}
//             </CldUploadWidget>

//             <div className="text-[#5f7c7b]">Blog Content</div>
//             <textarea
//               name="blogContent"
//               value={formData.blogContent}
//               onChange={handleChange}
//               className="rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
//             ></textarea>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <button className="bg-[#5f7c7b] text-white p-4 rounded-lg">
//             Publish
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Blogform;
"use client";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import React, { useState } from "react";

function Blogform() {
  const [formData, setFormData] = useState({
    authorName: "",
    blogCategory: "",
    blogTitle: "",
    blogContent: "",
    blogImage: "",
    subtitle1: "",
    description1: "",
    subtitle2: "",
    description2: "",
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

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/publish`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          authorName: "",
          blogCategory: "",
          blogTitle: "",
          blogContent: "",
          blogImage: "",
          subtitle1: "",
          description1: "",
          subtitle2: "",
          description2: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error submitting form: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Error submitting form");
    }
  };

  const handleImageUpload = (result: CloudinaryUploadWidgetResults) => {
    const uploadResults = result.info as CloudinaryUploadWidgetInfo;
    const blogImageURL = uploadResults.secure_url;

    setFormData((prevData) => ({
      ...prevData,
      blogImage: blogImageURL,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center text-3xl text-[#5f7c7b] italic mb-6">
        Publish a blog
      </div>
      <form onSubmit={handlePublish}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#5f7c7b]">Author name</label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>
          <div>
            <label className="block text-[#5f7c7b]">Blog Category</label>
            <select
              name="blogCategory"
              value={formData.blogCategory}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            >
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Travel">Travel</option>
              <option value="Music">Music</option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Sports">Sports</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-[#5f7c7b]">Blog Title</label>
            <input
              type="text"
              name="blogTitle"
              value={formData.blogTitle}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>

          <div>
            <label className="block text-[#5f7c7b]">Blog Image</label>
            <CldUploadWidget
              uploadPreset="hxuyyd1e"
              onSuccess={handleImageUpload}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="bg-[#5f7c7b] hover:bg-[#5f7c7b] text-white font-bold py-2 px-4 rounded w-full"
                >
                  Upload an Image
                </button>
              )}
            </CldUploadWidget>
          </div>

          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">Blog Content</label>
            <textarea
              name="blogContent"
              value={formData.blogContent}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            ></textarea>
          </div>

          {/* Optional Subtitle and Description 1 */}
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Subtitle 1 (Optional)
            </label>
            <input
              type="text"
              name="subtitle1"
              value={formData.subtitle1}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Description 1 (Optional)
            </label>
            <textarea
              name="description1"
              value={formData.description1}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            ></textarea>
          </div>

          {/* Optional Subtitle and Description 2 */}
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Subtitle 2 (Optional)
            </label>
            <input
              type="text"
              name="subtitle2"
              value={formData.subtitle2}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[#5f7c7b]">
              Description 2 (Optional)
            </label>
            <textarea
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#5f7c7b] p-2 bg-gray-200"
            ></textarea>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-[#5f7c7b] text-white p-4 rounded-lg">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Blogform;
