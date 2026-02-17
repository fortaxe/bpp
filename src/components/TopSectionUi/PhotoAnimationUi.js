import React from "react";
import "./photo.css";
// import '../../images/bpp/bpp (3).jpeg'

const PhotoAnimationUi = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1743010406/website-imgs/samantha_-_group_photo_ltk8xz.jpg", //new
    }, //https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091164/website-imgs/Rav_jqadsg.jpg
    {
      src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1743010693/website-imgs/WhatsApp_Image_2025-03-22_at_12.32.54_PM_rfhz3l_c_crop_ar_4_3_vsp7i2.jpg", // new
    }, // { src: '', value: '4+ Countries' }, // https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091165/website-imgs/464217024_1144348267055505_8838143796456958845_n_ivdklu.jpg

    // { src: require("../../images/bpp/bpp (3).jpeg") },
    {
      src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1743507077/website-imgs/tamannaah_-_pic_ystvsk.jpg",
    },

    {
      src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1743507146/website-imgs/bpraak_-_cake_cutting_pic_v6m7gs.jpg",
    },

    { src: require("../../images/bpp/KA.webp") },

    { src: require("../../images/bpp/r-6.jpg") },
    {
      src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091160/website-imgs/RaV_fashion_ja3eew.jpg",
    }, //  { src: '',value: "530+ Students" },
    // { src: require("../../images/home/home6.jpeg") },

    { src: require("../../images/gallery/s-1.jpg") },
    { src: require("../../images/gallery/s-4.jpg") },

    // { src: require("../../images/gallery/s-1.jpg") },
    // { src: require("../../images/gallery/s-4.jpg") },
    // { src: "" }, // { src: '', value: '4+ Countries' }, // https://res.cloudinary.com/dzgc1ajz7/image/upload/v1732091165/website-imgs/464217024_1144348267055505_8838143796456958845_n_ivdklu.jpg
  ];
  return (
    <div className="photoAnimationContainer">
      <div className="grid-container">
        {images.map((src, index) => (
          <>
            {src.src === "" ? (
              <div className="empty-item">
                <div
                  className={
                    index === 4 ? "round-item" : index === 6 ? "" : "hide"
                  }
                >
                  {src?.value}
                </div>
              </div>
            ) : (
              <div key={index} className="grid-item">
                <img
                  src={src.src}
                  alt={`image-${index}`}
                  className="image"
                  style={{ animationDelay: `${index * 0.5}s`, maxHeight: 160 }}
                />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default PhotoAnimationUi;
