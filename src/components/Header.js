import React from "react";
import { useState } from "react";
import Logo from "../assets/blackLogo.png";
import Hamburger from "../assets/menu.png";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-between bg-[#f5f7fa]">
        <div className="p-[20px] sm:p-[40px] lg:px-[60px]">
          <img src={Logo} alt="" />
        </div>
        <div className="hidden xl:block p-[20px] sm:p-[40px] lg:px-[60px]">
          <ul className="lg:flex gap-[60px] font-[500]">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div
          className="xl:hidden p-[20px] sm:p-[40px] lg:px-[60px]"
          onClick={() => setShow(!show)}
        >
          <img src={Hamburger} alt="" />
        </div>
        <div className="hidden xl:flex p-[20px] sm:p-[30px] lg:px-[60px] xl:gap-[10px]">
          <div>
            <button className="text-[#4caf4f] p-[10px] rounded-[12px] font-[500]">
              Login
            </button>
          </div>
          <div>
            <button className="border border-[#4caf4f] bg-[#4caf4f] p-[10px] rounded-[12px] font-[500] text-white">
              Signup
            </button>
          </div>
        </div>
      </div>
      {show ? (
        <div className="bg-[#f5f7fa] xl:hidden pt-[10px] pl-[50px] leading-[30px] sm:leading-[35px]  lg:px-[60px]">
          <ul className="font-[500]">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Header;
