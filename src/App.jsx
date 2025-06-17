import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoLive from "./Upload/GoLive";
import Upload from "./Upload/Upload";
import Cateogry from "./pages/Cateogry";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import VideoCard from "./components/VideoCard";
import VideoPlayer from "./components/VideoPlayer";
import Explore from "./pages/Explore";
import PornVideos from "./pages/PornVideos";
import LiveCams from "./pages/LiveCams";
import Pornstars from "./pages/Pornstars";
import FuckNow from "./pages/FuckNow";
import Community from "./pages/Community";
import PhotosGIFs from "./pages/PhotosGIFs";
import UserProfile from "./pages/UserProfile";

import "./App.css"; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/golive" element={<GoLive />} />
          <Route path="/category" element={<Cateogry />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/video-card" element={<VideoCard />} />
          <Route path="/porn-videos" element={<PornVideos />} />
          <Route path="/live-cams" element={<LiveCams />} />
          <Route path="/pornstars" element={<Pornstars />} />
          <Route path="/fuck-now" element={<FuckNow />} />
          <Route path="/community" element={<Community />} />
          <Route path="/photos-gifs" element={<PhotosGIFs />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
