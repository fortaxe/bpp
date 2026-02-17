import React from "react";
import "./OurServices.css";
import { FaUniversity, FaMoneyBill1Wave, FaCcVisa } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsBookmarksFill } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import { GiGrowth } from "react-icons/gi";
import { BiAddToQueue } from "react-icons/bi";
const OurServices = () => {
  return (
    <div className="ourSerContainer">
      <div className="OsHeader">
        <h1>How we Help you ? </h1>
      </div>
      <div className="OsBox">
        <div className="Os-Row">
          <div>
            <div className="OsItem">
              <GiGrowth style={{ color: "tomato" }} />

              <h3>Offer letter within 24 hours</h3>
            </div>
            <div className="OsItem">
              <FaUniversity style={{ color: "tomato" }} />

              <h3>Admission Information</h3>
            </div>
          </div>

          <div>
          <div className="OsItem">
            <BiAddToQueue style={{ color: "blue" }} />

            <h3> Process Information</h3>
          </div>
          <div className="OsItem">
            <RiMoneyDollarCircleLine style={{ color: "green" }} />
            <h3>Mock Interview Preparation </h3>
          </div>
          </div>
        </div>
        {/* <div className="Os-Row">
         <div>
         <div className="OsItem">
            <SiYourtraveldottv style={{ color: "aqua" }} />

            <h3>Travel Assistance</h3>
          </div>
          <div className="OsItem">
            <FaCcVisa style={{ color: "green" }} />
            <h3>Visa Assistance</h3>
          </div>
         </div>
         <div>
         <div className="OsItem">
            <BsBookmarksFill style={{ color: "blue" }} />
            <h3>Education Loan Assistance</h3>
          </div>
          <div className="OsItem">
            <MdFlightTakeoff style={{ color: "blue" }} />
            <h3>Accomodation and Airport Pick Up</h3>
          </div>
         </div>
        </div> */}
      </div>
      
    </div>
  );
};

export default OurServices;
