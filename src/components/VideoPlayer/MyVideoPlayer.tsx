

import React, { useState, useRef } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';

interface MyVideoPlayerProps {
  videoId: unknown;
}

const MyVideoPlayer: React.FC<MyVideoPlayerProps> = ({ videoId }) => {
  const [hovered, setHovered] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const onPlayerReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="w-full aspect-video relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        playerRef.current?.pauseVideo();
      }}
    >
      {!hovered ? (
        <img
          src={thumbnailUrl}
          alt="YouTube thumbnail"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
      ) : (
        <YouTube
          videoId={videoId}
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: 1,
              controls: 1,
              mute: 1,
            },
          }}
          className="absolute inset-0 w-full h-full transition-opacity duration-500"
          onReady={onPlayerReady}
        />
      )}
    </div>
  );
};

export default MyVideoPlayer;

