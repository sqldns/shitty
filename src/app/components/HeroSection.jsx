"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Vaibhav Tripathi",
                1000,
                "Web Developer",
                1000,
                "Fullstack ",
                1000,
                "QA Tester",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Am a full-stack web developer and aspiring QA tester, CyberSec
            Enthusiast from India. I love building interactive, responsive, and
            user-friendly web applications that solve real-world problems.
          </p>
          {/* Buttons and Badge Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Connect wm!
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
            {/* TryHackMe Badge */}
            <iframe
  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3640863"
  style={{
    border: "none",
    width: "300px",
    height: "150px",
    overflow: "hidden", // Prevents scrollbars
  }}
  scrolling="no" // Disables scrolling
  title="TryHackMe Badge"
></iframe>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
