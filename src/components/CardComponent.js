import React from "react";

const CardComponent = ({ backgroundImage, title }) => {
  return (
    <div className="w-[290px] sm:w-[320px] lg:w-[360px] mx-auto rounded-[12px] mt-[15px]">
      <div
        className="bg-contain bg-no-repeat bg-center h-full flex justify-center items-end"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-white rounded-[10px] shadow-lg w-[280px] mt-[250px]">
          <p className="text-[18px] font-[600] text-center">{title}</p>
          <div className="pt-[20px]">
            <p className="text-center text-[18px] font-[600] text-[#4caf4f]">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
