import React from "react";
export default function Hero({ page }) {
  return (
    <section className=" bg-blue-600 py-24 text-center">
      <h1 className="text-5xl text-black font-bold">The Generics</h1>
      {page === "home" ? <>
      <button className="border border-cyan-200 px-10 py-4 hover:bg-cyan-200 hover:text-black ease-in-out transition-all mt-10">Get our latest Album</button>
      
      </> : null}
    </section>
  );
}
