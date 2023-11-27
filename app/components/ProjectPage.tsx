"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImEnter } from "react-icons/im";

const ProjectPage = () => {
  return (
    <main
      id="projects"
      className="md:flex md:py-[100px] justify-center px-2 w-full h-full"
    >
      <div className="md:w-[850px]  md:ml-[105px] h-full ">
        <h1 className="font-semibold text-[13px] my-2 text-[#37bd3e] uppercase">
          My Recent Projects
        </h1>
        <h2 className="font-semibold pb-5 text-2xl">
          Each project is Unique piece of development
        </h2>
        <section
          className="md:flex justify-center 
        p-2  items-center "
        >
          <div
            data-aos="fade-right"
            className="md:w-[50%]  flex justify-start h-full"
          >
            <Image
              src="/assets/images/projects/project1.png"
              alt="netflix clone"
              height={450}
              width={400}
              className="rounded-md"
            />
          </div>
          <div data-aos="zoom-in-left" className="md:w-[45%] md:mr-14 ">
            <h3 className="font-[800] md:pt-0 pt-4 text-center">
              Neflix Clone
            </h3>
            <p className="text-center text-sm py-4">
              A Netflix clone website is an online platform that enables
              streaming and grants access to a wide array of entertainment
              content. It offers user authentication through a database and
              features a video player.
            </p>
            <div className="flex justify-center items-center font-semibold gap-3">
              <p>NextJs</p>
              <p>TypeScript</p>
              <p>Prisma</p>
              <p>MongoDB</p>
            </div>
            <div className="flex justify-center my-3 items-center gap-10">
              <Link
                href="https://github.com/mkanas/netflixclone"
                className="cursor-pointer flex text-sm justify-start gap-1 items-center hover:scale-125 transition delay-100"
              >
                Code{" "}
                <Image
                  src="/assets/images/skills/github2.png"
                  alt="github"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://netflixclone-anas.vercel.app"
                className="cursor-pointer text-sm font-medium flex items-center gap-1 justify-start hover:scale-125 transition delay-100"
              >
                Demo <ImEnter size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="md:flex mt-12 justify-center 
        p-2  items-center "
        >
          <div
            data-aos="fade-right"
            className="md:w-[47.8%] border rounded-md flex justify-start h-full"
          >
            <Image
              src="/assets/images/projects/project2.png"
              alt="netflix clone"
              height={450}
              width={395}
              className="rounded-md"
            />
          </div>
          <div data-aos="zoom-in-left" className="md:w-[45%] md:mr-14 ">
            <h3 className="font-[800] md:pt-0 pt-4 text-center">
              Gym Tutorials
            </h3>
            <p className="text-center text-sm py-4">
              A website integrated with open-source APIs from RapidAPI. It
              includes fitness movement tutorials, presented as either GIFs or
              videos, along with search functionality and pagination features.
            </p>
            <div className="flex justify-center items-center font-semibold gap-3">
              <p>NextJs</p>
              <p>JavaScript</p>
              <p>RapidAPI</p>
              <p>Tailwind</p>
            </div>
            <div className="flex justify-center my-3 items-center gap-10">
              <Link
                href="https://github.com/mkanas/Gym_App"
                className="cursor-pointer flex text-sm justify-start gap-1 items-center hover:scale-125 transition delay-100"
              >
                Code{" "}
                <Image
                  src="/assets/images/skills/github2.png"
                  alt="github"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://anasgym.vercel.app/"
                className="cursor-pointer text-sm font-medium flex items-center gap-1 justify-start hover:scale-125 transition delay-100"
              >
                Demo <ImEnter size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="md:flex mt-12 justify-center 
        p-2  items-center "
        >
          <div
            data-aos="fade-right"
            className="md:w-[47.8%] border rounded-md flex justify-start h-full"
          >
            <Image
              src="/assets/images/projects/project3.png"
              alt="netflix clone"
              height={445}
              width={395}
              className="rounded-md"
            />
          </div>
          <div data-aos="zoom-in-left" className="md:w-[45%] md:mr-14 ">
            <h3 className="font-[800] md:pt-0 pt-4 text-center">
              E-Commerce App
            </h3>
            <p className="text-center text-sm py-4">
              An e-commerce platform with Firebase authentication, featuring a
              sleek UI/UX design, the capability to add products to the shopping
              cart, and various other functionalities.
            </p>
            <div className="flex justify-center items-center font-semibold gap-3">
              <p>NextJs</p>
              <p>TypeScript</p>
              <p>Firebase</p>
              <p>Redux Toolkit</p>
            </div>
            <div className="flex justify-center my-3 items-center gap-10">
              <Link
                href="https://github.com/mkanas/halalmart"
                className="cursor-pointer flex text-sm justify-start gap-1 items-center hover:scale-125 transition delay-100"
              >
                Code{" "}
                <Image
                  src="/assets/images/skills/github2.png"
                  alt="github"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://halalmart.vercel.app/"
                className="cursor-pointer text-sm font-medium flex items-center gap-1 justify-start hover:scale-125 transition delay-100"
              >
                Demo <ImEnter size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectPage;
