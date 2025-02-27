"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.scss";

const NavBar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    toggleBodyOverflow(!isActive);
  };

  const closeMenu = useCallback(() => {
    setIsActive(false);
    toggleBodyOverflow(false);
  }, []);

  const toggleBodyOverflow = (shouldOverflow: boolean) => {
    document.body.classList.toggle("overflow-hidden", shouldOverflow);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && isActive) closeMenu();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive, closeMenu]);

  const menuItems = [
    { label: "home", path: "/" },
    { label: "about me", path: "/AboutMePage" },
    { label: "projects", path: "/Service" },
    { label: "contact", path: "/Contact" },
    { label: "social media", path: "/Social" },
  ];

  return (
    <>
      <section className="wrapper-navbar">
        <nav className="navbar">
          {/* Horizontal Navigation (visible on larger screens) */}
          <div className={`links-navbar-center ${isActive ? "active" : ""}`}>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={pathname === item.path ? "active" : ""}
                >
                  <Link href={item.path} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Menu (visible on smaller screens) */}
          <div className="apply-hamburger" onClick={toggleMenu}>
            <div className={`hamburger ${isActive ? "active" : ""}`}>
              <span className={`bar ${isActive ? "active" : ""}`}></span>
              <span className={`bar ${isActive ? "active" : ""}`}></span>
              <span className={`bar ${isActive ? "active" : ""}`}></span>
            </div>
          </div>
        </nav>
      </section>

      {/* Mobile nav-menu overlay */}
      <div className={`nav-menu ${isActive ? "active" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={pathname === item.path ? "active" : ""}
            >
              <Link href={item.path} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
