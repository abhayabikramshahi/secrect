// pages/VideoPlayer.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

function VideoPlayer() {
  const { id } = useParams();
  // Get extension from query string for local videos
  const searchParams = new URLSearchParams(window.location.search);
  const ext = searchParams.get('ext') || 'mp4';
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [quality, setQuality] = useState('1080p');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSpeedChange = (e) => {
    const rate = parseFloat(e.target.value);
    setPlaybackRate(rate);
    if (videoRef.current) videoRef.current.playbackRate = rate;
  };

  const handleQualityChange = (e) => {
    setQuality(e.target.value);
    // Optional: you can swap video src with different resolutions here
  };

  // Remove play button and improve speed/quality handling
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, loading]);

  useEffect(() => {
    if (videoRef.current && ext === 'mp4') {
      // Reload video on quality change for mp4
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
    if (videoRef.current && ext !== 'mp4') {
      // For non-mp4, just play (no quality change)
      videoRef.current.play().catch(() => {});
    }
  }, [quality, ext]);

  // Determine video MIME type
  const getMimeType = (ext) => {
    if (ext === 'mp4') return 'video/mp4';
    if (ext === 'mkv' || ext === 'mk4') return 'video/webm'; // webm is more widely supported for mkv/mk4 in browsers
    return `video/${ext}`;
  };

  // For non-mp4, hide quality selector
  const showQuality = ext === 'mp4';

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-red-900 to-black">
        <div className="text-white text-xl animate-pulse">Loading video...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-0 md:p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Video Section */}
        <div className="flex-1">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg relative">
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full aspect-video bg-black"
            >
              {/* Quality sources for mp4, fallback to single source for other extensions */}
              {ext === 'mp4' ? (
                <>
                  {quality === '1080p' && (
                    <source src={`/videos/${id}_1080p.mp4`} type="video/mp4" />
                  )}
                  {quality === '720p' && (
                    <source src={`/videos/${id}_720p.mp4`} type="video/mp4" />
                  )}
                  {quality === '480p' && (
                    <source src={`/videos/${id}_480p.mp4`} type="video/mp4" />
                  )}
                </>
              ) : (
                <source src={`/videos/${id}.${ext}`} type={getMimeType(ext)} />
              )}
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Video Title & Meta */}
          <div className="mt-4 px-2 md:px-0">
            <h1 className="text-2xl font-bold mb-2 truncate">Playing: {id}.{ext}</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-400 text-sm mb-2">
              <span>1,234,567 views</span>
              <span>•</span>
              <span>Jun 16, 2025</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Channel Name</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9l-3 3m0 0l3 3m-3-3h12" /></svg>
                Like
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 15l3-3m0 0l-3-3m3 3H4" /></svg>
                Dislike
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                Share
              </button>
            </div>
            {/* Video Settings */}
            <div className="mt-6 bg-[#1a1a1a] p-4 rounded-xl w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Video Settings</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <label className="block mb-1 text-gray-300">Playback Speed</label>
                  <select
                    value={playbackRate}
                    onChange={handleSpeedChange}
                    className="bg-black text-white border border-gray-700 rounded px-3 py-1"
                  >
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x (Normal)</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2}>2x</option>
                  </select>
                </div>
                {showQuality && (
                  <div>
                    <label className="block mb-1 text-gray-300">Quality</label>
                    <select
                      value={quality}
                      onChange={handleQualityChange}
                      className="bg-black text-white border border-gray-700 rounded px-3 py-1"
                    >
                      <option value="1080p">1080p</option>
                      <option value="720p">720p</option>
                      <option value="480p">480p</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
            {/* Video Description */}
            <div className="mt-6 bg-[#181818] p-4 rounded-xl text-gray-300">
              <h3 className="font-semibold mb-2">Description</h3>
              <p>This is a sample video description. You can add more details about the video here, just like on YouTube.</p>
            </div>
          </div>
        </div>
        {/* Sidebar: Up Next (placeholder) */}
        <div className="w-full md:w-80 flex-shrink-0 mt-8 md:mt-0">
          <div className="bg-[#181818] rounded-xl p-4">
            <h2 className="text-lg font-bold mb-4">Up Next</h2>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <div className="w-24 h-14 bg-gray-700 rounded overflow-hidden"></div>
                <div className="flex-1">
                  <div className="text-white font-semibold truncate">Sample Up Next Video</div>
                  <div className="text-xs text-gray-400">Channel Name • 123K views</div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-24 h-14 bg-gray-700 rounded overflow-hidden"></div>
                <div className="flex-1">
                  <div className="text-white font-semibold truncate">Another Up Next Video</div>
                  <div className="text-xs text-gray-400">Channel Name • 99K views</div>
                </div>
              </div>
              {/* Add more up next videos as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
