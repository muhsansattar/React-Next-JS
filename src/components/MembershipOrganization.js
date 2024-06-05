import React from "react";

const MembershipOrganization = ({ src, title, title2, description }) => {
  return (
    <div className="w-[290px] sm:w-[320px] lg:w-[360px] mx-auto shadow-lg py-[10px] rounded-md mt-[30px]">
      <div>
        <img className="mx-auto xl:w-[80px]" src={src} alt="" />
      </div>
      <div>
        <p className="text-center text-[25px] md:text-[27px] font-[600] text-[#263238]">
          {title}
          <br />
          {title2}
        </p>
      </div>
      <div>
        <p className="mt-[10px] text-[15px] w-[80%] mx-auto text-[#263238] md:text-[17px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MembershipOrganization;
