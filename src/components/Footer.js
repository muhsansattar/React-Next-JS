import React from "react";

import WhiteLogo from "../assets/whiteLogo.png";
import Instagram from "../assets/insta.png";
import Ball from "../assets/ball.png";
import Youtube from "../assets/utube.png";
import Twitter from "../assets/twiter.png";
import Vector from "../assets/Vector.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#263238] text-white xl:pb-[60px] pb-[50px]">
        <div className="w-[80%] md:[85%] xl:w-[1100px] mx-auto md:flex md:flex-wrap">
          <div className="pt-[35px] xl:pt-[60px] md:w-[50%] xl:w-[320px]">
            <div className=" sm:w-[250px]">
              <div>
                <img src={WhiteLogo} alt="" />
              </div>
              <div className="py-[20px]">
                <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
              </div>
              <div className="flex gap-[20px]">
                <div>
                  <img src={Instagram} alt="" />
                </div>

                <div>
                  <div className="p-[8px] rounded-full bg-[#313f47]">
                    <img src={Ball} alt="" />
                  </div>
                </div>
                <div>
                  <div className="p-[8px] rounded-full bg-[#313f47]">
                    <img src={Twitter} alt="" />
                  </div>
                </div>
                <div>
                  <div className="p-[8px] rounded-full bg-[#313f47]">
                    <img src={Youtube} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[35px] xl:pt-[60px] md:w-[50%] lg:w-[25%] xl:w-[275px]">
            <div>
              <p className="text-[26px] font-[600]">Company</p>
              <ul className="leading-[30px]">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>
          <div className="pt-[35px] xl:pt-[60px] md:w-[50%] lg:w-[25%] xl:w-[275px]">
            <div>
              <p className="text-[26px] font-[600]">Support</p>
              <ul className="leading-[30px]">
                <li>Help Center</li>
                <li>Terms of service</li>
                <li>Legal Us</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="pt-[35px] xl:pt-[60px] md:w-[50%] xl:w-[200px]">
            <div>
              <p className="text-[26px] font-[600] pb-[20px]">
                Stay up to date
              </p>
              <div className="flex bg-[#313f47] w-[270px] rounded-lg">
                <input
                  className="border-none bg-[#313f47] rounded-lg p-[6px]"
                  type="text"
                  placeholder="Your Email address"
                />
                <span className="">
                  <img className="mt-[10px]" src={Vector} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
