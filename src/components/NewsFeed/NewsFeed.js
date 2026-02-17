import React, { useState } from 'react';
import './VideoToggle.css';
import { FaNewspaper } from 'react-icons/fa';

const src = "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670625/sanwariya/VID-20241023-WA0003_dzcxwa.mp4"

const videos = [
  { id: 1, title: "Actress Shruti Haasan", url: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670625/sanwariya/VID-20241023-WA0003_dzcxwa.mp4" },
  { id: 2, title: "Actress Rashi", url: 'https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679696/sanwariya/WhatsApp_Video_2024-10-23_at_14.10.01_hfqanx.mp4' },
  
  {
    id: 3, title: "BPP",
    url: 'https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091389/website-videos/We_are_BPP_Education_Group_ix2anq.mp4'
  },
  {
    id: 4, title: "Roehampton",
    url: 'https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091333/website-videos/Untitled_design_11_gfixef.mp4'
  },
  {
    id: 5, title: "Richard ",
    url: 'https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091331/website-videos/Guillaume_Richard_1_jh7ywa.mp4'
  },

  {
    id: 6, title: "Roehampton tour ",
    url: 'https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091462/website-videos/roehampton_tour_n6x1gl.mp4'
  },
  {
    id: 7, title: "About Ravensbourne",
    url: 'https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091285/website-videos/about_ravensbourne_short_video_nnx5rg.mp4'
  },
  {
    id: 8, title: "Teaching research  ",
    url: 'https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091294/website-videos/roehampton_video_-_short_uuukvn.mp4'
  },
  
  { id: 9, title: "Sanwariya ", url: 'https://res.cloudinary.com/dzgc1ajz7/video/upload/v1732091285/website-videos/about_ravensbourne_short_video_nnx5rg.mp4' },
// Add more video URLs here
  // {
  //   id: 3, title: "Sanwariya title 2 ",
  //   url: 'hh'
  // },
];


function VideoToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <button onClick={toggleBox} className="toggle-button">
        <FaNewspaper />
      </button>

      {isOpen && (
        <div className="video-box">
          {/* <video width="100%" controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <div className='v-top-box'>

            <h4>Video Gallery</h4>

            <button onClick={toggleBox} className="close-button">
              {isOpen ? 'Close' : 'News'}
            </button>

          </div>

          <div className="video-gallery">
            {/* Left side for main video display */}
            <div className="main-video-container">
              <video src={selectedVideo.url} controls autoPlay className="main-video" />
              <h3>{selectedVideo?.title}</h3>
            </div>

            {/* Right side for scrollable video list */}
            <div className="video-list-container">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  className={`video-thumbnail ${selectedVideo.id === video.id ? 'highlighted' : ''}`}
                >
                  <div>
                    <video src={video.url} className="thumbnail-video" />
                  </div>

                  <div>
                    <p>{video?.title}</p>
                    {selectedVideo.id === video.id ? 'Playing...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default VideoToggle;
