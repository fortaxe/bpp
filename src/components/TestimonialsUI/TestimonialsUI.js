import React, { useRef } from 'react';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ArmanActor from "../../images/bpp/arman.mp4";
import RashiActor from "../../images/bpp/rashi_actor.mp4";

import './styles.css';

import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';


const testimonials = [

    // {
    //     src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670628/sanwariya/VID-20241023-WA0005_f9ctqf.mp4"
    // },
    {
        src: ArmanActor
    },
    {
        src: RashiActor
    },
    {
        src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091290/website-videos/university_delegates_-_UOR_iasfts.mp4"
    },

]



// Import Swiper modules (e.g., for navigation, pagination, autoplay)

const MySwiper = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='testimonialContainer'>
            {/* <h2></h2> */}
            <br />
            <div>
                <div className="UniHeader">
                    <h1>Testimonials </h1>
                </div>
                <div className="scrollLine">
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>


            <div className="testimonialForCelBox"
                ref={carouselRef}
                style={{
                    scrollBehavior: 'smooth',
                }}
            >

                {
                    testimonials?.map(item => (
                        <div className="textItem">
                            <video src={item?.src} controls></video>
                        </div>
                    ))
                }

            </div>


            <div className='link-Box'>
                <div className='scroll-box-item'>
                    <button onClick={scrollLeft}> <FaCaretLeft /> </button>
                    <button onClick={scrollRight}> <FaCaretRight />  </button>
                </div>

                {/* <Link to='/events' className="queryBtn">More <FaArrowRight /></Link> */}
            </div>
        </div>
    );
}

export default MySwiper;
