import React from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import "./Bpp.css";
import AwesomeSlider from "react-awesome-slider";
import UnivercityForm from "../../components/UnivercityForm/UnivercityForm";
import SimpleSlider from './SimpleSlider.js'


const videos = [
  {
    src:"https://www.youtube.com/embed/f7DcJeu4C0Y",
    iframe:true
  },
  {
    src:"https://www.youtube.com/embed/91lNb1MYgpA",
    iframe:true
  }
]
const PageRavensbourne = ({ setUnderLine }) => {
  setUnderLine("ravensbourne");
  window.scrollTo(0, 0);

  return (
    <div>
      {/* <div className="UnitopHeader">
                <img src={require('../../images/headerStripe.jpg')} alt="" />
            </div> */}

      <SimpleSlider videos={videos} />

      {/* <div className="universityCarousal">
        <AwesomeSlider>
        <div className="videoBox">
            <iframe
              width="100%"
              height="100%"
              src=""
              title="Ravensbourne University | Saanwariya Educational Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
           
          </div>
          
    
        
         
          <div className="videoBox">
          <iframe width="100%" height="100%" src="" title="Ravensbourne University | Sanwariya Education Consultants" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
          </div>
        </AwesomeSlider>
      </div> */}

      <div className="uniContainer">
        <div className="uniHeader">
          <img
            src={require("../../images/ravensbourne/LOGO OF RAVENSBOURNE_.jpg")}
            alt=""
          />

          <h1>Study in Ravensbourne University</h1>
          {/* <p>America is a Premier destination for international students owing to its strong economy, vibrant campus life and the variety, flexibility and quality academic options it offers. From fabulous cities to beautiful natural parks, you are sure to have a spell bound life in the US.</p> */}
        </div>
        <div className="whyContainer">
          <div className="whyimgbox">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/EVJP_aa7Pw4"
              title="Urvi Singh | Ravensbourne University | Sanwariya Education Consultants"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="whytextBox">
            <h1>Why Ravensbourne ?</h1>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Ravensbourne University is a digital media and design
                university, with vocational courses in fashion, television and
                broadcasting, interactive product design, architecture and
                environment design, graphic design, animation, moving image,
                music production for media and sound design.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                At Ravensbourne this was interpreted as requiring the closure of
                a department, with the communications and television
                broadcasting course at the College initially earmarked to be
                discontinued as it was on a separate campus and the closure
                would have allowed the College to consolidate its properties.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>MOI Based university all over India</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Public university</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Located in southeast of London ( 5 mins walk from o2 location)
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>96.4% of graduates are into employment</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>3500 scholarship to all the students</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>variety of PG & UG courses.</p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>Accommodation facility</p>
            </div>

            <a
              className="visitBtn"
              href={"https://www.ravensbourne.ac.uk/"}
              target="_black"
            >
              Visit Ravensbourne
            </a>
          </div>
        </div>
        <div className="whyContainer">
          <div className="whytextBox">
            <h1>Why Sanwariya for Ravensbourne?</h1>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Studying at Ravensbourne will enable you to explore your
                particular specialism in-depth.
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Whilst engaging in opportunities for collaboration with other
                disciplines across multi-disciplinary environment.
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Technology and resources will help you challenge existing
                digital media and design principles, and identify new ideas and
                ways of thinking.
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Thankyou to the Sanwariya Education Consultant for being a
                leading consultant which has been a great impact.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Studying at Ravensbourne will enable you to explore your
                particular specialism in-depth.
              </p>
            </div>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Studying at Ravensbourne will enable you to explore your
                particular specialism in-depth.
              </p>
            </div>
          </div>
          <div className="whyformBox">
            <UnivercityForm
              univercity="Ravensbourne "
              pageSource="Ravensbourne Page"
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
              href={require("../../images/ravensbourne/Oxford.International.RGB-Ravensbourne-University-Flyer-A4.pdf")}
              download
            >
              <div className="DownloadBtn">
                <FaDownload />
                <p> Brochure 2</p>
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
              href={require("../../images/ravensbourne/Oxford.International.RGB-Ravensbourne-University-Flyer-A4.pdf")}
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
                src={require("../../images/ravensbourne/WhatsApp Image 2023-06-12 at 10.40.58 PM (2).jpeg")}
                alt="fd"
              />
            </div>
            <div>
              <img
                src={require("../../images/ravensbourne/WhatsApp Image 2023-06-12 at 10.41.00 PM (2).jpeg")}
                alt="fd"
              />
            </div>
            <div>
              <img
                src={require("../../images/ravensbourne/WhatsApp Image 2023-06-12 at 10.40.58 PM (2).jpeg")}
                alt="fd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRavensbourne;
