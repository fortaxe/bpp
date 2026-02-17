import React, { useState } from "react";
import "./header.css";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import EventModal from "../EventModal/EventModal";

const Header = ({ underLine }) => {
  // console.log()
  window.scrollTo(0, 0);
  // window.addEventListener('scroll', ()=>{
  //     if(window.scrollY > 100){
  //         console.log("true")
  //         // document.getElementsByClassName("topBorder")[0].classList.remove("hide")
  //         document.getElementsByClassName("topBorder")[0].classList.add("d-bloack")
  //     }else(
  //         console.log("fals")

  //     )
  // })

  // let isHide = true
  const [isHide, setisHide] = useState(true);

  const menuHandler = () => {
    console.log("true");

    if (isHide) {
      document
        .getElementsByClassName("menuContainer")[0]
        .classList.remove("hide");
      document.getElementsByClassName("menuContainer")[0].classList.add("show");
      //   isHide = false
      setisHide(false);
    } else {
      document.getElementsByClassName("menuContainer")[0].classList.add("hide");
      document
        .getElementsByClassName("menuContainer")[0]
        .classList.remove("show");

      // isHide = true
      setisHide(true);
    }
  };

  const clearNavbar = () => {
    // console.log("kll");
    document.getElementsByClassName("menuContainer")[0].classList.add("hide");
    document
      .getElementsByClassName("menuContainer")[0]
      .classList.remove("show");
  };

  const downNav = document.getElementsByClassName("downNav");
  const downNavMenu = document.getElementsByClassName("downNavMenu");

  const mouseEnter = (num) => {
    downNav[num].classList.remove("downNavHide");
  };
  const mouseLeave = (num) => {
    downNav[num].classList.add("downNavHide");
  };
  const mouseEnterMenu = (num) => {
    downNavMenu[num].classList.remove("downNavHide");
  };
  const mouseLeaveMenu = (num) => {
    downNavMenu[num].classList.add("downNavHide");
  };

  return (
    <div className="">
      <div className="iconBox">
        <a
          href="https://www.instagram.com/sanwariyaeduconsultants/"
          target="_black"
        >
          {" "}
          <div className="iconItem scale1">
            <FaInstagram />
          </div>
        </a>
        <a href="https://wa.me/9030572254" target="_black">
          <div className="iconItem scale2">
            <FaWhatsapp />
          </div>
        </a>
        <a href="tel:9030572254" target="_black">
          {" "}
          <div className="iconItem scale3">
            <FaPhone />
          </div>
        </a>
      </div>

      <header>
        <div className="fixed">
          <EventModal />

          {/* <div className="topBorder">
            <div className="topB1">
              <a
                href="mailto:info@sanwariyaeduconsultant.com"
                target="_black"
                className="atag"
              >
                {" "}
                Email : info@sanwariyaeduconsultant.com
              </a>
            </div>
            <div className="topB1">
              Call :{" "}
              <a href="tel:9849074434" target="_black" className="atag">
                {" "}
                +91 9849074434
              </a>
            </div>
          </div> */}

          <div className="HeaderContainer">
            <div className="logoBox">
              <img
                className="sanwariyaLogo"
                src={require("../../images/SEC.png")}
                // width="180"
                height={65}
                alt="logo"
              />
            </div>
            <div className="linkBox">
              <Link to={"/"} className={underLine === "home" ? "activee" : ""}>
                Home
              </Link>
              {/* <Link to={"/"} onMouseEnter={e => { mouseEnter(0) }} onMouseLeave={e => { mouseLeave(0) }} id='mouseOverUnivercity' >Univercity
                            <div className='downNav downNavHide '>
                                <Link to={"/roehampton"} className={underLine === 'roehampton' ? 'activee' : ""} >Roehampton Univercity</Link>
                                <Link to={"/bpp"} className={underLine === 'bpp' ? 'activee' : ""} >BPP Univercity</Link>
                                <Link to={"/mercy"} className={underLine === 'mercy' ? 'activee' : ""} >Mercy Collage</Link>
                                <Link to={"/ravensbourne"} className={underLine === 'ravensbourne' ? 'activee' : ""} >Ravensbourne Univercity </Link>
                            </div>
                        </Link> */}

              <div
                to={"/"}
                id="mouseOverCountry"
                onMouseEnter={(e) => {
                  mouseEnter(0);
                }}
                onMouseLeave={(e) => {
                  mouseLeave(0);
                }}
              >
                Universities
                <div className="downNav downNavHide ">
                  <a
                    className={underLine === "bpp" ? "activee" : ""}
                    href={"https://www.bpp.com"}
                    target="_blank"
                  >
                    BPP University
                  </a>

                  <a
                    className={underLine === "roehampton" ? "activee" : ""}
                    href={"https://www.roehampton.ac.uk/"}
                    target="_blank"
                  >
                    Roehampton University
                  </a>

                  <a
                    className={underLine === "ravensbourne" ? "activee" : ""}
                    href={"https://www.ravensbourne.ac.uk/"}
                    target="_blank"
                  >
                    Ravensbourne University
                  </a>
                </div>
              </div>
              {/* <Link
                to={"/gallery"}
                className={underLine === "gallery" ? "activee" : ""}
              >
                Gallery
              </Link> */}
              <Link
                to={"/event"}
                className={underLine === "event" ? "activee" : ""}
              >
                Events
              </Link>

              <Link
                to={"/workshop"}
                className={underLine === "workshop" ? "activee" : ""}
              >
                Workshop
              </Link>

              <Link
                to={"/contact"}
                className={underLine === "contact" ? "activee" : ""}
              >
                Contact us
              </Link>
              <Link
                to={"/about"}
                className={underLine === "about" ? "activee" : ""}
              >
                About us
              </Link>

              {/* <a href="home">IMPORTANT DATES</a> */}
            </div>
            {/* <div className="iconBox">
                        <a href=""><img src="icons/reg.webp" width="30" alt="" /></a>
                        <a href=""><img src="icons/event.png" width="28" alt="" /></a>
                        <a href=""><img src="icons/about.png" width="30" alt="" /></a>
                    </div> */}
            <div onClick={(e) => menuHandler()} className="menu">
              <img src="icons/menu.webp" width="30" alt="" /> <BiMenu />
            </div>
          </div>
        </div>

        <div className="menuContainer hide">
          <div className="menulogoBox">
            <img src={require("../../images/SEC.png")} width="200" alt="logo" />
            {/* <p>International Conference on environment Climate change and Renewable energy</p> */}
          </div>
          <div className="menulinkBox">
            <div>
              <Link
                to={"/"}
                className={underLine === "home" ? "activee" : ""}
                onClick={(e) => {
                  clearNavbar();
                }}
              >
                Home
              </Link>
            </div>
            {/* <div onMouseEnter={e => { mouseEnterMenu(0) }} onMouseLeave={e => { mouseLeaveMenu(0) }}   ><Link to={"/"}   >
                            Universities
                            <div className='downNavMenu downNavHide '>
                                <Link onClick={e => { clearNavbar() }} className={underLine === 'roehampton' ? 'activee' : ""} to={"/roehampton"}>Roehampton</Link>
                                <Link onClick={e => { clearNavbar() }} className={underLine === 'bpp' ? 'activee' : ""} to={"/bpp"}>BPP</Link>
                                <Link onClick={e => { clearNavbar() }} className={underLine === 'mercy' ? 'activee' : ""} to={"/mercy"}>Mercy </Link>
                                <Link onClick={e => { clearNavbar() }} className={underLine === 'ravensbourne' ? 'activee' : ""} to={"/ravensbourne"}>Ravensbourne </Link>
                            </div>
                        </Link></div> */}
            <div
              onMouseEnter={(e) => {
                mouseEnterMenu(0);
              }}
              onMouseLeave={(e) => {
                mouseLeaveMenu(0);
              }}
            >
              <div id="mouseOverCountry">
                Universities
                <div className="downNavMenu downNavHide ">
                  <a
                    className={underLine === "bpp" ? "activee" : ""}
                    onClick={(e) => {
                      clearNavbar();
                    }}
                    href={"https://www.bpp.com/"}
                    target="_blank"
                  >
                    BPP University
                  </a>
                  <a
                    className={underLine === "roehampton" ? "activee" : ""}
                    onClick={(e) => {
                      clearNavbar();
                    }}
                    target="_blank"
                    href={"https://www.roehampton.ac.uk/"}
                  >
                    Roehampton University
                  </a>
                  <a
                    className={underLine === "ravensbourne" ? "activee" : ""}
                    onClick={(e) => {
                      clearNavbar();
                    }}
                    target="_blank"
                    href={"https://www.ravensbourne.ac.uk/"}
                  >
                    Ravensbourne University
                  </a>
                </div>
              </div>
            </div>
            {/* <div>
              <Link
                className={underLine === "gallery" ? "activee" : ""}
                onClick={(e) => {
                  clearNavbar();
                }}
                to={"/gallery"}
              >
                Gallery
              </Link>
            </div> */}
            <div>
              <Link
                className={underLine === "event" ? "activee" : ""}
                onClick={(e) => {
                  clearNavbar();
                }}
                to={"/event"}
              >
                Events
              </Link>
            </div>
            <div>
              <Link
                className={underLine === "workshop" ? "activee" : ""}
                onClick={(e) => {
                  clearNavbar();
                }}
                to={"/workshop"}
              >
                workshops
              </Link>
            </div>
            <div>
              <Link
                className={underLine === "contact" ? "activee" : ""}
                onClick={(e) => {
                  clearNavbar();
                }}
                to={"/contact"}
              >
                Contact us
              </Link>
            </div>
            <div>
              {" "}
              <Link
                className={underLine === "about" ? "activee" : ""}
                onClick={(e) => {
                  clearNavbar();
                }}
                to={"/about"}
              >
                About us
              </Link>
            </div>
          </div>
          <div className="menuiconBox">
            <div>
              <a
                href="https://www.instagram.com/sanwariyaeduconsultants/"
                target="_black"
              >
                {" "}
                <FaInstagram />{" "}
              </a>
            </div>
            <div>
              {" "}
              <a href="https://wa.me/+919849074434" target="_black">
                {" "}
                <FaWhatsapp />{" "}
              </a>
            </div>
            <div>
              {" "}
              <a href="tel:+919849074434" target="_black">
                <FaPhone />{" "}
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://www.facebook.com/sanwariyaeducationalconsultants/"
                target="_black"
              >
                {" "}
                <FaFacebook />{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
