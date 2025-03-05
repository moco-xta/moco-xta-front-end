// components/VideoSVG.jsx
import { useEffect, useRef } from 'react';

const VideoSVG = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Handle autoplay restrictions
        console.log('Video play prevented:', error);
      });
    }
  }, []);

  return (
    <svg viewBox="0 0 500 500" width="500" height="500">
      {/* Define a circle shape */}
      <foreignObject x="0" y="0" width="500" height="500" overflow="visible">
        <video
          ref={videoRef}
          width="500"
          height="500"
          muted
          loop
          playsInline
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        >
          <source src="/videos/test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </foreignObject>
    </svg>
  );
};

export default VideoSVG;