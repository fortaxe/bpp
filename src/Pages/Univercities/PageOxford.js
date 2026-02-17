import React from "react";
import { FaCheckCircle, FaCircle, FaDownload } from "react-icons/fa";
import "./Bpp.css";
import AwesomeSlider from "react-awesome-slider";
import UnivercityForm from "../../components/UnivercityForm/UnivercityForm.js";

const PageOxford = ({ setUnderLine }) => {
  setUnderLine("roehampton");
  window.scrollTo(0, 0);

  return (
    <div>
      {/* <div className="UnitopHeader">
                <img src={require('../../images/headerStripe.jpg')} alt="" />
            </div> */}
      <div className="universityCarousal">
        <AwesomeSlider>
          <div className="videoBox">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/seBRAMgyw2A" title="SANWARIYA EDUCATIONAL CONSULTANT with OXFORD INTERNATIONAL EDUCATION GROUP  (OIEG)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          {/* <div className="videoBox"></div> */}
        </AwesomeSlider>
      </div>

      <div className="uniContainer">
        <div className="uniHeader">
          <img src={require("../../images/oxford/OIEG LOGO_page-0001.jpg")} alt="" />

          <h1>Study in Oxford University</h1>
          {/* <p>America is a Premier destination for international students owing to its strong economy, vibrant campus life and the variety, flexibility and quality academic options it offers. From fabulous cities to beautiful natural parks, you are sure to have a spell bound life in the US.</p> */}
        </div>

        {/* <div className="whyContainer">
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
        </div> */}

        <div className="whyContainer">
          <div className="whytextBox">
            <h1>Why Sanwariya for Oxford?</h1>
            <p></p>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                To promote quality education throughout the world. Sanwariya
                started working with Oxford University few years ago.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                At that time Oxford University wasn’t that popular in Hyderabad.
                So, Sanwariya started Branding and marketing of Oxford university.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Sanwariya has Invested 25 lakhs in first year and we have done
                marketing and branding of Oxford University.
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Now Oxford has become a brand in Hyderabad. It can also be said
                that it is one of the foremost universities which is getting
                recruitment of international student from Hyderabad. So, to make
                a brand and to give a brand to sell is what the Sanwariya has
                achieved in the last few years
              </p>
            </div>
            <a
              className="visitBtn"
              href={"https://www.oxfordinternational.com/"}
              target="_black"
              download
            >
              VISIT OXFORD
            </a>
          </div>
          <div className="whyformBox">
            <UnivercityForm univercity="Oxford " pageSource="oxford Page" />
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
            {/* <a href={require("../../images/roehampton/Courses uor.pdf")} download>
                            <div className="DownloadBtn">
                                <FaDownload />
                                <p> Course </p>
                            </div>
                        </a> */}
          </div>
        </div>

        <div className="uniContainBox">
          <h1>Rewards</h1>
          <div className="highlightImg">
            <img src={require("../../images/oxford/OIEG 8 PICS_page-0003.jpg")} alt="" />
          </div>
          <div className="picGallary">
            <div>
              <img src={require("../../images/oxford/OIEG 8 PICS_page-0002.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/oxford/OIEG 8 PICS_page-0001.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/oxford/OIEG 8 PICS_page-0004.jpg")} alt="fd" />
            </div>
          </div>
          <div className="picGallary">
            <div>
              <img src={require("../../images/oxford/OIEG 8 PICS_page-0005.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/oxford/OIEG 8 PICS_page-0006.jpg")} alt="fd" />
            </div>
            <div>
              <img src={require("../../images/oxford/OIEG 8 PICS_page-0007.jpg")} alt="fd" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PageOxford;
