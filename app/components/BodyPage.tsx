"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BodyPage = () => {
  const icons = [
    {
      id: 1,
      href: "/assets/images/skills/html2.png",
    },
    {
      id: 2,
      href: "/assets/images/skills/css.png",
    },
    {
      id: 3,
      href: "/assets/images/skills/typescript.png",
    },
    {
      id: 4,
      href: "/assets/images/skills/javascript.png",
    },
    {
      id: 5,
      href: "/assets/images/skills/tailwind.png",
    },
    {
      id: 6,
      href: "/assets/images/skills/react.png",
    },
    {
      id: 7,
      href: "/assets/images/skills/git.png",
    },
    {
      id: 8,
      href: "/assets/images/skills/prisma.png",
    },
    {
      id: 9,
      href: "/assets/images/skills/nextjs.png",
    },
  ];
  return (
    <main id="bodypage">
      <div className=" min-h-full flex  md:flex md:pt-20 pt-14 justify-center items-center relative w-full">
        <div className="md:flex md:w-[850px] md:px-0 px-4 w-full justify-center">
          <section className="md:w-[50%]  flex  justify-center items-center">
            <div className="">
              <h1 className="font-[900] leading-[45px] text-[36px]">
                Front-End Web Developer 👋
              </h1>
              <div>
                <p className="mt-4">
                  Hi, i am Muhammad Khairul Anas. A passionate Front-End
                  Developer based in Aceh, Indonesia. 📍
                </p>

                <div className="flex gap-3 mt-4 ">
                  <Link
                    href="https://github.com/mkanas"
                    className="cursor-pointer hover:scale-125 transition delay-100"
                  >
                    <Image
                      src="/assets/images/skills/github2.png"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link
                    href="https://github.com/mkanas"
                    className="cursor-pointer hover:scale-125 transition delay-100"
                  >
                    <Image
                      src="/assets/images/skills/linkedin.png"
                      alt="linkedin"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="md:w-[330px]  w-full">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="100%"
              id="blobSvg"
              style={{ opacity: 1 }}
              filter="blur(0px)"
              transform="rotate(0)"
            >
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                clipPath="url(#shape)"
                href="/assets/images/person/hero.png"
                preserveAspectRatio="none"
              ></image>{" "}
              <defs>
                {" "}
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(238, 205, 163)" }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(242, 242, 242)" }}
                  ></stop>
                </linearGradient>
              </defs>{" "}
              <clipPath id="shape">
                <path id="blob" fill="url(#gradient)">
                  {" "}
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
                  ></animate>{" "}
                </path>
              </clipPath>
            </svg>
          </section>
        </div>
      </div>
      <section className="md:flex justify-start items-center md:px-0 px-4 py-4 md:ml-[280px] mt-9  ">
        <h2 className="pr-[40px] font-[800]">Tech Stack | </h2>
        <div className="mt-4 grid grid-cols-5 gap-6 md:gap-10">
          {icons.map((item) => (
            <ul key={item.id} className="p-1    ">
              <li key={item.id}>
                <Image
                  priority={false}
                  src={item.href}
                  alt=""
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BodyPage;
