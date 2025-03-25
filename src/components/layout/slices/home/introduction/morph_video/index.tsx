import { RefObject, useEffect, useRef } from 'react'
import anime from 'animejs'
import gsap from 'gsap'

import './index.scss'

export type TMorphVideo = {
  introductionSectionRef: RefObject<HTMLElement>
}

const MorphVideo = ({ introductionSectionRef }: TMorphVideo) => {
  const pathRef = useRef<SVGPathElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !pathRef.current) return

    const morphAnimation = anime({
      targets: pathRef.current,
      d: [
        {
          value:
            'M 2.8958327,0.24999949 H 82.27083 c 1.465792,0 2.645834,1.18004161 2.645834,2.64583321 V 45.229166 c 0,1.465792 -1.180042,2.645833 -2.645834,2.645833 H 2.8958327 c -1.4657916,0 -2.64583321,-1.180041 -2.64583321,-2.645833 V 2.8958327 c 0,-1.4657916 1.18004161,-2.64583321 2.64583321,-2.64583321 z',
        },
        // { value: 'M 105.4778,5.2366312 C 102.55703,4.985178 2.8959473,0.25011393 2.8959473,0.25011393 1.4545255,-0.01605136 0.25011393,1.4301571 0.25011393,2.8959473 V 21.416781 c 0,1.46579 1.20441157,2.379667 2.64583337,2.645833 L 105.4778,76.674131 206.62511,119.31261 c 2.92079,0.25145 5.29167,-2.36008 5.29167,-5.29166 V 5.5417806 c 0,-2.9315803 -2.37088,-5.04021292 -5.29167,-5.29166667 z' },
        {
          value:
            'M 2.8958327,0.24999949 H 82.27083 c 1.465792,0 2.645834,1.18004161 2.645834,2.64583321 V 45.229166 c 0,1.465792 -1.180042,2.645833 -2.645834,2.645833 H 2.8958327 c -1.4657916,0 -2.64583321,-1.180041 -2.64583321,-2.645833 V 2.8958327 c 0,-1.4657916 1.18004161,-2.64583321 2.64583321,-2.64583321 z',
        },
        /* { value: 'M 5.541666,0.24999949 H 206.625 c 2.93159,0 5.29167,2.36008331 5.29167,5.29166651 V 114.02083 c 0,2.93159 -2.36008,5.29167 -5.29167,5.29167 H 5.541666 c -2.9315832,0 -5.29166651,-2.36008 -5.29166651,-5.29167 V 5.541666 c 0,-2.9315832 2.36008331,-5.29166651 5.29166651,-5.29166651 z'} */
        /* {
          value:
            'M 5.541666,0.24999949 H 418.29168 c 2.93158,0 5.29166,2.36008331 5.29166,5.29166651 V 233.08333 c 0,2.93159 -2.36008,5.29167 -5.29166,5.29167 H 5.541666 c -2.9315832,0 -5.29166651,-2.36008 -5.29166651,-5.29167 V 5.541666 c 0,-2.9315832 2.36008331,-5.29166651 5.29166651,-5.29166651 z',
        } */
      ],
      easing: 'linear',
      duration: 1,
      autoplay: false,
    })

    gsap.to(morphAnimation, {
      progress: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.container',
        start: 'top center',
        end: 'top top',
        scrub: 1,
        // markers: true,
      },
      onUpdate: () => {
        morphAnimation.seek(morphAnimation.duration * morphAnimation.progress)
      },
    })

    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        const playButton = document.createElement('button')
        playButton.innerHTML = 'Play Video'
        Object.assign(playButton.style, {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 20px',
          cursor: 'pointer',
        })
        playButton.onclick = () => {
          videoRef.current?.play()
          playButton.remove()
        }
        document.getElementById('morph_video_container')?.appendChild(playButton)
      })
    }
  }, [])

  return (
    <div
      id='morph_video_container'
      className='container'
    >
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
          objectFit: 'fill',
        }}
        controls
      >
        <source
          src='/videos/test.mp4'
          type='video/mp4'
        />
      </video>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <clipPath
            id='morphClip'
            clipPathUnits='objectBoundingBox'
          >
            <path
              ref={pathRef}
              d='M 2.8958327,0.24999949 H 39.937498 c 1.465792,0 2.645834,1.18004161 2.645834,2.64583321 V 21.416666 c 0,1.465792 -1.180042,2.645833 -2.645834,2.645833 H 2.8958327 c -1.4657916,0 -2.64583321,-1.180041 -2.64583321,-2.645833 V 2.8958327 c 0,-1.4657916 1.18004161,-2.64583321 2.64583321,-2.64583321 z'
              transform='scale(0.01)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default MorphVideo
