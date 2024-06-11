// "use client";
// import React, { useState } from "react";
// import Footer from "./../../components/footer/Footer";
// import Sectionblog from "../../components/Sectionblog";
// import Selectedblog from "../../components/Selectedblog";

// export default function page() {
//   const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleSectionClick = (index, category) => {
//     setSelectedBlogIndex(index);
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-row gap-12 my-8 justify-center">
//         {selectedBlogIndex === null ? (
//           <>
//             <Sectionblog
//               section="Technology"
//               onClick={() => handleSectionClick(0, "Technology")}
//             />
//             <Sectionblog
//               section="Education"
//               onClick={() => handleSectionClick(1, "Education")}
//             />
//             <Sectionblog
//               section="Foods"
//               onClick={() => handleSectionClick(1, "Foods")}
//             />
//             <Sectionblog
//               section="Music"
//               onClick={() => handleSectionClick(2, "Music")}
//             />
//             <Sectionblog
//               section="Travel"
//               onClick={() => handleSectionClick(3, "Travel")}
//             />
//             <Sectionblog
//               section="LifeStyle"
//               onClick={() => handleSectionClick(4, "LifeStyle")}
//             />

//             <Sectionblog
//               section="Sports"
//               onClick={() => handleSectionClick(5, "Sports")}
//             />
//             <Sectionblog
//               section="Others"
//               onClick={() => handleSectionClick(6, "Others")}
//             />
//           </>
//         ) : (
//           <Selectedblog blogCategory={selectedCategory} />
//         )}
//       </div>
//       {selectedBlogIndex === null && (
//         <>
//           <div className="text-4xl font-semibold text-[#040326] text-start my-8 ms-8">
//             Most viewed blogs
//           </div>
//           <div className="flex flex-wrap ms-32 my-8 gap-24">
//             {/* <Blog />
//             <Blog />
//             <Blog />
//             <Blog />
//             <Blog /> */}
//           </div>
//         </>
//       )}
//       <Footer />
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Footer from "./../../components/footer/Footer";
import Sectionblog from "../../components/Sectionblog";
import Selectedblog from "../../components/Selectedblog";

export default function Page() {
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index of the first visible section

  const sections = [
    { section: "Technology", category: "Technology" },
    { section: "Education", category: "Education" },
    { section: "Foods", category: "Foods" },
    { section: "Music", category: "Music" },
    { section: "Travel", category: "Travel" },
    { section: "LifeStyle", category: "LifeStyle" },
    { section: "Sports", category: "Sports" },
    { section: "Others", category: "Others" },
  ];

  const handleSectionClick = (index, category) => {
    setSelectedBlogIndex(index);
    setSelectedCategory(category);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 3, sections.length - 3)
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-12 my-8 justify-center items-center">
        {selectedBlogIndex === null ? (
          <>
            <button onClick={handlePrevious} disabled={currentIndex === 0}>
              &lt;
            </button>
            {sections
              .slice(currentIndex, currentIndex + 3)
              .map((section, index) => (
                <Sectionblog
                  key={index}
                  section={section.section}
                  onClick={() =>
                    handleSectionClick(currentIndex + index, section.category)
                  }
                />
              ))}
            <button
              onClick={handleNext}
              disabled={currentIndex === sections.length - 3}
            >
              &gt;
            </button>
          </>
        ) : (
          <Selectedblog
            section={sections[selectedBlogIndex].section}
            blogCategory={selectedCategory}
          />
        )}
      </div>
      {selectedBlogIndex === null && (
        <>
          <div className="text-4xl font-semibold text-[#040326] text-start my-8 ms-8">
            Most viewed blogs
          </div>
          <div className="flex flex-wrap ms-32 my-8 gap-24">
            {/* <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog /> */}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
