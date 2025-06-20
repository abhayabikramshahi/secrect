import React from 'react';
import VideoCard from '../components/VideoCard';

const localVideos = [
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
	{
		id: '2025-06-16 22-35-52',
		title: 'Bubu Khelaudai xu keta ho aau chika!!',
		views: '1.2K',
		duration: '00:30',
		channel: 'Siwani',
		isLocal: true,
		ext: 'mkv',
		user: 'siwani',
	},
	{
		id: 'VID_20250617_232735_107',
		title: 'VID_20250617_232735_107',
		views: '1.2K',
		duration: '00:30',
		channel: 'Siwani',
		isLocal: true,
		ext: 'mp4',
		user: 'siwani',
	},
	{
		id: 'VID_20250617_232751_494',
		title: 'VID_20250617_232751_494',
		views: '1.2K',
		duration: '00:30',
		channel: 'Siwani',
		isLocal: true,
		ext: 'mp4',
		user: 'siwani',
	},
	{
		id: '2023-10-17-00-35-43',
		title: '2023-10-17-00-35-43',
		views: '1.2K',
		duration: '00:30',
		channel: 'Sneha',
		isLocal: true,
		ext: 'mp4',
		user: 'sneha',
	},
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

function Home() {
	return (
		<div className="min-h-screen bg-black py-4 px-1 md:px-8">
			<h1 className="text-xl md:text-4xl font-semibold text-white mb-4 text-left tracking-tight px-2 md:px-0">
				Recommended Videos
			</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6">
				{localVideos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
		</div>
	);
}

export default Home;
