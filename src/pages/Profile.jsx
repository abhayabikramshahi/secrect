import React from 'react';
import { useParams } from 'react-router-dom';

const profiles = {
  sneha: {
    name: 'Sneha',
    bio: 'Loves making videos and sharing fun moments.',
    avatar: '/vite.svg',
  },
  siwani: {
    name: 'Siwani',
    bio: 'Enjoys creative content and connecting with fans.',
    avatar: '/vite.svg',
  },
};

function Profile() {
  const { username } = useParams();
  const user = profiles[username] || profiles['sneha'];
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mb-4 border-4 border-orange-500" />
      <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
      <p className="text-lg text-gray-300 mb-4">{user.bio}</p>
      <div className="bg-[#181818] rounded-xl p-4 text-gray-400 max-w-md w-full text-center">
        More profile details coming soon!
      </div>
    </div>
  );
}

export default Profile;