"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub, BsInstagram, BsTelephone } from "react-icons/bs";

import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-purple-700 w-full h-full pt-12">
      <div className="md:flex justify-between items-center md:gap-8">
        <div className="flex md:justify-center justify-start pl-2 items-center">
          <div className=" w-[80%]">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem] ">
              Do you want to make beautiful products?
            </h2>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              <button className="bg-green-400 text-white font-[500] flex items-center gap-2 hover:bg-purple-400 ease-in duration-300 py-2 px-4 rounded-[8px]">
                <MdEmail /> Hire me
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full ">
          <div className="flex items-center text-white md:justify-center justify-start  mt-2 gap-4 flex-wrap ">
            <div className="pl-2 md:sm:pl-[68px]">
              <p className="text-gray-300 md:leading-7 flex leading-5 justify-start gap-2 md:gap-4 items-center mt-4 sm:mt-0">
                <BsTelephone /> +62 82214561307
              </p>
              <p className="text-gray-300 md:leading-7 flex leading-5  justify-start gap-2 md:gap-4 items-center mt-4 sm:mt-0">
                <MdEmail /> muhammad.khairul.anas97@gmail.com
              </p>
            </div>
          </div>

          <div className="flex pl-2  items-center w-full md:justify-center justify-start gap-4 flex-wrap  my-6 ">
            <span className="text-gray-300 font-[600] text-white">
              Follow Me:
            </span>
            <span className="w-[35px] h-[35px] bg-[#d6dbe9] p-4 hover:bg-[#ecddecbb]  flex items-center justify-center  rounded-[50px] cursor-pointer text-center">
              <a
                href="https://github.com/mkanas"
                className="text-gray-300  font-[500] text-[18px]"
              >
                <BsGithub />
              </a>
            </span>
            <span className="w-[35px] h-[35px] bg-[#d6dbe9] flex items-center justify-center p-4 hover:bg-[#ecddecbb]  rounded-[50px] cursor-pointer text-center">
              <a
                href="https://www.linkedin.com/in/muhammad-khairul-anas-59a226215/"
                className="text-gray-300 font-[500]  text-[18px]"
              >
                <BsLinkedin />
              </a>
            </span>
            <span className="w-[35px] h-[35px] bg-[#d6dbe9] p-4 hover:bg-[#ecddecbb] flex items-center justify-center rounded-[50px] cursor-pointer text-center">
              <a
                href="https://www.instagram.com/"
                className="text-gray-300 font-[500]  text-[18px]"
              >
                <BsInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="container  py-5 md:mt-14">
        <div className="flex items-center justify-center sm:justify-center">
          <div className=" block ">
            <div className="flex items-center gap-[10px] ">
              <div>
                <p className="text-white py-2 text-center  text-[14px]">
                  Copyright {year} develop by Anas - All right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
