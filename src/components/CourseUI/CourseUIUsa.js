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
      items: 1,
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
      <div className="CourseHeader">
        {/* <h1>Visit Our Collages</h1> */}
     
      </div>

      {/* <Carousel responsive={responsive}> */}
      <div>
      <div className="courseItem">
        <img
          src={
            "https://www.learndash.com/wp-content/uploads/university-building-1.jpg"
          }
          alt="item"
        />
        {/* <div>
                <img src={"https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=50&r=g"} alt="" width={"100%"} />
            </div> */}
        <h3>Mercy University</h3>
        <p>
          Always seeking ways to expand academic and career opportunities for
          its students, Mercy College was authorized to offer its first graduate
          program.{" "}
        </p>
        <Link to={"/mercy"}>
          {" "}
          <button className="readBtn">Read More</button>
        </Link>
      </div>
      </div>

      {/* </Carousel> */}

      <div className="scrollLine">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CourseUI;
