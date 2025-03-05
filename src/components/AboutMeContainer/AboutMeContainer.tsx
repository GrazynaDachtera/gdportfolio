"use client";
import React, { useRef } from "react";
import "./AboutMeContainer.scss";

const AboutMeSection = [
  {
    title: "Hello, I'm Grazyna",
    content: `I'm excited to share a curated selection of my frontend projects that showcase both creativity and precision.
Explore my work, and let's connect to build something amazing together.`,
  },
];

export default function AboutMeContainer() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="MainContainer">
      {AboutMeSection.map((item, index) => (
        <div
          key={index}
          className={`container container${index + 1}`}
          ref={(el) => (containerRefs.current[index] = el)}
        >
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
}
