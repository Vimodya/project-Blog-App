// src/components/navBar/NavBar.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "./../../app/context/AuthProvider";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <div className="flex flex-row justify-between mx-8">
        <div className="flex items-center mt-4">
          <Image
            src="/w.png" // Replace with the path to your logo image
            alt="Logo"
            width={50} // Adjust the width as needed
            height={50} // Adjust the height as needed
          />
        </div>
        <div className="text-[#192841] space-x-4 hidden md:flex lg:flex mt-8">
          <Link href="/home" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/blogs" className="hover:text-yellow-500">
            Blogs
          </Link>
          {!isLoggedIn && (
            <Link href="/login" className="hover:text-yellow-500">
              LogIn
            </Link>
          )}
        </div>
      </div>
      <div className="">
        <button
          onClick={() => setOpen(true)}
          className="flex md:hidden lg:hidden justify-end text-[#192841] top-0 right-0 bg-opacity-50 hover:text-yellow-500"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="bg-white">
          <div className="absolute w-full h-full bg-white bg-opacity-50">
            <button onClick={() => setOpen(false)}>Close</button>
            <div className="flex flex-col justify-end text-[#192841] space-y-4">
              <Link href="/" className="hover:text-yellow-500">
                Home
              </Link>
              <Link href="/about" className="hover:text-yellow-500">
                About
              </Link>
              <Link href="/contacts" className="hover:text-yellow-500">
                Contact
              </Link>
              <Link href="/blogs" className="hover:text-yellow-500">
                Blogs
              </Link>
              {!isLoggedIn && (
                <Link href="/login" className="hover:text-yellow-500">
                  LogIn
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
