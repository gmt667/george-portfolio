import React from "react";
import myPhoto from "../assets/profile-photos/FB_IMG_1731884055918.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-black text-white" id="hero">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">George Mustafa Taumbe</h2>
        <p className="text-xl mb-6 animate-pulse text-gray-400">
          Computer Engineering Student | Full Stack Developer | Electronics Enthusiast
        </p>
        <a href="#contact" className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
          Contact Me
        </a>
      </div>
      <img src={myPhoto} alt="George" className="w-48 h-48 md:w-64 md:h-64 rounded-full mt-8 md:mt-0 object-cover shadow-lg" />
    </section>
  );
}
