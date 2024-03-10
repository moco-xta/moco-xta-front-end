'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function ScrollToTop() {
  const progressRef = useRef<HTMLDivElement>(null!)

  function handleScroll() {
    const position = window.scrollY
    const height =
      document.documentElement.offsetHeight -
      document.documentElement.clientHeight
    const scrollPercentage = (position * 100) / height
    if (position < 100) {
      if (progressRef.current) progressRef.current.style.display = 'none'
    } else {
      if (progressRef.current) progressRef.current.style.display = 'grid'
    }
    if (progressRef.current)
      progressRef.current.style.background = `conic-gradient(${variables.grey_ededed} ${scrollPercentage}%, ${variables.background_dark} ${scrollPercentage}%)`
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
