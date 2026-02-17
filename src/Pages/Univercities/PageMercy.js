import React from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import UnivercityForm from "../../components/UnivercityForm/UnivercityForm";
import AwesomeSlider from "react-awesome-slider";

const PageMercy = ({ setUnderLine }) => {
  setUnderLine("mercy");
  window.scrollTo(0, 0);

  return (
    <div>
      {/* <div className="UnitopHeader">
                <img src={require('../../images/headerStripe.jpg')} alt="" />
            </div> */}
      <div className="universityCarousal">
        <AwesomeSlider>
          <div className="videoBox">
              <video controls src="https://res.cloudinary.com/dwevw3pnz/video/upload/v1699348521/sanwariyaVideos/oqauikofwbwosyndemc4.mp4" width={'100%'} height={'100%'}></video>
             </div>
         
        </AwesomeSlider>

      </div>

      <div className="uniContainer">
        <div className="uniHeader">
          <img src={require('../../images/mercyLogo.jpeg')} alt="" width={100} />

          <h1>Study in Mercy University</h1>
          {/* <p>America is a Premier destination for international students owing to its strong economy, vibrant campus life and the variety, flexibility and quality academic options it offers. From fabulous cities to beautiful natural parks, you are sure to have a spell bound life in the US.</p> */}
        </div>
        {/* <div className="whyContainer">

          <div className="whytextBox">
            <h1>Why Sanwariya ?</h1>
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
          
         
          </div>
        </div> */}

        <div className="whyContainer">


          <div className="whytextBox">
            <h1>Why Mercy University ?</h1>
            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Always seeking ways to expand academic and career opportunities
                for its students, Mercy university was authorized to offer its first
                graduate program.
              </p>
            </div>

            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                Mercy university has become one of the regional
                leaders in the preparation of health care professions as well as a
                leading provider of teacher education preparation for the New York
                City Schools and the surrounding communities.
              </p>
            </div>


            <div className="pTag">
              <p>
                <FaCheckCircle />
              </p>
              <p>
                It’s dedication to
                the motivated student, and the university’s commitment to quality,
                student support, and affordability - as well as innovation -
                remains as strong today as ever.
              </p>
            </div>
            <p>

            </p>

            <a
              className="visitBtn"
              href={
                "https://www.mercy.edu/"
              }
              target="_black"

            >
              Visit Mercy
            </a>
          </div>

          <div className="whyimgbox" style={{ margin: "1vmax 0" }}>
            <UnivercityForm univercity="Mercy Collage" pageSource="mercy Page" />
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
              href={require("../../images/mercy collage/mercy website (1).pdf")}
              download
            >
              <div className="DownloadBtn">
                <FaDownload />
                <p> Brochure 1</p>
              </div>
            </a>
            <a
              href={require("../../images/mercy collage/Mercy College - Factsheet Template - International General.pdf")}
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
              href={require("../../images/mercy collage/Mercy College - Factsheet Template - International General.pdf")}
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
              <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297637/sanwariyaVideos/drive-download-20231026T045315Z-001/mercy1_yi7ls4.jpg'} alt="" />
            </div>
            <div>
              <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297637/sanwariyaVideos/drive-download-20231026T045315Z-001/mercy_tvt0rr.jpg'} alt="" />
            </div>
            <div>
              <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_GROUP_m270js.jpg'} alt="" />
            </div>
          </div>





          <div className="picGallary">
            <div>
              <img src="https://res.cloudinary.com/dwevw3pnz/image/upload/v1699349005/sanwariyaVideos/rkla1qvxpya6rgn8hbjw.jpg" alt="" />
            </div>
            <div>
              <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297629/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_GROUP_2_clwi8g.jpg'} alt="" />
            </div>
            <div>
              <img src={'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297628/sanwariyaVideos/drive-download-20231026T045315Z-001/MERCY_bo4ofg.jpg'} alt="" />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PageMercy;
