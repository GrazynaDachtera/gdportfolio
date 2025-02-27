"use client";

import React from "react";
import "../app/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
      <section className="PortfolioHomePage">
        <div className="BackgroundImage">
          <Navbar />
          <Header />
          <About />
        </div>
      </section>
    </>
  );
}
