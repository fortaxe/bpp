import "./CourseUI.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const CourseUI = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mainBox">
      <div className="CourseHeader">{/* <h1>Visit Our Univercity​</h1> */}</div>

      <Carousel responsive={responsive}>
        <div className="courseItem">
          <img
            src={"https://www.purdue.edu/uns/images/campus-students.jpg"}
            alt="item"
          />
          {/* <div>
                <img src={"https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=50&r=g"} alt="" width={"100%"} />
            </div> */}
          <h3>Roehampton University</h3>
          <p>
            The University of Roehampton offers a first-class education
            experience, designed to help you reach your full potential and get
            the career you wan.{" "}
          </p>
          <Link to={"/roehampton"}>
            {" "}
            <button className="readBtn">Read More</button>
          </Link>
        </div>

        <div className="courseItem">
          <img
            src={
              "https://universitycompare.com/content/images/Cover--BPP-University.jpg"
            }
            alt="item"
          />
          {/* <div>
            <img src={"https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=50&r=g"} alt="" width={"100%"} />
            </div> */}
          <h3>BPP University</h3>
          <p>
            BPP University ranks as the fourth highest institution in the UK for
            employability*, with an impressive 94.6 per cent of graduates.
          </p>
          <Link to={"/bpp"}>
            {" "}
            <button className="readBtn">Read More</button>
          </Link>
        </div>

        <div className="courseItem">
          <img
            src={
              "https://4.bp.blogspot.com/-AaBazDTpHBs/WH5Ucb7DDYI/AAAAAAAAB_I/TxMlGZOXl9QERpfGB1dehX2owWVDF2jfgCLcB/s1600/cupples-cook-birdseye-north-02-min.jpg"
            }
            alt="item"
          />
          {/* <div>
                <img src={"https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=50&r=g"} alt="" width={"100%"} />
            </div> */}
          <h3>Ravensbourne University</h3>
          <p>
            Ravensbourne University is a digital media and design university,
            with vocational courses in fashion, television and broadcasting etc.{" "}
          </p>
          <Link to={"/ravensbourne"}>
            {" "}
            <button className="readBtn">Read More</button>
          </Link>
        </div>

        <div className="courseItem">
          <img
            src={
            require('../../images/oxford/oxford-head.jpg')
            }
            alt="item"
          />
          {/* <div>
                <img src={"https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=50&r=g"} alt="" width={"100%"} />
            </div> */}
          <h3>Oxford University</h3>
          <p>
            Oxford University is a digital media and design university.
          </p>
          <Link to={"/oxford"}>
            {" "}
            <button className="readBtn">Read More</button>
          </Link>
        </div>
      </Carousel>

      <div className="scrollLine">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CourseUI;
