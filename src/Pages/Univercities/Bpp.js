import React from "react";
import { FaCheckCircle, FaCircle, FaDownload } from "react-icons/fa";
import "./Bpp.css";
import AwesomeSlider from "react-awesome-slider";
import UnivercityForm from "../../components/UnivercityForm/UnivercityForm.js";
import ArmanActor from "../../images/bpp/arman.mp4";
import SimpleSlider from './SimpleSlider.js'
const videos = [
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679744/sanwariya/WhatsApp_Video_2024-10-23_at_15.27.15_h7ef2c.mp4"
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670620/sanwariya/VID-20241023-WA0002_wz9ak5.mp4"
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670628/sanwariya/VID-20241023-WA0005_f9ctqf.mp4"
  },
  {
    src: ArmanActor
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712648233/sanwariya/VID-20240409-WA0002_h8ms2s.mp4"
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/Vj12LeNoV5E"
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/IUKtQVFHJrc"
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/L8wsuQA4I9w"
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/xBrv555-63A"
  },
]

const PageBpp = ({ setUnderLine }) => {
  setUnderLine("bpp");
  window.scrollTo(0, 0);

  return (
    <div className="university-container">
      {/* <div className="UnitopHeader">
                <img src={require('../../images/headerStripe.jpg')} alt="" />
            </div> */}
      {/* <div className="universityCarousal"> */}
      <SimpleSlider videos={videos} />

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
              title="Grand Course Launch Event | BPP University | Sanwariya Education Consultants"
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
              title="Oxford International BPP University | Sanwariya Education Consultants"
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
              title="BPP University Event | Sanwariya Education Consultants"
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
              title="Oxford International Manchester | BPP |  Sanwariya Education Consultants"
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
              title="BPP University | Saanwariya Educational Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </AwesomeSlider> */}
      {/* </div> */}

      <div className="uniContainer">
        <div className="uniHeader">
          <img src={require("../../images/bpp/BPP LOGO.png")} alt="" />

          <h1>Study in BPP University</h1>
          {/* <p>America is a Premier destination for international students owing to its strong economy, vibrant campus life and the variety, flexibility and quality academic options it offers. From fabulous cities to beautiful natural parks, you are sure to have a spell bound life in the US.</p> */}
        </div>

        <div className="whyContainer">
          <div className="whyimgbox">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IUKtQVFHJrc"
              title="BPP University Event | Sanwariya Education Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

          </div>

          <div className="whytextBox">
            <h1>Why BPP ?</h1>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                BPP University ranks as the fourth highest institution in the UK
                for employability*, with an impressive 94.6 per cent of
                graduates progressing into skilled work upon completion of their
                studies.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                This statistic, along with BPP University’s globally recognized
                programs and partnerships, positions it as a premier choice for
                students”, she added.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                The University has around 15,000 students studying across 12
                centres in seven locations across England and online around the
                world.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                70 per cent of these students are full-time while over 84 per
                cent students are on postgraduate programmes.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Sangeeta Goel CEO, Sanwariya Educational Consultants said “The
                BPP University is led by renowned industry experts to provide a
                world-class learning experience.”
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                BPP University encompasses a range of prestigious schools
                offering specialized courses across various fields including Law
                School, School of Technology, School of Nursing and School of
                Health that have been producing scores of industry-ready
                graduates every year.
              </p>
            </div>
            <a
              className="visitBtn"
              href={"https://www.bpp.com/"}
              target="_black"
              download
            >
              VISIT BPP
            </a>
          </div>
        </div>

        <div className="whyContainer">
          <div className="whytextBox">
            <h1>Why Sanwariya for BPP?</h1>
            <p></p>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                To promote quality education throughout the world. Sanwariya
                started working with BPP University few years ago.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                At that time BPP University wasn’t that popular in Hyderabad.
                So, Sanwariya started Branding and marketing of BPP university.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Sanwariya has Invested 25 lakhs in first year and we have done
                marketing and branding of BPP University.
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Now BPP has become a brand in Hyderabad. It can also be said
                that it is one of the foremost universities which is getting
                recruitment of international student from Hyderabad. So, to make
                a brand and to give a brand to sell is what the Sanwariya has
                achieved in the last few years
              </p>
            </div>
          </div>
          <div className="whyformBox">
            <UnivercityForm univercity="BBP " pageSource="bpp Page" />
          </div>
        </div>

        {/* ll */}
        <div className="uniContainBox">
          <h1>Course</h1>
          {/* <div>
            <FaCheckCircle />
            <p> Deploma</p>
          </div> */}
          <div>
            <FaCheckCircle />
            <p> Under graduation</p>
          </div>
          <div>
            <FaCheckCircle />
            <p> Post graduation</p>
          </div>
          <div className="downloadBox">
            <a href={'https://res.cloudinary.com/dvxxcrbmx/image/upload/v1729679690/sanwariya/BPP_University_w8adh9.pdf'} target="_black" download>
              <div className="DownloadBtn">
                <FaDownload />
                <p> Brochure  </p>
              </div>
            </a>
          </div>
        </div>

        <div className="uniContainBox">
          <h1>Rewards</h1>
          {/* <div className="highlightImg">
            <img src={require("../../images/bpp/KA.webp")} alt="" />
          </div> */}

          <div className="picGallary">
            <div>
              <img src={require("../../images/bpp/bpp (1).jpeg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/bpp/bpp (2).jpeg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/bpp/bpp (3).jpeg")} alt="fd" />
            </div>
          </div>

          <div className="picGallary">
            <div>
              <img src={require("../../images/bpp/KA.webp")} alt="" />

            </div>
            <div>
              <img src={'https://res.cloudinary.com/dvxxcrbmx/image/upload/v1729679683/sanwariya/WhatsApp_Image_2024-10-23_at_15.27.17_bi6nao.jpg'} alt="fd" />
            </div>
            <div>
              <img src={'https://res.cloudinary.com/dvxxcrbmx/image/upload/v1729679683/sanwariya/WhatsApp_Image_2024-10-23_at_15.27.16_jvh4do.jpg'} alt="fd" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBpp;
