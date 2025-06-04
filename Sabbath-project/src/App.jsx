import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Music from './components/Music';
import Home from './components/Home'; // Ensure you have this file/component
import Live from './components/Live'; // Ensure you have this file/component
import Merch from './components/Merch';
import Album from './components/Album';
import Contact from './components/Contact';
import About from './components/About';
import Video from './components/Video';
import Podcast from './components/Podcast';
import FullBio from './components/FullBio';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes> {/* Wrap all Route elements in Routes */}
        <Route path="/" element={<Home />} /> {/*  the default landing page */}
        <Route path="/live" element={<Live />} />
        <Route path="/music" element={<Music />} />
        <Route path="/podcast" element={<Podcast/>} />
        <Route path="/merch" element={<Merch/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/full-bio" element={< FullBio/>} />
        <Route path="/album" element={<Album/>} />
        <Route path="/video" element={<Video/>} />
        <Route path="/contact" element={ <Contact/>  } />
      </Routes>
    </Router>
  );
}

export default App;
