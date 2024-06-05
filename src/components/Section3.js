import React from "react";
import BusinessStats from "./BussinessStats";

import Bussiness1 from "../assets/business1.png";
import Bussiness2 from "../assets/business2.png";
import Bussiness3 from "../assets/business3.png";
import Bussiness4 from "../assets/business4.png";

const Section3 = () => {
  return (
    <>
      <div className="bg-[#f5f7fa]">
        <div className=" py-[20px] lg:flex justify-between lg:w-[950px] lg:mx-auto  xl:w-[1100px]">
          <div className="w-[80%]  lg:w-[400px] mx-auto xl:mx-0 ">
            <p className="text-[35px]  md:text-[35px] font-[600] text-center sm:text-start text-[#263238]">
              Helping a Local{" "}
              <span className="text-[#4caf4f]">bussiness reivent itself</span>
            </p>
            <p className="text-[15px] text-[#263238] md:text-[20px] text-center sm:text-start xl:py-[15px]">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="flex flex-wrap w-[80%] lg:w-[500px] xl:w-[450px] lg:mx-0 mx-auto xl:mx-0  gap-[10px]">
            <BusinessStats src={Bussiness1} members="2,245,341" />
            <BusinessStats src={Bussiness2} members="2,245,341" />
            <BusinessStats src={Bussiness3} members="2,245,341" />
            <BusinessStats src={Bussiness4} members="2,245,341" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
