import { RefObject, useEffect, useRef } from 'react'
import anime from 'animejs'
import gsap from 'gsap'

export type TMorphVideo = {
  introductionSectionRef: RefObject<HTMLElement>
}

const MorphVideo = ({ introductionSectionRef }: TMorphVideo) => {
  const pathRef = useRef<SVGPathElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !pathRef.current) return

    // Anime.js morph animation
    const morphAnimation = anime({
      targets: pathRef.current,
      d: [
        { value: 'M 10,30 50,30 50,70 10,70 Z' }, // Square
        { value: 'M 30,10 70,10 70,50 30,50 Z' }, // Diamond
        { value: 'M 20,20 80,20 80,80 20,80 Z' }, // Rectangle
        { value: 'M 32.400619,54.148975 H 185.52682 c 6.63902,0 11.98379,5.344771 11.98379,11.983791 v 81.667304 c 0,6.63902 -5.34477,11.98379 -11.98379,11.98379 H 32.400619 c -6.63902,0 -11.983791,-5.34477 -11.983791,-11.98379 V 66.132766 c 0,-6.63902 5.344771,-11.983791 11.983791,-11.983791 z' }, // Complex shape
      ],
      easing: 'linear',
      duration: 1, // Set duration to 1ms since GSAP will control it
      autoplay: false, // Disable autoplay
    })

    // GSAP ScrollTrigger
    gsap.to(morphAnimation, {
      progress: 1, // Animate from 0 to 100%
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        start: 'top bottom', // Start animation when the element enters the viewport
        end: 'top top', // End when it reaches the top
        scrub: 1, // Smooth scrolling effect
      },
      onUpdate: () => {
        morphAnimation.seek(morphAnimation.duration * morphAnimation.progress) // Sync anime.js
      },
    })

    // Handle video autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        const playButton = document.createElement('button')
        playButton.innerHTML = 'Play Video'
        playButton.style.position = 'absolute'
        playButton.style.top = '20px'
        playButton.style.left = '20px'
        playButton.onclick = () => videoRef.current?.play()
        document.querySelector('.container')?.appendChild(playButton)
      })
    }
  }, [])

  return (
    <div
      className='container'
      style={{ position: 'relative', width: '100vw', height: '100vw' }}
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
