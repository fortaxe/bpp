import React, { useEffect } from 'react'
import './Gallery.css'
import SimpleSlider from '../Univercities/SimpleSlider'


const videos = [
  {
    src: "https://www.youtube.com/embed/bMh3jVLXpCg",
    iframe: true
  },
  {
    src: "https://www.youtube.com/embed/IUKtQVFHJrc",
    iframe: true
  }
]


const imgs = [
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




const Gallery = ({ setUnderLine }) => {
  useEffect(() => {
    setUnderLine('gallery')

  }, []);



  return (
    <>
      <div className="GalleryHeader">

        <h1>Gallery</h1>
        <div className="scrollLine">
          <div>
            <div></div>
          </div>
        </div>

      </div>

      <SimpleSlider videos={videos} />


      {/* <div className="universityCarousal slideGallary">
        <AwesomeSlider>
          <div className="videoBox">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bMh3jVLXpCg" title="Grand Course Launch Event | BPP University | Sanwariya Education Consultants" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        
          <div className="videoBox">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IUKtQVFHJrc" title="BPP University Event | Sanwariya Education Consultants" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


        </AwesomeSlider>
      </div> */}

      <div className='one-image'>
        {/* <img src="https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091164/website-imgs/464203226_1144347687055563_7053282105347079061_n_bqzkpo.jpg" alt="g-top-banner" /> */}
      </div>


      {/* tamamna photos  */}
      {/* <div className='galleryAllImages'>

        {
          imgs?.map((item) => (
            <div className='g-image'>
              <img src={item.src} alt="Img" />
            </div>
          ))
        }


      </div> */}

      <div className="galleryContainer">


        <div className="frame">

          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297629/sanwariyaVideos/drive-download-20231026T045315Z-001/BPP_GROUP_PIC_n633ht.jpg'} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297637/sanwariyaVideos/drive-download-20231026T045315Z-001/mercy1_yi7ls4.jpg'} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297637/sanwariyaVideos/drive-download-20231026T045315Z-001/mercy_tvt0rr.jpg'} alt="" />
          </div>
        </div>

        <div className="frame">

          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297635/sanwariyaVideos/drive-download-20231026T045315Z-001/kochi_ROEHAMPTON_dcat1o.jpg'} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297633/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_2_atghow.jpg'} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_4_z5svj8.jpg'} alt="" />
          </div>
        </div>

        <div className="frame">

          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_GROUP_m270js.jpg'} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108292/sanwariyaVideos/cgh2auycdm26kouwipjv.jpg'} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297628/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_bo4ofg.jpg'} alt="" />
          </div>
        </div>
      </div>

      {/* tamamna photos end */}


      <div className="galleryContainer">


        <div className="frame">

          <div>
            <img src={require("../../images/gallery/g4.avif")} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg'} alt="" />
          </div>
          <div>
            <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/bqdveysuxng6phbvcvgj.jpg'} alt="" />
          </div>
        </div>

        <div className="frame">

          <div>
            <img src={require("../../images/gallery/g10.jpeg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/g5.jpeg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/g6.jpeg")} alt="" />
          </div>
        </div>

        <div className="frame">

          <div>
            <img src={require("../../images/gallery/g7.jpeg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/g8.jpeg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/g11.jpeg")} alt="" />
          </div>
        </div>
      </div>


      <div className="galleryContainer">

        <div className="frame">

          <div>
            <img src={require("../../images/gallery/o-1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/o-2.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/o-3.jpg")} alt="" />
          </div>
        </div>

        <div className="frame">
          <div>
            <img src={require("../../images/gallery/s-1.jpg")} alt="" />
          </div>

          <div>
            <img src={require("../../images/gallery/o-4.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/s-2.jpg")} alt="" />
          </div>
        </div>

        <div className="frame">

          <div>
            <img src={require("../../images/gallery/s-3.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/s-4.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/s-5.jpg")} alt="" />
          </div>
        </div>
        <div className="frame">

          <div>
            <img src={require("../../images/gallery/s-6.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/s-7.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/s-8.jpg")} alt="" />
          </div>
        </div>
        <div className="frame">

          <div>
            <img src={require("../../images/gallery/s-9.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/s-10.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../images/gallery/s-1.jpg")} alt="" />
          </div>
        </div>
        <div className="frame">
          <div>
            {/* <img src={require("../../images/gallery/s-1.jpg")} alt="" /> */}
          </div>
          <div>
            <img src={require("../../images/radio city .jpg")} alt="" />
          </div>
        </div>


      </div>



    </>
  )
}

export default Gallery