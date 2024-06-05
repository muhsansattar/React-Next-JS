import React from "react";
import ClientImage from "./ClientImage";
import MembershipOrganization from "./MembershipOrganization";
import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
import Client4 from "../assets/client4.png";
import Client5 from "../assets/client5.png";
import Client6 from "../assets/client6.png";
import Client7 from "../assets/client7.png";

import Community1 from "../assets/community1.png";
import Community2 from "../assets/community2.png";
import Community3 from "../assets/community3.png";

const Section1 = () => {
  return (
    <>
      <div className="mt-[20px]">
        <div>
          <div>
            <p className="text-center text-[25px] md:text-[27px] xl:text-[30px] font-[600] text-[#263238]">
              Our Clients
            </p>
          </div>
          <div>
            <p className="text-[15px] w-[80%] mx-auto text-[#263238] md:text-[20px] text-center">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div className="w-[290px] sm:w-[80%] mx-auto flex flex-wrap xl:w-[1100px]">
            <ClientImage src={Client1} alt="Client 1" />
            <ClientImage src={Client2} alt="Client 2" />
            <ClientImage src={Client3} alt="Client 3" />
            <ClientImage src={Client4} alt="Client 4" />
            <ClientImage src={Client5} alt="Client 5" />
            <ClientImage src={Client6} alt="Client 6" />
            <ClientImage src={Client7} alt="Client 7" />
          </div>
        </div>

        {/**********************************************************/}
        {/*****************SECOND PART******************************/}
        {/**********************************************************/}

        <div className="mt-[20px] xl:w-[1200px] mx-auto">
          <div className="w-[80%] mx-auto">
            <p className="text-center text-[25px] md:text-[27px] xl:text-[30px] font-[600] text-[#263238]">
              Manage your entire community in a single system
            </p>
          </div>
          <div>
            <p className="text-[15px] w-[80%] mx-auto text-[#263238] md:text-[20px] text-center">
              Who is Nextcent suitable for?
            </p>
          </div>
          <div className="flex flex-wrap xl:mt-[40px] mt-[30px]">
            <MembershipOrganization
              src={Community1}
              title="Membership"
              title2="Organisations"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
            <MembershipOrganization
              src={Community2}
              title="National"
              title2="Associations"
              description="Our membership management
              software provides full automation of
              membership renewals and
              payments"
            />
            <MembershipOrganization
              src={Community3}
              title="Clubs And"
              title2="Groups"
              description="Our membership management software provides full automation of membership renewals and payments"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
