import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ArmanActor from "../../images/bpp/arman.mp4";
import RashiActor from "../../images/bpp/rashi_actor.mp4";

import "./styles.css";

import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCaretLeft, FaCaretRight } from "react-icons/fa";

const testimonials = [
  // {
  //     src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670620/sanwariya/VID-20241023-WA0002_wz9ak5.mp4"
  // },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670628/sanwariya/VID-20241023-WA0005_f9ctqf.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670620/sanwariya/VID-20241023-WA0002_wz9ak5.mp4",
  },

  {
    src: RashiActor,
  },

  {
    src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1743507548/website-videos/Kajjal_Agarwal_-_video-4_csnsrr.mp4",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1743508112/website-videos/Untitled_video_-_Made_with_Clipchamp_2_zwudk8.mp4",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1743507554/website-videos/Tamannaah_bhatia_-_video-6_udozon.mp4",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1743507543/website-videos/bpraak_-_video_-7_llluow.mp4",
  },

  {
    src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091262/website-videos/urvi_-_Ravensbourne_ubh9bv.mp4",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091262/website-videos/pankhuri_-_UOR_jcep6p.mp4",
  },
  {
    src: ArmanActor,
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712648233/sanwariya/VID-20240409-WA0002_h8ms2s.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712648233/sanwariya/VID-20240409-WA0002_h8ms2s.mp4",
  },
];

// Import Swiper modules (e.g., for navigation, pagination, autoplay)

const MySwiper = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="testimonialContainer bgColor">
      <div className="heading">
        <h1> Top social media influencer's and celebrities</h1>
      </div>

      <div
        className="testimonialForCelBox"
        ref={carouselRef}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {testimonials?.map((item) => (
          <div className="textItem textItemRound">
            <video src={item?.src} controls></video>
          </div>
        ))}
      </div>

      <div className="link-Box">
        <div className="scroll-box-item">
          <button onClick={scrollLeft}>
            {" "}
            <FaCaretLeft />{" "}
          </button>
          <button onClick={scrollRight}>
            {" "}
            <FaCaretRight />{" "}
          </button>
        </div>

        {/* <Link to='/events' className="queryBtn">More <FaArrowRight /></Link> */}
      </div>
      <br />

      {/* <div className='link-Box'>

                <Link to='/events' className="queryBtn">More <FaArrowRight /></Link>
            </div> */}
    </div>
  );
};

export default MySwiper;
