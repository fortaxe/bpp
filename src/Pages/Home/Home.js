import React from "react";
import "./home.css";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import EventUI from "../../components/EventUI/EventUI.js";
import CourseUI from "../../components/CourseUI/CourseUI.js";
import CountryUI from "../../components/CountryUI/CountryUI.js";
import UnivercityUI from "../../components/UnivercityUI/UnivercityUI.js";
import CounterUI from "../../components/CounterUI/CounterUI.js";
import OurServices from "../../components/OurServices/OurServices.js";
import { Link } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
import RashiActor from "../../images/bpp/rashi_actor.mp4";
import ArmanActor from "../../images/bpp/arman.mp4";
import TopSectionUi from '../../components/TopSectionUi/TopSectionUi.js'
import TestimonialsUI from '../../components/TestimonialsUI/TestimonialsUI.js'
import TestimonialsForStudentsUi from '../../components/TestimonialsUI/TestimonialsForStudentsUi.js'

const Home = ({ setUnderLine }) => {
  setUnderLine("home");
  return (
    <>

      <TopSectionUi />
      {/* <AwesomeSlider>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={"https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679696/sanwariya/WhatsApp_Video_2024-10-23_at_14.10.01_hfqanx.mp4"}

            allowfullscreen
            controls
          ></video>
        </div>

        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={"https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679735/sanwariya/WhatsApp_Video_2024-10-23_at_15.26.28_hxj6cq.mp4"}

            allowfullscreen
            controls
          ></video>
        </div>


        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={"https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679744/sanwariya/WhatsApp_Video_2024-10-23_at_15.27.15_h7ef2c.mp4"}

            allowfullscreen
            controls
          ></video>
        </div>
      <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={"https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670657/sanwariya/VID-20241023-WA0004_a1kbx0.mp4"}

            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={"https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670625/sanwariya/VID-20241023-WA0003_dzcxwa.mp4"}

            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={"https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670620/sanwariya/VID-20241023-WA0002_wz9ak5.mp4"}
            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={"https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670628/sanwariya/VID-20241023-WA0005_f9ctqf.mp4"}

            allowfullscreen
            controls
          ></video>
        </div>

        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src={ArmanActor}

            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem">

          <video
            width="100%"
            height="100%"
            src={RashiActor}

            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src="https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712648233/sanwariya/VID-20240409-WA0002_h8ms2s.mp4"

            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src="https://res.cloudinary.com/dwevw3pnz/video/upload/v1698228892/sanwariyaVideos/TAMANNAAH_BHATIA_1_zgc06a.mp4"

            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src="https://res.cloudinary.com/dwevw3pnz/video/upload/v1698230551/sanwariyaVideos/VIDHI_MISTRY_2_rqqsqg.mp4"

            allowfullscreen
            controls
          ></video>
        </div>

        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src="https://res.cloudinary.com/dwevw3pnz/video/upload/v1698297675/sanwariyaVideos/kerala_event_-_UOR_VIDEO_m94umw.mp4"

            allowfullscreen
            controls
          ></video>
        </div>

        <div className="slideItem">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/rYXkl1buzCI"
            title="Awareness program on admission and employment opportunities | BPP University | Kajal Aggarwal"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="slideItem">
          <video
            width="100%"
            height="100%"
            src="https://res.cloudinary.com/dwevw3pnz/video/upload/v1695446911/sanwariyaVideos/VID-20230923-WA0001_hxcd2e.mp4"

            allowfullscreen
            controls
          ></video>
        </div>
        <div className="slideItem url7">.</div>

        <div className="slideItem">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PerA58WVAEE"
            title="Awareness program on admission and employment opportunities | BPP University | Kajal Aggarwal  | TV9"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="slideItem url3">.</div>
        <div className="slideItem url5">.</div>
        <div className="slideItem url4">.</div>
        <div className="slideItem url6">.</div>
      </AwesomeSlider> */}

      {/* secsion 1 */}

      {/* <CourseUI/> */}
      <UnivercityUI />
      {/* <CounterUI /> */}

      {/* <CountryUI /> */}
      {/* <div className="eventUi">
        <EventUI />
      </div> */}




      {/* secsion 2.1 */}

      {/* secsion 3 */}


      {/* <OurServices /> */}

      {/* secsion 4 People says */}

      {/* <div className="reviewContainer">
        <div className="reviewHeader">
          <h2>Testimonials</h2>
         
        </div>

        <AwesomeSlider>
          <div className="reviewItem ">
            <img
              className="profileImg"
              src={
                "https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/28-1024.png"
              }
              alt="img"
              width={100}
              />
            <h3>Roopa Sarkar</h3>
       
            <p>
              They provided great service and
              kept us on track with ongoing initiatives and opportunities
              through education. The staff carries a great experience and
              provide an end-end knowledge to the students about every course
              And they are supporting students for higher studies in the UK.
              This is the best consultancy in Hyderabad that gives good to
              aspiring students for their bright future.
            </p>
            <img
              src={require("../../images/google-icon.png")}
              alt="img"
              width={30}
              />
          </div>
          <div className="reviewItem ">
            <img
              className="profileImg"
              src={
                "https://metrica.nl/wp-content/uploads/2018/08/flat-cartoon-happy-man-vector-icon-fat-man-icon-illustration-hipster-character-face-face-people-icons-72080918.jpg"
              }
              alt="img"
              width={100}
            />
            <h3>Divesh Sanghi</h3>
            
            <p>
            Sanwariya educational consultant is one of the best path if an individual is trying to fly for UK. The staff carries a great experience and provide a end to end knowledge to the student about every course.Its the best place in Hyderabad to reach out if we are planning to fly UK.
            </p>
            <img
              src={require("../../images/google-icon.png")}
              alt="img"
              width={30}
              />
          </div>
        </AwesomeSlider>

        <div className="allreviewBox">
        <a className="checkOutReviewBtn" target="_blank" href="https://www.google.com/search?q=sanwariya+educational+consultants+hyderabad&rlz=1C5CHFA_enIN982IN982&sxsrf=APwXEde1TvScPKaZAnk2JSMmpEdZH2pP2A%3A1688022077474&ei=PSydZKanHOPL2roP6NqG8A0&ved=0ahUKEwjmubOi9Of_AhXjpVYBHWitAd4Q4dUDCA8&uact=5&oq=sanwariya+educational+consultants+hyderabad&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjIHCCEQoAEQCjoKCAAQigUQsAMQQzoOCC4QgAQQxwEQrwEQsAM6CAgAEIAEELADOgsIABCKBRCGAxCwAzoFCAAQgAQ6BggAEBYQHjoICAAQigUQhgM6BQghEKABSgQIQRgBUOGvAVi0vAFgvr0BaAFwA#lrd=0x3bcb99d02d1ce213:0xd3acd81035f259a3,1,,,,"> Check out our Google Reviews</a>
        </div>
      </div> */}


      <br />
      <br />
      {/* <TestimonialsUI /> */}


      {/* secsion 2 */}

      <div className="contactMain">
        <div className="contactContainer">
          <div>
            <h1>Start Your Journey With our Expert Study Abroad Counsellors</h1>
            <Link to={"/contact"}>
              <button className="queryBtn">Send your Query</button>
            </Link>
          </div>
        </div>
      </div>

      <TestimonialsForStudentsUi />


    </>
  );
};

export default Home;
