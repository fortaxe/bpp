import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import './CountryUI.css'
import { Link } from 'react-router-dom';

const CountryUI = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
  <div className='slideMainContainer'>
      <div className='slideMain'>
      <div className="UniHeader">
        <h1>Study Abroad in Other Countries</h1>

      </div>
      <div className="scrollLine">
        <div>
          <div></div>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        // className='carousal'

      >
        <Link to={"/usa"} className='itemAtag' >
        <div className='item iUrl1'>
          <div className="itemContent">
            <p>Study in USA</p>
            <button className='hide'>  <BsFillArrowRightCircleFill/></button>
            </div>
    
        </div>
        </Link>
        <Link to={"/canada"} className='itemAtag' >

        <div className='item iUrl2'>
          <div className="itemContent">
            <p>Study in Canada</p>
            <button className='hide'>  <BsFillArrowRightCircleFill/></button>
            </div>
        </div>
        </Link>

        <Link to={"/australia"} className='itemAtag' >

        <div className='item iUrl3'>
          <div className="itemContent">
            <p>Study in Australia</p>
            <button className='hide'>  <BsFillArrowRightCircleFill/></button>
            </div>
        </div>
        </Link>


      </Carousel>;
    </div>
  </div>
  )
}

export default CountryUI