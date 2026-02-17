import React from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import "./Bpp.css";
import AwesomeSlider from "react-awesome-slider";
import UnivercityForm from "../../components/UnivercityForm/UnivercityForm";
import SimpleSlider from "./SimpleSlider.js";

const videos = [
  {
    src: "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1743010691/website-imgs/WhatsApp_Video_2025-03-26_at_22.58.31_p7a9zk.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679696/sanwariya/WhatsApp_Video_2024-10-23_at_14.10.01_hfqanx.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670657/sanwariya/VID-20241023-WA0004_a1kbx0.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670625/sanwariya/VID-20241023-WA0003_dzcxwa.mp4",
  },
  {
    src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712648224/sanwariya/VID-20240409-WA0003_t5q10g.mp4",
  },

  {
    iframe: true,
    src: "https://www.youtube.com/embed/Vf0A3zF8-RY",
  },
  {
    iframe: true,
    src: "https://www.youtube.com/embed/UHF4s8uBF2A",
  },
];

const PageRoehampton = ({ setUnderLine }) => {
  setUnderLine("roehampton");
  window.scrollTo(0, 0);

  return (
    <div>
      {/* <div className="UnitopHeader">
                <img src={require('../../images/headerStripe.jpg')} alt="" />
            </div> */}
      <SimpleSlider videos={videos} />

      {/* Nov 2024 */}
      {/* <div className="universityCarousal">

        <AwesomeSlider>

          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src=""
              allowfullscreen
              controls
            ></video>
          </div>
          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src=""
              allowfullscreen
              controls
            ></video>
          </div>
          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src=""
              allowfullscreen
              controls
            ></video>
          </div>

          <div className="videoBox">
            <video
              width="100%"
              height="100%"
              src=""

              allowfullscreen
              controls
            ></video>
          </div>
          <div className="videoBox">

            <iframe
              width="100%"
              height="100%"
              src=""
              title="What makes studying at Roehampton University special ?  | Sanwariya Educational Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

          </div>
          <div className="videoBox">
            <iframe width="100%" height="100%" src="" title="Roehampton university" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </AwesomeSlider>
      </div> */}

      <div className="uniContainer">
        <div className="uniHeader">
          <img src={require("../../images/roehampton/LOGO.jpg")} alt="" />

          <h1>Study in Roehampton university</h1>
          {/* <p>America is a Premier destination for international students owing to its strong economy, vibrant campus life and the variety, flexibility and quality academic options it offers. From fabulous cities to beautiful natural parks, you are sure to have a spell bound life in the US.</p> */}
        </div>

        <div className="whyContainer">
          <div className="whyimgbox">
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Vf0A3zF8-RY"
              title="What makes studying at Roehampton University special ?  | Sanwariya Educational Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <img
              src={require("../../images/bpp/r-6.jpg")}
              alt=""
              width={"100%"}
            />
          </div>

          <div className="whytextBox">
            <h1>Why Roehampton ?</h1>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Placement program for selected courses</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>No 1 for being Modern University.</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>World’s largest Library.</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Dual Degree awarded to students.</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Affordable tuition fees with scholarship</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Wide range of job opportunities after graduation</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Wide range of job opportunities after graduation</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                The University of Roehampton offers a first-class education
                experience, designed to help you reach your full potential and
                get the career you want. At Roehampton, they strive to equip
                students with the knowledge and skills they need to succeed in a
                workplace that will change radically and rapidly in the future.
                Roehampton prides itself on help all students to develop the
                skills they need for a successful graduate career and fulfilling
                life.
              </p>
            </div>

            <a
              className="visitBtn"
              href={"https://www.roehampton.ac.uk/"}
              target="_blank"
            >
              Visit Roehampton
            </a>
          </div>
        </div>
        <div className="whyContainer">
          <div className="whytextBox">
            <h1>Why Sanwariya for Roehampton?</h1>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Provide online recorded classrooms</p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>More than 175 years of experience into teaching</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>54 acre parkland campus</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Wide range of UG and PG coursesP</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Accommodation service provided</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>98.2% graduates are into employment</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>No 1 for Law School</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Ranked in top 10 University.</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Located in heart of West London 30 mins away from Central London{" "}
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Sanwariya Education Consultant is leading consultant in the
                world for getting highest number of deposits for April 2022
                intake at the University of Roehampton. Sanwariya Education
                Consultants organizes a meet and greet programmes in Hyderabad
                with University of Roehampton, London with Students, Parents and
                others.
              </p>
            </div>
          </div>
          <div className="whyformBox">
            <UnivercityForm
              univercity="BRoehampton"
              pageSource="roehampton Page"
            />
          </div>
        </div>

        <div className="uniContainBox">
          <h1>Brochure</h1>
          <div>
            <FaCheckCircle />
            <p> Ranked no 1 for overall quality of education</p>
          </div>
          <div>
            <FaCheckCircle />
            <p> Numerous Study Choices</p>
          </div>
          <div>
            <FaCheckCircle />
            <p> Merit based university assistance provided</p>
          </div>
          <div>
            <FaCheckCircle />
            <p> Internationally recognised</p>
          </div>
          <div className="downloadBox">
            <a
              href={require("../../images/roehampton/Oxford.International.RGB-Roehampton-University-Flyer-A4.pdf")}
              download
            >
              <div className="DownloadBtn">
                <FaDownload />
                <p> Brochure 1</p>
              </div>
            </a>
            <a
              href={require("../../images/roehampton/Oxford.International.UORUSPs(Rankingleaflet)_V2.pdf")}
              download
            >
              <div className="DownloadBtn">
                <FaDownload />
                <p> Brochure 2</p>
              </div>
            </a>

            <a
              href={
                "https://res.cloudinary.com/dvxxcrbmx/image/upload/v1729679696/sanwariya/University_of_Roehampton_-_New_Placement_products_webinar_Slides_2_x8bh8o.pdf"
              }
              download
              target="_blank"
            >
              <div className="DownloadBtn">
                <FaDownload />
                <p> Brochure 3</p>
              </div>
            </a>
          </div>
        </div>
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
            <a
              href={require("../../images/roehampton/Courses uor.pdf")}
              download
            >
              <div className="DownloadBtn">
                <FaDownload />
                <p> Course </p>
              </div>
            </a>
          </div>
        </div>

        <div className="uniContainBox">
          <h1>Rewards</h1>

          <div className="picGallary">
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1743010406/website-imgs/samantha_-_group_photo_ltk8xz.jpg"
                }
                alt="fd"
              />
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1743010396/website-imgs/samantha_-_group_photo_-_2_kanifc.jpg"
                }
                alt="fd"
              />
            </div>
            <div>
              <img
                src={
                  "https://res.cloudinary.com/dzgc1ajz7/image/upload/v1743010693/website-imgs/WhatsApp_Image_2025-03-22_at_12.32.54_PM_rfhz3l_c_crop_ar_4_3_vsp7i2.jpg"
                }
                alt="fd"
              />
            </div>
          </div>

          <div className="picGallary">
            <div>
              <img src={require("../../images/roehampton/r-1.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/roehampton/r-2.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/roehampton/r-3.jpg")} alt="fd" />
            </div>
          </div>
          <div className="picGallary">
            <div>
              <img src={require("../../images/roehampton/r-4.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/roehampton/r-5.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/roehampton/r-6.jpg")} alt="fd" />
            </div>
          </div>
          <div className="picGallary">
            <div>
              <img src={require("../../images/roehampton/r-7.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/roehampton/r-8.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/roehampton/r-9.jpg")} alt="fd" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRoehampton;
