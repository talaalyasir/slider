import React, { useState } from "react";
import Poly from "../assets/rk.jpg";
import Logo from "../assets/logo-ag-01.svg";
import { BsChatText, BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function Home() {
  const [nav, setNav] = useState(true);
  const handlNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className="head bg-[#223774]  py-24"
      style={{ backgroundImage: `url(${Poly})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} className="lg:w-24 w-10 " />
        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-xl py-5">
          Seven Agency
        </h1>
        <p className="md:text-3xl sm:text-2xl text-sm">
          Smart digital solutions
        </p>
      </div>
      <div className="bg-[#223774]  mt-[100px] bg-transparent head pt-16 ">
        <div className="items-center justify-around  flex ">
          <div>
            <img src={Logo} className="w-12 ml-2" />
          </div>
          <div className="md:block hidden   bg-transparent">
            <ul className="flex">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Pricing</li>
              <li>How we work</li>
            </ul>
          </div>
          <div className="flex">
            <div className="px-3">
              <BsChatText size={20} className="icon " />
            </div>
            <a className="hover:text-[#03d87d] hover:underline duration-300">
              Contact
            </a>
          </div>
          <button onClick={handlNav} className="md:hidden block">
            {!nav ? (
              <AiOutlineClose size={30} className="icon" />
            ) : (
              <BsList size={30} className="icon" />
            )}
          </button>
        </div>
        {!nav ? (
          <div className="bg-black w-full h-[100%] top-0 left-0 fixed ease-in-out duration-300 flex flex-col items-center justify-center py-5">
            <button onClick={handlNav} className="md:ml-[80%] sm:ml-[70%] ml-[50%] ">
              {!nav ? (
                <AiOutlineClose
                  size={30}
                  className="icon hover:rotate-180 hover:bg-white rounded-full duration-500"
                />
              ) : (
                <BsList size={30} className="icon" />
              )}
            </button>
            <div className="py-5">
              <img src={Logo} className="w-12" />
            </div>
            <div className="flex flex-col items-center  py-2">
              <ul className="flex flex-col items-center">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Pricing</li>
                <li>How we work</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}