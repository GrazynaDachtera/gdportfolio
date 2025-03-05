"use client";

import React from "react";
import "../../app/globals.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import AboutMeContainer from "../../components/AboutMeContainer/AboutMeContainer";

export default function AboutMePage() {
  return (
    <>
      <section className="AboutMePage">
        <div className="BackgroundImage">
          <Navbar />
          <Header />
          <AboutMeContainer />
        </div>
      </section>
    </>
  );
}
