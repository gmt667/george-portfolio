import React from "react";

export default function Projects() {
  return (
    <section className="px-6 py-12 bg-black text-white" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className="bg-gray-800 p-4 rounded-lg">🎓 Student Academic Portal</li>
        <li className="bg-gray-800 p-4 rounded-lg">💰 Personal Finance Tracker</li>
        <li className="bg-gray-800 p-4 rounded-lg">🎫 E-Ticketing System</li>
        <li className="bg-gray-800 p-4 rounded-lg">📷 Image Gallery with Lightbox</li>
      </ul>
    </section>
  );
}
