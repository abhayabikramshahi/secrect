import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

const userProfiles = {
  sneha: {
    name: 'Sneha',
    bio: 'Hi, I am Sneha! I love making fun and creative videos. Follow me for more!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    banner: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    videos: [
      {
        id: '2023-12-10-02-02-21',
        title: 'Girl Showing Her Tits Ani Maja Aayo',
        views: '1.2K',
        duration: '00:30',
        channel: 'Sneha',
        isLocal: true,
        ext: 'mp4',
        user: 'sneha',
      },
    ],
  },
  siwani: {
    name: 'Siwani',
    bio: 'Hey, I am Siwani! Welcome to my channel for exclusive content and more.',
    avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
    banner: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    videos: [
      {
        id: '2025-06-16 22-35-52',
        title: 'Sample Local Video',
        views: '1.2K',
        duration: '00:30',
        channel: 'Siwani',
        isLocal: true,
        ext: 'mkv',
        user: 'siwani',
      },
    ],
  },
};

function UserProfile() {
  const { username } = useParams();
  const user = userProfiles[username];
  if (!user) return <div className="min-h-screen bg-black text-white flex items-center justify-center">User not found</div>;
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Banner */}
      <div className="w-full h-48 md:h-64 bg-gray-800 relative flex items-end justify-center">
        <img src={user.banner} alt="Banner" className="w-full h-full object-cover opacity-70 absolute top-0 left-0" />
        <div className="relative z-10 flex flex-col items-center mb-[-3rem]">
          <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg" />
        </div>
      </div>
      {/* Profile Info */}
      <div className="mt-20 text-center px-4">
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg text-gray-300 mb-4">{user.bio}</p>
      </div>
      {/* Videos */}
      <div className="w-full max-w-4xl px-4 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Videos</h2>
        {user.videos.length === 0 ? (
          <div className="text-gray-400">No videos yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {user.videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
