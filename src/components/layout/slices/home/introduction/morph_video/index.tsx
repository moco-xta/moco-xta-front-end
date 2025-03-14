// components/MorphVideo.jsx
import { useEffect, useRef } from 'react'
import anime from 'animejs'

const MorphVideo = () => {
  const pathRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null!)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initAnimation = async () => {
      try {
        // Initialize morph animation
        anime({
          targets: pathRef.current,
          d: [
            { value: 'M 10,30 50,30 50,70 10,70 Z' }, // Square
            { value: 'M 30,10 70,10 70,50 30,50 Z' }, // Diamond
            { value: 'M 20,20 80,20 80,80 20,80 Z' }, // Rectangle
            { value: 'M 40,40 Q 60,20 80,40 T 60,60 40,40 Z' }, // Complex shape
          ],
          easing: 'easeInOutQuad',
          duration: 3000,
          loop: true,
        })

        // Handle video play
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Fallback for autoplay restrictions
            const playButton = document.createElement('button')
            playButton.innerHTML = 'Play Video'
            playButton.style.position = 'absolute'
            playButton.style.top = '20px'
            playButton.style.left = '20px'
            playButton.onclick = () => videoRef.current.play()
            document.querySelector('.container')!.appendChild(playButton)
          })
        }
      } catch (error) {
        console.error('Animation error:', error)
      }
    }

    initAnimation()
  }, [])

  return (
    <div
      className='container'
      style={{ position: 'relative', width: '500px', height: '500px' }}
    >
      {/* Video element with SVG clip-path */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          clipPath: 'url(#morphClip)',
          objectFit: 'cover',
        }}
      >
        <source
          src='/videos/test.mp4'
          type='video/mp4'
        />
      </video>

      {/* SVG definition for clip-path */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <clipPath
            id='morphClip'
            clipPathUnits='objectBoundingBox'
          >
            <path
              ref={pathRef}
              d='M 0.2,0.3 0.5,0.3 0.5,0.7 0.2,0.7 Z' // Initial shape
              transform='scale(0.01)' // Convert viewBox 100x100 to 0-1 coordinates
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default MorphVideo
