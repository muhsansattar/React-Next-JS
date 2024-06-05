import React from "react";

const ClientImage = ({ src, alt }) => {
  return (
    <div className="w-[145px] mt-[20px] md:mt-[25px]">
      <img className="mx-auto" src={src} alt={alt} />
    </div>
  );
};

export default ClientImage;
