import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import useScroll from '@/hooks/useScroll'

export default function LastProjectsBackground() {
  const { y } = useScroll()

  const backgroundRef = useRef<HTMLImageElement>(null!)

  function setFrame(y: number) {
    if (y < 1) y = 1
    const frame = Math.round((y + 1) / 50 + 1)
    const frameToString = frame.toString()
    const frameLength = frameToString.length
    var finalFrame = ''
    for (var i = 0; i < 4 - frameLength; i++) {
      finalFrame += '0'
    }
    finalFrame += frameToString
    return finalFrame
  }

  useEffect(() => {
    backgroundRef.current.src = `/img/png/projects_animation/inflated_project_frame_${setFrame(y - backgroundRef.current.getBoundingClientRect().top - 600)}.png`
  }, [backgroundRef, y])

  return (
    <Image
      ref={backgroundRef}
      id='last_projects_background'
      src='/img/png/projects_animation/inflated_project_frame_0001.png'
      alt='Last projects background'
    />
  )
}
