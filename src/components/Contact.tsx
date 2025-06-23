import React from "react";

export default function Contact() {
  return (
    <section className="px-6 py-12 bg-black text-white" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Email: <a className="text-blue-400" href="mailto:georgetaumbe@gmail.com">georgetaumbe@gmail.com</a></p>
      <p>Alternative Email: <a className="text-blue-400" href="mailto:georgetaumbe@hotmail.com">georgetaumbe@hotmail.com</a></p>
      <p>Phone: <a className="text-blue-400" href="tel:+265885362150">+265 885 362 150</a>, <a className="text-blue-400" href="tel:+265996736711">+265 996 736 711</a></p>
    </section>
  );
}
