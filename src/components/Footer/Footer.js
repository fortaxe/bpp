import React, { useState } from 'react'
import './footer.css';
import './new-footer.css';
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FooterAnimationUi from '../../components/FooterAnimationUi.js'

// const host = 'https://portal.sanwariyaeduconsultant.com'
const host = 'http://62.72.31.157:6005';
// const host = 'http://localhost:6005'


const Footer = () => {
    const [message, setMessage] = useState("");

    const subscribeHandler = async (e) => {
        //    e.preventDefault()

        if ((message === "")) {
            alert("Please fill your email");
        } else {
            try {
                const datas = {
                    email: message
                };
                const config = { headers: { "Content-Type": "application/json" } };

                const { data } = await axios.post(`${host}/api/v1/subscribe`, datas, config);
                // console.log(data.data.user )
                alert("Your Email send Successfully");


            } catch (error) {
                alert('Invalid email!')
            }
        }
    };

    return (
        <footer>
            <div className="subscribeBox">
                {/* <h3>Subscribe now</h3> */}
                <div>

                    <input type="email" placeholder='Subscribe with Email' value={message} onChange={e => setMessage(e.target.value)} />
                    <input type="submit" className='submitBtn' onClick={e => subscribeHandler()} />
                </div>
            </div>

            <div class="footerContainer">
                <div class="footerBox">
                    <div class="footerItem">
                        <div class="Box1heading">CONTACT US</div>
                        <p>For General Queries : Sanwariya Educational Consultants 210,317,Sadguru Complex, Basheer Bagh-500028, Hyderabad (T.S), INDIA</p>
                        <p> <b class="colorMidDark" >Phone</b> : <a href="tel:+919849074434" target='_black' className='atag'>  +91-9849074434</a></p>
                        <p><b class="colorMidDark" >Email</b> : <a href="mailto:info@sanwariyaeduconsultant.com" target='_black' className='atag'> info@sanwariyaeduconsultant.com</a></p>
                    </div>

                    <div class="footerItem">
                        <div class="Box2heading">Links</div>
                        <div><Link to={"/event"} className='atag'> Events</Link></div>
                        <div><Link to={"/workshop"} className='atag'>Workshop</Link></div>
                        <div><Link to={"/about"} className='atag'>About Us</Link></div>
                        <div><Link to={"/contact"} className='atag'>Contact Us</Link></div>
                    </div>

                    <div class="footerItem">
                        <div class="Box2heading">Universities</div>
                        <div><Link to={"https://www.bpp.com/"} className='atag'>BPP University</Link></div>
                        <div><Link to={"https://www.roehampton.ac.uk/"} className='atag'>Roehampton University</Link></div>
                        {/* <div><Link to={"/mercy"} className='atag'> Mercy University</Link></div> */}
                        <div><Link to={"https://www.ravensbourne.ac.uk/"} className='atag'>Ravensbourne University</Link></div>
                    </div>

                    <div class="footerItem">
                        <div class="logoBox">
                            <img src={require('../../images/SEC.png')} width="200" alt="logo" />
                        </div>
                        <div class="socialBox">
                            <a href="https://www.facebook.com/sanwariyaeducationalconsultants/" target='_black' > <FaFacebook /> </a>
                            <a href="https://www.instagram.com/sanwariyaeduconsultants/" target='_black' > <FaInstagram /> </a>
                            <a href="https://wa.me/+919849074434" target='_black'> <FaWhatsapp /> </a>
                            <a href="tel:+919849074434" target='_black'><FaPhone /> </a>
                        </div>
                    </div>
                </div>

                <div class="downBox">
                    <div class="downLeftBox">
                        <p>© Copyright <b>Sanwariya Educational Consultants</b>. All Rights Reserved</p>
                    </div>
                    {/* <div class="downRightBox">

                        <a href="">Privacy</a>

                        <a href="">Terms</a>

                    </div> */}
                </div>
            </div>
            {/* 
            <div className="backBanner">
                <div className="backContectBox">
                    <h1>STUDY ABROAD</h1>
                    <p>Join thousand of instructors and earn money hassle free!</p>

                    <button className='getBtn'>GET STARTED NOW</button>
                </div>
            </div> */}

                <FooterAnimationUi />
        </footer>
    )
}

export default Footer