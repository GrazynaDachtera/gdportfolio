"use client";

import React from "react";
import "../../app/globals.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ContactContainer from "../../components/ContactContainer/ContactContainer";

export default function AboutMePage() {
  return (
    <>
      <section className="AboutMePage">
        <div className="BackgroundImage">
          <Navbar />
          <Header />
          <ContactContainer />
        </div>
      </section>
    </>
  );
}
