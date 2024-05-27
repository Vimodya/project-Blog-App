import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="h-12 bg-white"></div>
        <div className=" bg-gray-400 pb-4">
          <div className="flex flex-row justify-around mt-24 mb-8">
            <div className="flex flex-col w-96">
              <div className="text-[#192841] text-6xl font-bold w-72">
                Want to contact us ?
              </div>
              <div className="mt-4 text-[#192841] ">
                Have a simple question ? We have the best answer.
              </div>

              <div className="flex flex-row justify-between mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>
              </div>
            </div>
            <div>
              <form>
                <div className="flex flex-col">
                  <div className="text-[#192841] text-2xl font-bold">
                    Get in touch
                  </div>
                  <div className="flex flex-col space-y-4 mt-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="bg-gray-300 rounded-lg px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Message"
                      className="bg-gray-300 rounded-lg px-4 py-2"
                    />
                    <button className="bg-blue-300 text-black px-4 py-2 rounded-lg">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
