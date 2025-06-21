import React from 'react';
import VideoCard from '../components/VideoCard';

const localVideos = [
  {
    id: '2023-09-01-18-04-42',
    title: '2023-09-01-18-04-42',
    views: '1.2K',
    duration: '00:30',
    channel: 'Sneha',
    isLocal: true,
    ext: 'mp4',
    user: 'sneha',
  },
  {
    id: 'or jor se kro na video 1',
    title: 'or jor se kro na video 1',
    views: '1.2K',
    duration: '00:30',
    channel: 'Sneha',
    isLocal: true,
    ext: 'mp4',
    user: 'sneha',
  },
];

function PornVideos() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-left tracking-tight">Porn Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {localVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default PornVideos;