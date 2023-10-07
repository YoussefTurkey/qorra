"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [ toggleNavbar, setToggleNavbar ] = useState(false);

  return (
    <header>
      <nav className="navbar lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur">
        <div className="max-w-screen-xl lg:flex lg:items-center lg:justify-between mx-auto p-4">
          <div className="flex flex-wrap items-center justify-between">
            <Link href={"/"} id="top_screen">
                <Image
                src={"/assets/images/qorra.png"}
                width={100}
                height={80}
                alt="مبادرة قراء"
                />
            </Link>

            <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={() => setToggleNavbar(!toggleNavbar)}
            >
                <span className="sr-only">Open main menu</span>
                <svg
                className="w-7 h-7 text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
                </svg>
            </button>
          </div>

          <div
              className="hidden w-full lg:block lg:w-auto md:hidden"
            >
              <ul className="links flex items-center">
                <li>
                  <Link href={"/"} aria-current="page">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/we"} className="">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/volunteers"} className="">
                    المتطوعون
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/contact"} className="">
                    راسلنا
                  </Link>
                </li>
              </ul>
            </div>

          {toggleNavbar && (
            <div
              className="lg:hidden md:block md:w-auto"
              id="navbarScroll"
            >
              <ul className="links flex flex-col text-center">
                <li>
                  <Link href={"/"} className="active" aria-current="page">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/we"} className="">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/volunteers"} className="">
                    المتطوعون
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/contact"} className="">
                    راسلنا
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
