import React, { useState } from 'react'
import './workshopPage.css'
import RoundPagination from './RoundPagination.js'
const images = [
    {
        src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg"
    },
    {
        src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_4_z5svj8.jpg"
    },
    {
        src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297633/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_2_atghow.jpg"
    },
    {
        src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297635/sanwariyaVideos/drive-download-20231026T045315Z-001/kochi_ROEHAMPTON_dcat1o.jpg"
    },
    {
        src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg"
    },
    {
        src: "https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_4_z5svj8.jpg"
    }
]

const videos = [
    {
        src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679696/sanwariya/WhatsApp_Video_2024-10-23_at_14.10.01_hfqanx.mp4"
    },
    {
        src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679735/sanwariya/WhatsApp_Video_2024-10-23_at_15.26.28_hxj6cq.mp4"
    },
    {
        src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679744/sanwariya/WhatsApp_Video_2024-10-23_at_15.27.15_h7ef2c.mp4"
    },
    {
        src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670657/sanwariya/VID-20241023-WA0004_a1kbx0.mp4"
    },
    {
        src: "https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670625/sanwariya/VID-20241023-WA0003_dzcxwa.mp4"
    }
]



const WorkshopPage = ({ setUnderLine }) => {
    setUnderLine('workshop')

    const events = [
        {
            id: 1,
            name: 'BPP University',
            images: [
                'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg',
                'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297630/sanwariyaVideos/drive-download-20231026T045315Z-001/ROEHAMPTON_4_z5svj8.jpg',
            ],
            videos: [
                'https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729679744/sanwariya/WhatsApp_Video_2024-10-23_at_15.27.15_h7ef2c.mp4',
            ],
        },
        {
            id: 2,
            name: 'Ravensbourne University',
            images: [
                // 'https://res.cloudinary.com/dwevw3pnz/image/upload/v1701108284/sanwariyaVideos/zlfqeoaee8hsdatctol5.jpg',
                'https://res.cloudinary.com/dwevw3pnz/image/upload/v1698297635/sanwariyaVideos/drive-download-20231026T045315Z-001/kochi_ROEHAMPTON_dcat1o.jpg',
            ],
            videos: [
                'https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670657/sanwariya/VID-20241023-WA0004_a1kbx0.mp4',
            ],
        },
        // {
        //     id:3,
        //     name:"University of Roehampton London",
        //     images: [
        //         ],
        //     videos: [
        //         // 'https://res.cloudinary.com/dvxxcrbmx/video/upload/v1729670657/sanwariya/VID-20241023-WA0004_a1kbx0.mp4',
        //     ],
        // }
    ];

    const [selectedEvent, setSelectedEvent] = useState(events[0]);

    return (
        <div className='workshopContainer '>
            <>
                <br />
                <div className="UniHeader">
                    <h1>Workshop</h1>
                </div>
                <div className="scrollLine">
                    <div>
                        <div></div>
                    </div>
                </div>
            </>

            {/* <>
                    <RoundPagination videos={videos}/>
            </> */}


            {/* images */}
            {/* <>
                <div className="imagesBox margin-Top">
                    {
                        images?.map(item => (

                            <div>
                                <img src={item.src} alt="img" />
                            </div>

                        ))
                    }
                </div>

            </> */}


            <div className="app-container">
                {/* Sidebar */}
                <div className="sidebar">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={`sidebar-item ${selectedEvent.id === event.id ? 'active' : ''}`}
                            onClick={() => setSelectedEvent(event)}
                        >
                            <img src={event.images[0]} alt={event.name} className="event-icon" />
                            <span>{event.name}</span>
                        </div>
                    ))}
                </div>

                {/* Content Area */}
                <div className="content">
                    <h2>{selectedEvent.name}</h2>

                    <h4> Photos</h4>
                    <div className="media-gallery">
                        {/* Display Images */}
                        {selectedEvent.images.map((image, index) => (
                            <img key={index} src={image} alt={`Event ${selectedEvent.id} Image ${index + 1}`} className="media-item" />
                        ))}
                    </div>

                    <h4>Videos</h4>
                    <div>
                        {/* Display Videos */}
                        {selectedEvent.videos.map((video, index) => (
                            <video src={video} key={index} controls className="media-item" />
                        ))}
                    </div>
                </div>
            </div>





        </div>
    )
}

export default WorkshopPage