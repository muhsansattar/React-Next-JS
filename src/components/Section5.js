import React from "react";
import BlackAirpod from "../assets/blackAirpod.png";

import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";
import Client6 from "../assets/client6.png";

const Section5 = () => {
  return (
    <>
      <div className="bg-[#f5f7fa] py-[20px]">
        <div className="mt-[20px] md:flex md:w-[80%] mx-auto gap-3 lg:gap-[20px] xl:gap-[50px] xl:w-[1100px]">
          <div>
            <img className="mx-auto" src={BlackAirpod} alt="" />
          </div>
          <div className="w-[85%] mx-auto sm:text-[18px]">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <p className="py-[10px]">
              <span className="text-[#4caf4f]">Tim Smith</span>
            </p>
            <p className="text-[15px] text-gray-600">
              British Dragon Boat Racing Association
            </p>
            <div>
              <div className="flex flex-wrap w-[80%] xl:w-[700px] mt-[30px] gap-[30px]">
                <div>
                  <img src={Client1} alt="" />
                </div>
                <div>
                  <img src={Client2} alt="" />
                </div>
                <div>
                  <img src={Client3} alt="" />
                </div>
                <div>
                  <img src={Client4} alt="" />
                </div>
                <div>
                  <img src={Client5} alt="" />
                </div>
                <div>
                  <img src={Client6} alt="" />
                </div>
                <div>
                  <div className="font-[600] text-[15px] text-[#4caf4f]">
                    Meet all customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
