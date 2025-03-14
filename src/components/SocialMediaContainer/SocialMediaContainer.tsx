"use client";
import React, { useRef } from "react";
import "./SocialMediaContainer.scss";
import "@fontsource/montserrat";

const AboutMeSection = [
  {
    title: "Hello, I'm Grazyna",
    content: `Web Developer skilled in building responsive, user-focused
websites using React, TypeScript, SCSS, and HTML. My background
as an Associate IT Specialist provides a strong understanding of both
development and IT infrastructures. I aim to leverage my skills to
contribute to innovative projects and advance as a Frontend
Developer.
`,
  },
];

export default function SocialMediaContainer() {
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
