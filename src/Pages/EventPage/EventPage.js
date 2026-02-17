import React, { useRef } from 'react'
import './EventPage.css'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

const bppImgs = [
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091167/website-imgs/Rav_3_ucitvu.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091165/website-imgs/464217024_1144348267055505_8838143796456958845_n_ivdklu.jpg"
  },


  // {
  //   src: "https"
  // },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091160/website-imgs/RaV_fashion_ja3eew.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091160/website-imgs/Armaaan_atdab6.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091160/website-imgs/Vidya_Balan_poogqq.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091160/website-imgs/Armaan_Malik_d3te5c.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091160/website-imgs/464236041_1144344727055859_7909316947396505549_n_vxipgi.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091162/website-imgs/464310607_1144344620389203_4526046348893387278_n_li2k3r.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091162/website-imgs/Bpraak_eepps8.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091162/website-imgs/Arman_qsdpwu.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091162/website-imgs/Bp_rak_mjxadh.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091162/website-imgs/Bpraaak_cvwhan.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091163/website-imgs/Rav_2_aigga4.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091163/website-imgs/Rav_fashion_1_rhc9oc.jpg"
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091163/website-imgs/Ravensbourne_Fashion_lg3mbf.jpg"
  },
]
const galleryImage = [
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297629/sanwariyaVideos/drive-download-20231026T045315Z-001/BPP_GROUP_PIC_n633ht.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297637/sanwariyaVideos/drive-download-20231026T045315Z-001/mercy1_yi7ls4.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297637/sanwariyaVideos/drive-download-20231026T045315Z-001/mercy_tvt0rr.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297635/sanwariyaVideos/drive-download-20231026T045315Z-001/kochi_ROEHAMPTON_dcat1o.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297633/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_2_atghow.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_4_z5svj8.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_GROUP_m270js.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108292/sanwariyaVideos/cgh2auycdm26kouwipjv.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297628/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_bo4ofg.jpg' },
];
const galleryImage2 = [
  { src: require("../../images/gallery/g4.avif") },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg' },
  { src: 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/bqdveysuxng6phbvcvgj.jpg' },
  { src: require("../../images/gallery/g10.jpeg") },
  { src: require("../../images/gallery/g5.jpeg") },
  { src: require("../../images/gallery/g6.jpeg") },
  { src: require("../../images/gallery/g7.jpeg") },
  { src: require("../../images/gallery/g8.jpeg") },
  { src: require("../../images/gallery/g11.jpeg") },
];

const galleryImage3 = [
  { src: require("../../images/gallery/o-1.jpg") },
  { src: require("../../images/gallery/o-2.jpg") },
  { src: require("../../images/gallery/o-3.jpg") },
  { src: require("../../images/gallery/s-1.jpg") },
  { src: require("../../images/gallery/o-4.jpg") },
  { src: require("../../images/gallery/s-2.jpg") },
  { src: require("../../images/gallery/s-3.jpg") },
  { src: require("../../images/gallery/s-4.jpg") },
  { src: require("../../images/gallery/s-5.jpg") },
  { src: require("../../images/gallery/s-6.jpg") },
  { src: require("../../images/gallery/s-7.jpg") },
  { src: require("../../images/gallery/s-8.jpg") },
  { src: require("../../images/gallery/s-9.jpg") },
  { src: require("../../images/gallery/s-10.jpg") },
  { src: require("../../images/gallery/s-1.jpg") }, // Repeated but included as per the structure
  { src: require("../../images/radio city .jpg") },
];



const images = [
  {
    src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg"
  },
  {
    src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/bqdveysuxng6phbvcvgj.jpg"
  },
  {
    src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108292/sanwariyaVideos/cgh2auycdm26kouwipjv.jpg"
  },
  {
    src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg"
  },
  {
    src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297628/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_bo4ofg.jpg"
  },
  {
    src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg"
  },
  ...bppImgs, ...galleryImage, ...galleryImage2, ...galleryImage3
]

const videos = [
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712135616/sanwariya/gmbs5ea2fpn59fyixebs.mp4"
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712135614/sanwariya/fi5ai4nrctnpcylrz0d6.mp4"
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712135616/sanwariya/gmbs5ea2fpn59fyixebs.mp4"
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712135614/sanwariya/fi5ai4nrctnpcylrz0d6.mp4"
  }
]



const EventPage = ({ setUnderLine }) => {
  setUnderLine('event')

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className='event-main-Container'>
      {/* <br /> */}
      <div className="UniHeader">
        <h1>Events</h1>
      </div>

      <div className="scrollLine">
        <div>
          <div></div>
        </div>
      </div>

      {/* images */}
      {/* <>
        <div className="imagesBox">
          {
            images?.map(item => (

              <div>
                <img src={item.src} alt="img" />
              </div>

            ))
          }
        </div>

      </> */}

      <div className='event-v-Container'>
        <div className="event-v-item">
          <h1>BPP UNIVERSITY </h1>
          {/* <h2>Chief Guest - Kartik Aryan</h2> */}
          {/* <h3>24 - June - 2024</h3> */}


          <br />
          <div className='scroll-box'>
            <h4>Event Videos </h4>
            <div className='scroll-box-item'>
              <button onClick={scrollLeft}> <FaCaretLeft /> </button>
              <button onClick={scrollRight}> <FaCaretRight />  </button>
            </div>
          </div>
          <div className='event-video-box'
            ref={carouselRef}
            style={{
              scrollBehavior: 'smooth',
            }}

          >
            {
              videos?.map(item => (

                <video src={item?.src} controls className='video-item' />
              ))
            }
          </div>

          <h4>Event Photos </h4>

          <div className='event-img-box'>
            {
              images?.map(item => (
                <img src={item?.src} alt="img" />
              ))
            }
          </div>




        </div>

      </div>



      {/* <PageHeader heading={"Events"} path={"Events"} /> */}

      {/* <EventUI /> */}





    </div>
  )
}

export default EventPage