'use client'

import React, { useEffect, useRef } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import useScroll from '@/hooks/useScroll'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function ScrollToTop() {
  const { y, scrollPercentage } = useScroll()

  const progressRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (y < 100) {
      if (progressRef.current) progressRef.current.style.display = 'none'
    } else {
      if (progressRef.current) progressRef.current.style.display = 'grid'
    }
    if (progressRef.current)
      progressRef.current.style.background = `conic-gradient(${variables.grey_ededed} ${scrollPercentage}%, ${variables.background_dark} ${scrollPercentage}%)`
  }, [y])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      ref={progressRef}
      id='progress'
      onClick={scrollToTop}
    >
      <span id='progress_value'>
        <FaArrowUp size={20} />
      </span>
    </div>
  )
}
