import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const DeformedVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const points = useRef<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
  ]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create draggable control points
    points.current.forEach((point, i) => {
      Draggable.create(`.control-point-${i}`, {
        bounds: containerRef.current,
        onDrag: () => updateClipPath(),
      });
    });

    // Update clip-path on window resize
    window.addEventListener('resize', updateClipPath);
    return () => window.removeEventListener('resize', updateClipPath);
  }, []);

  const updateClipPath = () => {
    if (!containerRef.current) return;

    const clipPath = points.current
      .map(point => {
        const x = (point.x / containerRef.current!.offsetWidth) * 100;
        const y = (point.y / containerRef.current!.offsetHeight) * 100;
        return `${x}% ${y}%`;
      })
      .join(', ');

    // Apply same deformation to both container and video
    gsap.set([containerRef.current, videoRef.current], {
      clipPath: `polygon(${clipPath})`,
    });
  };

  return (
    <div className="relative w-[600px] h-[400px] mx-auto" ref={containerRef}>
      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/test.mp4" type="video/mp4" />
      </video>

      {/* Control points */}
      {points.current.map((_, i) => (
        <div
          key={i}
          className={`absolute w-4 h-4 bg-red-500 rounded-full cursor-grab control-point-${i}`}
          style={{
            left: `${points.current[i].x}%`,
            top: `${points.current[i].y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default DeformedVideo;