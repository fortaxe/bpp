import React, { useState } from 'react'
import './UnivercityForm.css'
import { FaPhone, FaUser } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import axios from 'axios'
import host from '../../utils/var';

const UnivercityForm = ({ univercity, pageSource }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const formHandler = async (e) => {
    e.preventDefault()

    setLoading(true)

    if (name === "" || email === "" || phone === 0 || message === "") {
      alert("Please fill up Entire Field");
    } else {
      try {
        const datas = {
          name,
          email,
          phone,
          message,
          univercity,
          pageSource
        };
        const config = { headers: { "Content-Type": "application/json" } };

        await axios.post(`${host}/api/v1/message`, datas, config);
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
        setName("")
        setEmail("")
        setMessage("")
        setPhone("")

      }
    }
  };
  return (
    <div className='uniFormContainer'>
      <div className="formHeader">
        <h1>Contact US</h1>
      </div>
      <form action="" onSubmit={e => formHandler(e)}>
        <div className="formBox">
          <div className="formItem">
            <FaUser />
            <input type="text" placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className="formItem">
            <MdOutlineMail />
            <input type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="formItem">
            <FaPhone />
            <input type="phone" placeholder='Phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
          </div>
          {/* <div className="formItem">
                        <FaUser/>
                        <input type="text" placeholder='Name' />
                    </div> */}
          {/* <input type="text" hidden value={"BPP Univercity"} />
                    <input type="text" hidden value={"BPP Page Sorce"} /> */}
          <div className="formItem">
            {/* <FaUser/> */}
            <textarea name="" value={message} onChange={(e) => { setMessage(e.target.value) }} id="" placeholder='Mesage' cols="10" rows="5"></textarea>
          </div>

        </div>
        <div className="formBtn">
          {
            !loading ?
              <input type="submit" placeholder='Name' value={'Submit'} />
              :
              <p className='loading'>

                Loading...
              </p>
          }
        </div>
      </form>

    </div>
  )
}

export default UnivercityForm