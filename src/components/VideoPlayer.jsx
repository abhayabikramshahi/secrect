// pages/VideoPlayer.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

function VideoPlayer() {
  const { id } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const ext = searchParams.get('ext') || 'mp4';
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [quality, setQuality] = useState('1080p');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    document.title = `${id} - Watch Free Video`;
  }, [id]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    if (videoRef.current) {
      if (ext === 'mp4') {
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [quality, ext]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'f' || e.key === 'F') {
        handleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [id]);

  const handleSpeedChange = (e) => {
    const rate = parseFloat(e.target.value);
    setPlaybackRate(rate);
    if (videoRef.current) videoRef.current.playbackRate = rate;
  };

  const handleQualityChange = (e) => {
    setQuality(e.target.value);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      videoRef.current.paused
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const getMimeType = (ext) => {
    if (ext === 'mp4') return 'video/mp4';
    if (ext === 'mkv' || ext === 'mk4') return 'video/webm';
    return `video/${ext}`;
  };

  const showQuality = ext === 'mp4';

  let upNext;
  if (id === '2023-12-10-02-02-21') {
    upNext = {
      id: '2025-06-16 22-35-52',
      title: 'Sample Local Video',
      channel: 'Siwani',
      ext: 'mkv',
      isLocal: true,
      user: 'siwani',
    };
  } else if (id === 'some-other-id') {
    upNext = {
      id: '2023-12-10-02-02-21',
      title: 'Girl Showing Her Tits Ani Maja Aayo',
      channel: 'Sneha',
      ext: 'mp4',
      isLocal: true,
      user: 'sneha',
    };
  } else {
    upNext = {
      id: 'VID_20250617_232735_107',
      title: 'Girl Showing Her Tits Ani Maja Aayo',
      channel: 'Sneha',
      ext: 'mp4',
      isLocal: true,
      user: 'sneha',
    };
  }

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
          <div className="bg-black rounded-lg overflow-hidden shadow-lg relative flex justify-center items-center">
            <video
              ref={videoRef}
              controls
              className="w-full max-w-5xl aspect-video bg-black"
              style={{ minHeight: '360px', maxHeight: '80vh' }}
            >
              {ext === 'mp4' ? (
                <source src={`/videos/${id}.mp4`} type="video/mp4" />
              ) : (
                <source src={`/videos/${id}.${ext}`} type={getMimeType(ext)} />
              )}
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-4 px-2 md:px-0">
            <h1 className="text-2xl font-bold mb-2 truncate">Playing: {id}.{ext}</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-400 text-sm mb-2">
              <span>1,234,567 views</span>
              <span>•</span>
              <span>Jun 16, 2025</span>
              <span className="hidden md:inline">•</span>
              {id === '2023-12-10-02-02-21' && (
                <a href="/user/sneha" className="text-orange-400 hover:underline font-semibold">Sneha</a>
              )}
              {id === '2025-06-16 22-35-52' && (
                <a href="/user/siwani" className="text-orange-400 hover:underline font-semibold">Siwani</a>
              )}
            </div>

            <div className="flex gap-2 mt-2">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">Like</button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">Dislike</button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">Share</button>
            </div>

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

            <div className="mt-6 bg-[#181818] p-4 rounded-xl text-gray-300">
              <h3 className="font-semibold mb-2">Description</h3>
              <p>This is a sample video description. You can add more details about the video here, just like on YouTube.</p>
            </div>
          </div>
        </div>

        {/* Sidebar: Up Next */}
        <div className="w-full md:w-80 flex-shrink-0 mt-8 md:mt-0">
          <div className="bg-[#181818] rounded-xl p-0 overflow-hidden">
            <h2 className="text-lg font-bold mb-4 px-4 pt-4">Up Next</h2>
            <div className="divide-y divide-gray-800">
              <a
                href={`/video/${upNext.id}?ext=${upNext.ext}`}
                className="flex gap-3 items-center hover:bg-gray-900 transition px-4 py-3 cursor-pointer group"
              >
                <div className="w-32 h-20 bg-black rounded overflow-hidden flex items-center justify-center relative">
                  <video
                    src={`/videos/${upNext.id}.${upNext.ext}`}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                  />
                  <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded">00:30</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold truncate group-hover:text-orange-400">
                    {upNext.title}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">by {upNext.channel}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
