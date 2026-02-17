// import React from "react";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import "./UnivercityUI.css";
// import { Link } from "react-router-dom";

// const UnivercityUI = () => {
//   // const responsive = {
//   //   superLargeDesktop: {
//   //     // the naming can be any, depends on you.
//   //     breakpoint: { max: 4000, min: 3000 },
//   //     items: 3,
//   //   },
//   //   desktop: {
//   //     breakpoint: { max: 3000, min: 1024 },
//   //     items: 3,
//   //   },
//   //   tablet: {
//   //     breakpoint: { max: 1024, min: 600 },
//   //     items: 1,
//   //   },
//   //   mobile: {
//   //     breakpoint: { max: 600, min: 0 },
//   //     items: 1,
//   //   },
//   // };
//   return (
//     <div className="slideMainContainer">
//       <div className="slideMain">
//         <div className="UniHeader">
//           <h1>Specialist for UK Universities</h1>
//         </div>
//         <div className="scrollLine">
//           <div>
//             <div></div>
//           </div>
//         </div>
//         {/* <Carousel responsive={responsive} className="Univer-carousal"> */}
//         <div className="university-Box">
//           <Link to={"/bpp"} className="itemAtag">
//             <div className="item uUrl1">
//               <div className="itemContent">
//                 <p>BBP University</p>
//                 <button className="hide">
//                   {" "}
//                   <BsFillArrowRightCircleFill />
//                 </button>
//               </div>
//             </div>
//           </Link>
//           <Link to={"/roehampton"} className="itemAtag">
//             <div className="item uUrl2">
//               <div className="itemContent">
//                 <p>Roehampton University</p>
//                 <button className="hide">
//                   {" "}
//                   <BsFillArrowRightCircleFill />
//                 </button>
//               </div>
//             </div>
//           </Link>
//           <Link to={"/ravensbourne"} className="itemAtag">
//             <div className="item uUrl3">
//               <div className="itemContent">
//                 <p>Ravensbourne University</p>
//                 <button className="hide">
//                   {" "}
//                   <BsFillArrowRightCircleFill />
//                 </button>
//               </div>
//             </div>
//           </Link>
//           <Link to={"/hsu"} className="itemAtag">
//             <div className="item uUrl3">
//               <div className="itemContent">
//                 <p>HSU University</p>
//                 <button className="hide">
//                   {" "}
//                   <BsFillArrowRightCircleFill />
//                 </button>
//               </div>
//             </div>
//           </Link>
//         </div>
//         {/* </Carousel> */}
//       </div>
//     </div>
//   );
// };

// export default UnivercityUI;

import React from "react";
import "./UniversityGrid.css";
import "./UnivercityUI.css";
import { Link } from "react-router-dom";

const universities = [
  {
    name: "BPP",
    url: "bpp",
    image: "../../images/bpp-university.jpeg",
  },
  {
    name: "Roehampton University",
    url: "roehampton",
    image: "../../images/bpp-university.jpeg",
  },
  {
    name: "Ravensbourne University",
    url: "ravensbourne",
    image: "../../images/bpp-university.jpeg",
  },
  {
    name: "HSU",
    url: "hsu",
    image: "../../images/bpp-university.jpeg",
  },
];

const UniversityGrid = () => {
  return (
    <div className="grid-container">
      <div className="UniHeader">
        <h1>Specialist for UK Universities</h1>
      </div>
      <div className="scrollLine">
        <div>
          <div></div>
        </div>
      </div>
      {universities.map((uni, index) => (
        <Link
          to={`/${uni.url}`}
          className={`box img${index + 1}`}
          key={index}
          style={{}}
        >
          <div className="overlay">
            <span>{uni.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UniversityGrid;
