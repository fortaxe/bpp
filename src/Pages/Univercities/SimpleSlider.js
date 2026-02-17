import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function App({ videos }) {
    return (
        <div className='simpleSlideContainer'>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper slider"
            >
                {
                    videos?.map(item => (

                        <>
                            {
                                !item?.iframe ?
                                    <SwiperSlide>
                                        <video src={item.src} controls width="100%"></video>
                                    </SwiperSlide> :
                                    <SwiperSlide>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={item?.src}
                                            title="Sanwariya Education Consultants"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </SwiperSlide>
                            }
                        </>
                    ))
                }

            </Swiper>
        </div>
    );
}
