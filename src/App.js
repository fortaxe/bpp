import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/Pages/Home/Home.js";
import AboutUs from "../src/Pages/AboutUs/AboutUs.js";
import ContactUs from "../src/Pages/ContactUs/ContactUs.js";
import EventPage from "../src/Pages/EventPage/EventPage.js";
import Gallery from "../src/Pages/Gallery/Gallery.js";
import WorkshopPage from "../src/Pages/WorkshopPage/WorkshopPage.js";
import NoPage from "../src/Pages/NoPage/NoPage.js";
import PageBpp from "./Pages/Univercities/Bpp.js";
import PageHsu from "./Pages/Univercities/Hsu.js";
import PageMercy from "./Pages/Univercities/PageMercy.js";
import PageRoehampton from "./Pages/Univercities/PageRoehampton.js";
import PageRavensbourne from "./Pages/Univercities/PageRavensbourne.js";
import PageOxford from "./Pages/Univercities/PageOxford.js";

import PageUk from "../src/Pages/Countries/PageUk.js";
import PageUsa from "../src/Pages/Countries/PageUsa.js";
import Header from "../src/components/Header/header.js";
import Footer from "../src/components/Footer/Footer.js";
import NewsFeed from "../src/components/NewsFeed/NewsFeed.js";
import { useState } from "react";

function App() {
  window.scrollTo(0, 0);

  const [underLine, setUnderLine] = useState("");
  // setUnderLine('home');

  return (
    <BrowserRouter>
      <Header underLine={underLine} />
      <Routes>
        <Route exact path="/" element={<Home setUnderLine={setUnderLine} />} />
        <Route
          path="/about"
          element={<AboutUs setUnderLine={setUnderLine} />}
        />
        <Route
          path="/contact"
          element={<ContactUs setUnderLine={setUnderLine} />}
        />
        <Route
          path="/event"
          element={<EventPage setUnderLine={setUnderLine} />}
        />
        <Route
          path="/workshop"
          element={<WorkshopPage setUnderLine={setUnderLine} />}
        />
        <Route
          path="/gallery"
          element={<Gallery setUnderLine={setUnderLine} />}
        />

        {/* univercity */}
        <Route path="/hsu" element={<PageHsu setUnderLine={setUnderLine} />} />

        <Route path="/bpp" element={<PageBpp setUnderLine={setUnderLine} />} />
        <Route
          path="/mercy"
          element={<PageMercy setUnderLine={setUnderLine} />}
        />
        <Route
          path="/roehampton"
          element={<PageRoehampton setUnderLine={setUnderLine} />}
        />
        <Route
          path="/ravensbourne"
          element={<PageRavensbourne setUnderLine={setUnderLine} />}
        />

        {/* <Route path='/oxford' element={<PageOxford setUnderLine={setUnderLine} />} /> */}
        {/* univercity end */}

        <Route path="/uk" element={<PageUk setUnderLine={setUnderLine} />} />
        <Route path="/usa" element={<PageUsa setUnderLine={setUnderLine} />} />
        <Route path="*" element={<NoPage setUnderLine={setUnderLine} />} />
      </Routes>

      <Footer />
      <NewsFeed />
    </BrowserRouter>
  );
}

export default App;
