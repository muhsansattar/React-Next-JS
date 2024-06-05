import React from "react";

const BusinessStats = ({ src, members }) => {
  return (
    <div className="flex w-fit mx-auto mt-[30px]">
      <div>
        <img src={src} alt="" />
      </div>
      <div>
        <p className="text-[24px] font-[500]">{members}</p>
        <p>Members</p>
      </div>
    </div>
  );
};

export default BusinessStats;
