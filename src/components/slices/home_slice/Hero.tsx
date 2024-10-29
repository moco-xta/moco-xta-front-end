import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as videosConstants } from '@/constants/assets/videosConstants.json'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760
      ? videosConstants.JAVASCRIPT_MASTERY.SMALL_HERO_VIDEO
      : videosConstants.JAVASCRIPT_MASTERY.HERO_VIDEO,
  )

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(videosConstants.JAVASCRIPT_MASTERY.SMALL_HERO_VIDEO)
    } else {
      setVideoSrc(videosConstants.JAVASCRIPT_MASTERY.HERO_VIDEO)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p
          id='hero'
          className='hero-title'
        >
          iPhone 15 Pro
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source
              src={videoSrc}
              type='video/mp4'
            />
          </video>
        </div>
      </div>

      <div
        id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a
          href='#highlights'
          className='btn'
        >
          Buy
        </a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
