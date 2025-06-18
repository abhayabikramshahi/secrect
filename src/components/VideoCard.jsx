import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ video }) {
	const videoRef = useRef(null);
	const canvasRef = useRef(null);
	const [thumb, setThumb] = React.useState(video.thumbnail || null);
	const [liked, setLiked] = React.useState(false);

	useEffect(() => {
		if (!video.isLocal || thumb) return;
		const videoEl = videoRef.current;
		const canvasEl = canvasRef.current;
		if (!videoEl || !canvasEl) return;
		const seekAndCapture = () => {
			const capture = () => {
				canvasEl.width = videoEl.videoWidth;
				canvasEl.height = videoEl.videoHeight;
				canvasEl
					.getContext('2d')
					.drawImage(
						videoEl,
						0,
						0,
						canvasEl.width,
						canvasEl.height
					);
				setThumb(canvasEl.toDataURL('image/png'));
			};
			videoEl.removeEventListener('seeked', capture);
			videoEl.addEventListener('seeked', capture, { once: true });
			videoEl.currentTime = 0.1;
		};
		videoEl.addEventListener('loadedmetadata', seekAndCapture, { once: true });
		return () => videoEl.removeEventListener('loadedmetadata', seekAndCapture);
	}, [video.isLocal, thumb]);

	const handleLike = (e) => {
		e.preventDefault();
		setLiked((prev) => !prev);
	};

	const handleVideoClick = (e) => {
		// Always reload the page when navigating to a video
		e.preventDefault();
		window.location.href = `/video/${video.id}?ext=${video.ext || 'mp4'}`;
	};

	return (
		<div onClick={handleVideoClick}>
			<div className="rounded-lg overflow-hidden bg-[#111] hover:bg-[#1a1a1a] transition duration-200 cursor-pointer">
				{video.isLocal ? (
					thumb ? (
						<img
							src={thumb}
							alt={video.title}
							className="w-full h-48 object-cover bg-black"
						/>
					) : (
						<>
							<video
								ref={videoRef}
								src={`/videos/${video.id}.${video.ext}`}
								className="w-full h-48 object-cover bg-black hidden"
								preload="metadata"
								muted
							/>
							<canvas ref={canvasRef} className="hidden" />
							<div className="w-full h-48 flex items-center justify-center bg-black text-gray-500 text-xs">
								Loading thumbnail...
							</div>
						</>
					)
				) : (
					<img
						src={video.thumbnail}
						alt={video.title}
						className="w-full h-48 object-cover"
					/>
				)}
				<div className="p-4 text-white">
					<h2 className="text-lg font-semibold truncate">{video.title}</h2>
					<p className="text-sm text-gray-400">{video.channel}</p>
					<div className="flex items-center justify-between mt-2">
						<div className="text-xs text-gray-500">
							{video.views} views • {video.duration}
						</div>
						<button
							onClick={handleLike}
							className={`ml-2 text-lg ${
								liked ? 'text-orange-500' : 'text-gray-400'
							} hover:text-orange-500 transition`}
							aria-label="Like video"
						>
							{liked ? '❤️' : '🤍'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
