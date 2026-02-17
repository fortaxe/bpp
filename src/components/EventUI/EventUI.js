import React from "react";
import "./eventUI.css";
import { Link } from "react-router-dom";

const EventUI = () => {
  return (
    <>
      <div className="eventContainer">
        <br />
        <br />
        <div className="UniHeader">
          <h1>Events</h1>
        </div>

        <div className="scrollLine">
          <div>
            <div></div>
          </div>
        </div>

        {/* <div className="eventHeader">
          <div>
            <h1>Events</h1>
          </div>    
        </div> */}
        {/* <div className="eventItemContainer">
                    <div className="eventBox">
                        <div className="dateBox">
                            <h1>30</h1>
                            <h3>September</h3>
                        </div>
                        <div className="contentBox">
                            <h2> Sanwariya Educational Consultants</h2>
                             <p> 8:00 AM - 5:00 PM  NEWYORK, USA</p> 
                            <p>Ravensbourne University - tour </p>
                        </div>
                        <div className="imgBox">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/f7DcJeu4C0Y" title="Ravensbourne University | Saanwariya Educational Consultants" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                    <div className="eventBox">
                        <div className="dateBox">
                            <h1>30</h1>
                            <h3>September</h3>
                        </div>
                        <div className="contentBox">
                            <h2> Sanwariya Educational Consultants </h2>
                            <p> 8:00 AM - 5:00 PM  NEWYORK, USA</p>
                            <p>Roehampton University - tour </p>
                        </div>
                        <div className="imgBox">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Vf0A3zF8-RY" title="What makes studying at Roehampton University special ?  | Sanwariya Educational Consultants" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>                   
                </div>  */}

        <div className="enventVideoBox">

          <div className="videoRow">
            <div className="videoItem">
              <video width="100%"
                height="85%" controls src="https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712135616/sanwariya/gmbs5ea2fpn59fyixebs.mp4"></video>

              <h2>BPP University Event</h2>
            </div>
            <div className="videoItem">
              <video width="100%"
                height="80%" controls src="https://res.cloudinary.com/dwevw3pnz/video/upload/v1698953622/sanwariyaVideos/rfzpfnq1jcboec8zk0pj.mp4"></video>
              <h2>Speech by our Roehampton University Delegates </h2>
            </div>


          </div>
          <div className="videoRow">
            <div className="videoItem">
              <video width="100%"
                height="85%" controls src="https://res.cloudinary.com/dvxxcrbmx/video/upload/v1712135614/sanwariya/fi5ai4nrctnpcylrz0d6.mp4"></video>

              <h2>BPP University</h2>
            </div>
            <div className="videoItem">
              <video width={'100%'} height={'85%'} controls src="https://res.cloudinary.com/dwevw3pnz/video/upload/v1695797619/sanwariyaVideos/fdtfut3lmg8gp5dma7bl.mp4"></video>
              <h2>Roehampton University</h2>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default EventUI;
