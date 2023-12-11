import React from "react";
import Image from "next/image";
import RotatingText from "./text/RotatingText";

const About = () => {
  return (
    <main
      id="about"
      className="flex h-full w-full relative py-[120px] md:py-[100px]  justify-center"
    >
      <div className="md:flex justify-center items-center w-full md:gap-10 pr-8 md:ml-12 pl-4 md:p-8 md:w-[850px]">
        <section className="md:w-[55%] w-full relative">
          <Image
            className="rounded-md"
            src="/assets/images/services/about.jpg"
            alt=""
            width={500}
            height={500}
          />
        </section>
        <section className="md:w-1/2 md:pt-0  pt-7">
          <h2 className="font-[800] uppercase text-[#37bd3e] text-[13px]">
            About Me
          </h2>
          <h1 className="font-bold mt-1 text-[18px] leading-6">
            A dedicated Front-End Developer based in Bandung, Indonesia
          </h1>
          <p className="mt-1 text-[13px] leading-[19px] text-justify">
            As a junior Front-End Developer, I possess an impressive arsenal of
            skills including HTML, CSS, JavaScript, TypeScript, React, Tailwind
            and Etc. I excel in designing and maintaining responsive websites
            that offer a smooth user experience. My expertise lies in crafting
            dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques. I
            am also a team player who thrives in collaboration with
            cross-functional teams to produce outstanding web applications.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
