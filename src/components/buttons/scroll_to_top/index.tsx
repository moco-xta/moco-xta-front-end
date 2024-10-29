import React, { useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowUp } from 'react-icons/fa'

import useScroll from '@/hooks/useScroll'

import './index.scss'

gsap.registerPlugin(useGSAP)

export default function ScrollToTop() {
  const svgRef = useRef<SVGSVGElement>(null!)

  const { y, scrollPercentage } = useScroll()

  const lenis = useLenis()

  const scrollToTopRef = useRef<HTMLDivElement>(null!)
  const progressRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    gsap.to(svgRef.current, {
      rotation: 360, 
      transformOrigin:"center",
      duration: 5,
      ease: 'none',  
      repeat:-1
    })
  })

  useEffect(() => {
    if (y < 100) {
      if (scrollToTopRef.current) scrollToTopRef.current.style.display = 'none'
    } else {
      if (scrollToTopRef.current) scrollToTopRef.current.style.display = 'flex'
    }
    if (progressRef.current)
      /* progressRef.current.style.background = `conic-gradient(${variables.grey_ededed} ${scrollPercentage}%, ${variables.background_dark} ${scrollPercentage}%)` */
      progressRef.current.style.background = `conic-gradient(${'#f6f700'} ${scrollPercentage}%, ${'#ff0000'} ${scrollPercentage}%)`
  }, [y, scrollPercentage])

  function scrollToTop() {
    /* window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }) */
    lenis!.scrollTo('top')
  }

  useEffect(() => {
    console.log('svgRef.current', svgRef.current)
  }, [svgRef.current])

  return (
    <div
      ref={scrollToTopRef}
      id='scroll_to_top'
    >
      {/* <div
        ref={progressRef}
        id='progress'
        onClick={scrollToTop}
      >
        <span id='progress_value'>
          <FaArrowUp size={20} />
        </span>
      </div> */}
      <svg
        ref={svgRef}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='circlePath'
          d='M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0'
        />
        <text>
          <textPath href='#circlePath' font-size="1.5em" fill='white'>Scroll to top!</textPath>
        </text>
      </svg>
    </div>
  )
}
