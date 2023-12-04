"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { RxCross2 } from "react-icons/rx";

import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const navbarRef = useRef<HTMLElement | null>(null);
  const [navbar, setNavbar] = useState(false);

  const navbarRefFunc = () => {
    window.addEventListener("scroll", () => {
      if (navbarRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navbarRef.current.classList.add(styles.sticky_navbar);
        } else {
          navbarRef.current.classList.remove(styles.sticky_navbar);
        }
      }
    });
  };

  useEffect(() => {
    navbarRefFunc();

    return () => {
      window.removeEventListener("scroll", navbarRefFunc);
    };
  }, []);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      href: "bodypage",
    },
    {
      id: 1,
      name: "About",
      href: "about",
    },
    {
      id: 1,
      name: "Projects",
      href: "projects",
    },
    {
      id: 1,
      name: "Contact",
      href: "contact",
    },
  ];

  return (
    <nav
      ref={navbarRef}
      className="flex p-7 items-center font-[500] justify-between"
    >
      <div>
        <h1>mkanas.dev</h1>
      </div>
      <div className="md:flex gap-8  hidden cursor-pointer">
        {navLinks.map((item, index) => (
          <div key={index}>
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className=" md:hidden">
        <button className="p-2 w-[35px] " onClick={() => setNavbar(!navbar)}>
          {navbar ? <RxCross2 size={20} /> : <HiMenuAlt1 size={20} />}
        </button>
      </div>

      <div
        className={`right-0 bg-white  text-sm h-screen z-20 p-3 w-[35%] absolute transition-all ease-in duration-300 font-font-family ${
          navbar
            ? "top-[55px] opacity-100 "
            : "top-[-1490px] md:opacity-100 opacity-0"
        } `}
      >
        <div className="mt-[190px] text-center  leading-8">
          {navLinks.map((item, index) => (
            <div key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
