import React from "react";
import Section2img from "../assets/section2.png";

const Section2 = () => {
  return (
    <>
      <div className=" p-[20px] sm:p-[40px] lg:px-[60px] mt-[50px]">
        <div className="sm:flex sm:justify-between lg:mx-auto xl:w-[1100px]">
          <div className="hidden sm:block w-[40%] lg:w-[500px]">
            <img className="" src={Section2img} alt="" />
          </div>
          <div className="sm:w-[400px] lg:w-[600px] xl:w-[800px] h-fit my-auto">
            <p className="text-[35px]  md:text-[35px] font-[600] text-center sm:text-start text-[#263238]">
              The unseen of spending three years at Pixelgrade
            </p>
            <p className="text-[15px] text-[#263238] md:text-[20px] text-center sm:text-start xl:py-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio
            </p>
            <div className="w-fit mx-auto sm:mx-0 mt-[20px] ">
              <button className="border border-[#4caf4f] bg-[#4caf4f] xl:text-[20px] py-[10px] xl:px-[25px] px-[20px] rounded-[8px] font-[500] text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
