import React from 'react';
import VideoCard from '../components/VideoCard';

const localVideos = [
	{
		id: '2025-06-16 22-35-52',
		title: 'Aaja maile mero bubu dekhaye maja aaigo sathi haru sanga huda..',
		views: '1.2K',
		duration: '00:30',
		channel: 'Akanshya',
		isLocal: true,
		ext: 'mkv',
	},
];

function Home() {
	return (
		<div className="min-h-screen bg-black py-8 px-2 md:px-8">
			<h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-left tracking-tight">
				Recommended Videos
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{localVideos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
		</div>
	);
}

export default Home;
