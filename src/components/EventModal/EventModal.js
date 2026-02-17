import React from "react";

import "./EventModal.css";
// const Url = 'https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670620/sanwariya/VID-20241023-WA0002_wz9ak5.mp4'
const Url =
  "https://res.cloudinary.com/dzgc1ajz7/video/upload/v1748324498/website-imgs/WhatsApp_Video_2025-05-26_at_2.27.57_PM_ad7egi.mp4";

const EventModal = () => {
  function closeModal() {
    let closeModal = document.getElementsByClassName("modalContainer");
    // closeModal[0].style.display = 'none'
    closeModal[0].classList.add("hide");
  }

  return (
    <div className="modalContainer">
      <div className="modalbox">
        <div className="modalHeader">
          <h3>Event </h3>
          <button onClick={closeModal}>Close</button>
        </div>
        <div className="modalItem">
          {/* <img src={require('../../images/tammana.jpg')} alt="event" /> */}
          <video
            // width="100%"
            // height={'100%'}
            src={Url}
            // allowfullscreen
            autoPlay
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
