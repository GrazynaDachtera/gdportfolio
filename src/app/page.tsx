"use client";

import React from "react";
import "../app/globals.css";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <section className="PortfolioHomePage">
        <div className="BackgroundImage"></div>
        <Navbar />
      </section>
    </>
  );
}
