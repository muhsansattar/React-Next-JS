import React from "react";
import CardComponent from "./CardComponent";

import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";

const Section6 = () => {
  return (
    <>
      <div>
        <div className="mt-[30px] xl:w-[1200px] mx-auto">
          <div className="w-[80%] mx-auto">
            <p className="text-center text-[25px] md:text-[27px] xl:text-[35px] font-[600] text-[#263238]">
              Caring is the new marketing
            </p>
          </div>
          <div>
            <p className="text-[15px] w-[80%] lg:w-[900px] mx-auto text-[#263238] md:text-[18px] text-center">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who s joining the
              community, read about how our community are increasing their
              membership income and lot s more.
            </p>
          </div>
        </div>
        <div className="xl:w-[1200px] mx-auto">
          <div className="flex flex-wrap xl:mt-[40px] mt-[30px]">
            <CardComponent
              backgroundImage={Card1}
              title="Creating Streamlined Safeguarding Processes with OneRen"
            />
            <CardComponent
              backgroundImage={Card2}
              title="What are your safeguarding 
responsibilities and how can 
you manage them?"
            />
            <CardComponent
              backgroundImage={Card3}
              title="Revamping the Membership 
Model with Triathlon 
Australia Ghulam Mohiudin"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
