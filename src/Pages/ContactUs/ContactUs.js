import React, { useState } from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import "./ContactUs.css";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import axios from 'axios'

// const host = 'https://portal.sanwariyaeduconsultant.com'
const host = 'http://62.72.31.157:6005';
// const host = 'http://localhost:6005'

const ContactUs = ({ setUnderLine }) => {
  setUnderLine("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const formHandler = async (e) => {
    e.preventDefault()
    setLoading(true)


    if ((name === "", email === "", phone == 0, message === "")) {
      alert("Please fill up Entire Field");
    } else {
      try {
        const datas = {
          name,
          email,
          phone,
          message,
          univercity: "no",
          pageSource: "Contact us Page"
        };
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`${host}/api/v1/message`, datas, config);
        // console.log(data.data.user )
        alert("Your Message send Successfully");
        setLoading(false)
        setName("")
        setEmail("")
        setMessage("")
        setPhone("")

      } catch (error) {
        alert(error)
        setLoading(false)


      }
    }
  };

  return (
    <div>
      {/* <PageHeader heading={"Contact Us"} path={"Contact us"} /> */}
      {/* secsion 2 */}

      <div className="contactContainer1">
        <div className="Box2">
          <h1>Sanwariya Eductional Consultants </h1>
          <p>
            For Genral query :Sanwariya Educational Consultants 210,317,Sadguru
            Complex, Basheer Bagh-500028, Hyderabad (T.S) INDIA
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919849074434"
              target="_black"
              className="atag atagcontact"
            >
              {" "}
              +91 9849074434
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@sanwariyaeduconsultant.com"
              target="_black"
              className="atag atagcontact"
            >
              {" "}
              info@sanwariyaeduconsultant.com
            </a>
          </p>

          <div>
            <a href="https://www.instagram.com/sanwariyaeduconsultants/" target="_blank">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com/sanwariyaeducationalconsultants/" target="_blank">
              <FaFacebook />
              Facebook
            </a>
            <a href="tel:+919849074434"
              target="_black">
              <FaPhone />
              Contact us
            </a>
          </div>
        </div>

        <div className="Box1">
          <div className="contactBox">
            <h3>Your Query.</h3>
            <div>
              <form action="" onSubmit={e => formHandler(e)}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="4"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>


                {
                  !loading ?

                    <input
                      type="submit"
                      value={"Submit"}
                      className="Submitbtn"

                    /> :
                    <p className='loading'>

                      Loading...
                    </p>
                }

                {/* <button OnClick={ (e)=>{formHandler()}} >ok</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
