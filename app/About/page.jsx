import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <section>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center">
          {/* Image */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="rounded-full mx-auto"
            />
          </div>
          {/* Paragraph */}
          <div className="w-full md:w-2/3 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt eros sed dolor interdum, in dictum metus fermentum.
              Maecenas ac scelerisque quam, non pharetra arcu. Aliquam erat
              volutpat. Suspendisse potenti. Nam consectetur mi eget dui
              rhoncus, et feugiat lacus vestibulum. Fusce in nunc at augue
              dignissim congue id at erat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
