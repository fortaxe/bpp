import React from "react";
import "./AboutUs.css";
import PageHeader from "../../components/pageHeader/pageHeader.js";
import OurServices from "../../components/OurServices/OurServices";
import { FaCheckCircle } from "react-icons/fa";
import CounterUI from "../../components/CounterUI/CounterUI.js";
const AboutUs = ({ setUnderLine }) => {
  setUnderLine("about");
  return (
    <div>
      {/* <PageHeader heading={"About Us"} path={"About us"} /> */}
      <div className="aboutContainer">
        <div className="imgbox">
          <img src={require("../../images/about2.jpg")} alt="" />

        </div>

        <div className="textBox">
          <h1>WHY SANWARIYA ?</h1>
          <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              Sanwariya Education Consultancy is a leading education consultancy based in Hyderabad.
            </p>
          </div>
          <br /> <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              We provide expert guidance and support to students seeking higher education opportunities in India and abroad.
            </p>
          </div>

          <br /> <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              Our team of experienced professionals is committed to helping students achieve their academic goals by providing them counselling, mock tests and application assistance.
            </p>
          </div>



          {/* <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>Exclusive for BPP university for Andhra Pradesh & Telangana.</p>

          </div> */}
        </div>
      </div>

      <div className="aboutContainer">


        <div className="textBox">
          {/* <h1>WHY SANWARIYAN ?</h1> */}
          <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              At Sanwariya, we believe in empowering students to make informed decisions about their decisions about their education and future careers.
            </p>
          </div>
          <br /> <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              Exclusive for BPP university for Andhra Pradesh & Telangana.
            </p>
          </div>

          <br /> <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              World No 1 for continuous one year for Roehampton university.
            </p>
          </div>
        </div>

        <div className="imgbox">
          <img src={require("../../images/about4.jpg")} alt="" />

        </div>
      </div>

      <div className="aboutContainer">

        <div className="imgbox">
          <img src={require("../../images/about3.jpg")} alt="" />
        </div>
        <div className="textBox">
          {/* <h1>WHY SANWARIYAN ?</h1> */}

          <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              we take care from Application, documents to interview and CAS filing.
            </p>
          </div>
          <br /> <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              No change of policy.

            </p>
          </div>

          <br /> <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              We do third party verification for paid students.
            </p>
          </div> <br /> <br />
          <div className="pTag">
            <p>
              <FaCheckCircle />
            </p>
            <p>
              Experience of over 10000+ students.              </p>
          </div>
        </div>


      </div>
      <br/>
      <CounterUI />

      <OurServices />
    </div>
  );
};

export default AboutUs;
