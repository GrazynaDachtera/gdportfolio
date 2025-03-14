"use client";
import React, { useEffect, useRef } from "react";
import "./About.scss";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const About: React.FC = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    containerRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      containerRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const milestones = [
    {
      title: "My projects",
      content: `I'm excited to share a curated selection of my frontend projects that showcase both creativity and precision.
    Explore my work, and let's connect to build something amazing together.`,
      link: "/ProjectsPage",
    },

    {
      title: "Contact",
      content: [
        {
          icon: <FaEnvelope size={18} />,
          link: "mailto:grazynadachtera@gmail.com",
          text: "grazynadachtera@gmail.com",
        },
        {
          icon: <FaLinkedin size={18} />,
          link: "https://www.linkedin.com/in/grazynadachtera/",
          text: "linkedin.com/in/grazynadachtera",
        },
        {
          icon: <FaGithub size={18} />,
          link: "https://github.com/GrazynaDachtera",
          text: "github.com/GrazynaDachtera",
        },
      ],
      // Remove or leave the link property; it's not used for CONTACT now.
      link: "",
    },
  ];

  return (
    <section className="containerSection">
      <h3>Let's get to know each other</h3>
      <div className="firstRow">
        {milestones.slice(0, 2).map((milestone, index) => (
          <div
            key={index}
            className={`container container${index + 1}`}
            ref={(el) => (containerRefs.current[index] = el)}
          >
            <h2>{milestone.title}</h2>
            {Array.isArray(milestone.content) ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {milestone.content.map((item, i) => (
                  <p
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {item.icon}
                    <a
                      className="contact-link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  </p>
                ))}
              </div>
            ) : (
              <p>{milestone.content}</p>
            )}
            {/* Render the Read More button only if this milestone is not CONTACT */}
            {milestone.title !== "Contact" &&
              (milestone.link ? (
                <a href={milestone.link} className="readMoreButton">
                  Explore &gt;&gt;
                </a>
              ) : (
                <button className="readMoreButton">Read More &gt;&gt;</button>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
