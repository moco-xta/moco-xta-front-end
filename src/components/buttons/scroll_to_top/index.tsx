'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import './index.scss'

export default function ScrollToTop() {
  const progressRef = useRef<HTMLDivElement>(null!)

  function handleScroll() {
    const position = window.scrollY
    const height = document.documentElement.offsetHeight - document.documentElement.clientHeight
    const scrollPercentage = (position * 100) / height
    console.log('precentage', scrollPercentage)
    if(position > 0) {
      progressRef.current.style.display = 'grid'
    } else {
      progressRef.current.style.display = 'none'
    }
    /* progressRef.current.style.backgroundColor = `conic-gradient (#03cc65 ${scrollPercentage}%, #d7d7d7 ${scrollPercentage}%)`; */
    progressRef.current.style.background = `conic-gradient(#03cc65 ${scrollPercentage}%, #d7d7d7 ${scrollPercentage}%)`
    /* progressRef.current.style.backgroundColor = `rgba(${scrollPercentage}, ${scrollPercentage}, ${scrollPercentage}, 1)` */
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div
      ref={progressRef}
      id='progress'
      onClick={scrollToTop}
    >
      <span
        id='progress_value'
      >
        <FaArrowUp />
      </span>
    </div>
  )
}
