'use client'

import React, { useEffect, useRef } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import useScroll from '@/hooks/useScroll'

import './index.scss'

export default function ScrollToTop() {
  const { y, scrollPercentage } = useScroll()

  const scrollToTopRef = useRef<HTMLDivElement>(null!)
  const progressRef = useRef<HTMLDivElement>(null!)

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      ref={scrollToTopRef}
      id='scroll_to_top'
    >
      <div
        ref={progressRef}
        id='progress'
        onClick={scrollToTop}
      >
        <span id='progress_value'>
          <FaArrowUp size={20} />
        </span>
      </div>
    </div>
  )
}
