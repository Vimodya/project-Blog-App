// components/HowItWorks.tsx
import React from "react";

const steps = [
  {
    title: "Step 1",
    description:
      "Explore a wide variety of blogs on different topics. Use the search and filter options to find content that interests you.",
    icon: "🔍",
  },
  {
    title: "Step 2",
    description:
      "Read detailed blog posts and engage with content by sharing your thoughts.",
    icon: "🛠️",
  },
  {
    title: "Step 3",
    description:
      "Share your ideas with the world by creating your own blog posts. Use our blog form to write and publish your content.",
    icon: "🚀",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
