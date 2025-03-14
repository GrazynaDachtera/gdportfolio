"use client";
import React from "react";
import "./ProjectsContainer.scss";

const buttonData = [
  { title: "Kuzi-Sport", url: "https://www.kuzisport.pl/" },
  { title: "GlobalProperty", url: "https://globalproperty-group.com/" },
  {
    title: "Casino",
    url: "https://grazynadachtera.github.io/CasinoLandingPage/",
  },
  { title: "Summ-it", url: "https://summ-it.pl/" },
  { title: "Kongwell", url: "https://grazynadachtera.github.io/Kongwell/" },
  { title: "PampasRose", url: "https://grazynadachtera.github.io/pampasrose/" },
];

export default function CircleButtons() {
  return (
    <div className="circle-container">
      {buttonData.map((btn, i) => (
        <a
          key={i}
          className="circle-button"
          href={btn.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {btn.title}
        </a>
      ))}
    </div>
  );
}
