import React from "react";
import { FaCheckCircle, FaCircle, FaDownload } from "react-icons/fa";
import "./Bpp.css";
import AwesomeSlider from "react-awesome-slider";
import UnivercityForm from "../../components/UnivercityForm/UnivercityForm.js";
// import ArmanActor from "../../images/hsu/arman.mp4";
import SimpleSlider from "./SimpleSlider.js";
const videos = [
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679744/sanwariya/WhatsApp_Video_2024-10-23_at_15.27.15_h7ef2c.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670620/sanwariya/VID-20241023-WA0002_wz9ak5.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670628/sanwariya/VID-20241023-WA0005_f9ctqf.mp4",
  },
  //   {
  //     src: ArmanActor,
  //   },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712648233/sanwariya/VID-20240409-WA0002_h8ms2s.mp4",
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/Vj12LeNoV5E",
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/IUKtQVFHJrc",
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/L8wsuQA4I9w",
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/xBrv555-63A",
  },
];

const imgs = [
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116173/website-imgs/HSU/475319355_1225155575641440_6160112122169792189_n_mkpn1m.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116173/website-imgs/HSU/477720915_1225155608974770_7248028549496553307_n_smucl0.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116173/website-imgs/HSU/476934532_1225155618974769_6795387283597362126_n_i97reo.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116172/website-imgs/HSU/479193064_1225157852307879_9143893259257588205_n_x12hoi.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116172/website-imgs/HSU/476643679_1225156595641338_9217400595139142341_n_eolphr.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116172/website-imgs/HSU/478046422_1225157438974587_1195207240416217997_n_zjqt1n.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116171/website-imgs/HSU/477703237_1225155798974751_5202097873975743767_n_shqo2g.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116171/website-imgs/HSU/479548970_1225156715641326_5436668024081887242_n_wvcdhr.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116171/website-imgs/HSU/478920358_1225157172307947_4385667675670185195_n_axhywb.jpg",
  },
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1747116170/website-imgs/HSU/477992515_1225155875641410_987294693600123156_n_xzrw2r.jpg",
  },
];

const PageBpp = ({ setUnderLine }) => {
  setUnderLine("hsu");
  window.scrollTo(0, 0);

  return (
    <div className="university-container">
      {/* <div className="UnitopHeader">
                <img src={require('../../images/headerStripe.jpg')} alt="" />
            </div> */}
      {/* <div className="universityCarousal"> */}
      {/* <SimpleSlider videos={videos} /> */}

      {/* Nov 2024 */}
      {/* <AwesomeSlider>
          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src={""}

              allowfullscreen
              controls
            ></video>
          </div>
          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src={""}

              allowfullscreen
              controls
            ></video>
          </div>
          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src={""}

              allowfullscreen
              controls
            ></video>
          </div>



          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src={ArmanActor}

              allowfullscreen
              controls
            ></video>
          </div>

          <div className="videoBox">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bMh3jVLXpCg"
              title="Grand Course Launch Event | HSU University | Sanwariya Education Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src="https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712648233/sanwariya/VID-20240409-WA0002_h8ms2s.mp4"

              allowfullscreen
              controls
            ></video>
          </div>
          <div className="videoBox">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Vj12LeNoV5E"
              title="Oxford International HSU University | Sanwariya Education Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="videoBox">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IUKtQVFHJrc"
              title="HSU University Event | Sanwariya Education Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="videoBox">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/L8wsuQA4I9w"
              title="Oxford International Manchester | HSU |  Sanwariya Education Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="videoBox">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xBrv555-63A"
              title="HSU University | Saanwariya Educational Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </AwesomeSlider> */}
      {/* </div> */}

      <div className="uniContainer">
        <div className="uniHeader">
          <img
            src={require("../../images/hsu/hsu-logo-purple.png")}
            alt="HSU"
          />

          <h1>Study in HSU University</h1>
          {/* <p>America is a Premier destination for international students owing to its strong economy, vibrant campus life and the variety, flexibility and quality academic options it offers. From fabulous cities to beautiful natural parks, you are sure to have a spell bound life in the US.</p> */}
        </div>

        <div className="whyContainer">
          <div className="whyimgbox">
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IUKtQVFHJrc"
              title="HSU University Event | Sanwariya Education Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <img src={imgs[0].src} alt="Img" />
          </div>

          <div className="whytextBox">
            <h1>Why HSU ?</h1>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                HSU offers a curriculum that is entirely focused on *healthcare
                and medical education*, allowing students to immerse themselves
                in an environment dedicated to producing skilled healthcare
                professionals.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                The university provides access to *state-of-the-art simulation
                labs, diagnostic equipment, and research facilities*, giving
                students hands-on training that mirrors real-world clinical
                settings.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Programs are designed in collaboration with *healthcare industry
                experts, ensuring students graduate with skills and knowledge
                that are **directly aligned with current job market demands* in
                health sciences.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                HSU offers *robust career services*, including clinical
                internships, hospital placements, and partnerships with
                healthcare organizations to help students gain real-world
                experience and secure employment post-graduation.
              </p>
            </div>
            <a
              className="visitBtn"
              href={"https://www.hsu.com/"}
              target="_black"
              download
            >
              VISIT HSU
            </a>
          </div>
        </div>

        <div className="whyContainer">
          <div className="whytextBox">
            <h1>Why Sanwariya for HSU?</h1>
            <p></p>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                To promote quality education throughout the world. Sanwariya
                started working with HSU University few years ago.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                At that time HSU University wasn’t that popular in Hyderabad.
                So, Sanwariya started Branding and marketing of HSU university.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Sanwariya has Invested 25 lakhs in first year and we have done
                marketing and branding of HSU University.
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Now HSU has become a brand in Hyderabad. It can also be said
                that it is one of the foremost universities which is getting
                recruitment of international student from Hyderabad. So, to make
                a brand and to give a brand to sell is what the Sanwariya has
                achieved in the last few years
              </p>
            </div>
          </div>
          <div className="whyformBox">
            <UnivercityForm univercity="BBP " pageSource="hsu Page" />
          </div>
        </div>

        {/* ll */}
        {/* <div className="uniContainBox">
          <h1>Course</h1>
          <div>
            <FaCheckCircle />
            <p> Under graduation</p>
          </div>
          <div>
            <FaCheckCircle />
            <p> Post graduation</p>
          </div>
          <div className="downloadBox">
            <a
              href={
                "https://res.cloudinary.com/dvxxcrbmx/image/upload/v1729679690/sanwariya/BPP_University_w8adh9.pdf"
              }
              target="_black"
              download
            >
              <div className="DownloadBtn">
                <FaDownload />
                <p> Brochure </p>
              </div>
            </a>
          </div>
        </div> */}

        <div className="uniContainBox">
          <h1>Rewards</h1>
          {/* <div className="highlightImg">
            <img src={require("../../images/hsu/KA.webp")} alt="" />
          </div> */}

          <div className="_gallery">
            {imgs.map((img) => (
              <div className="_img">
                <img src={img.src} alt="Gallery Image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBpp;
