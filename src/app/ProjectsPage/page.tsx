"use client";

import React from "react";
import "../../app/globals.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";

export default function AboutMePage() {
  return (
    <>
      <section className="AboutMePage">
        <div className="BackgroundImage">
          <Navbar />
          <Header />
          <ProjectsContainer />
        </div>
      </section>
    </>
  );
}
