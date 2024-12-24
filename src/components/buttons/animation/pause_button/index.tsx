'use client'

import React, { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import './index.scss'

export default function PauseButton() {
  const [paused, setPaused] = useState<boolean>(false)

  /* const { timeline } = useGSAPTimelineContext() */

  /* const handleOnClick = () => {
    if (!paused) {
      timeline.pause()
      setPaused(true)
    } else {
      timeline.play()
      setPaused(false)
    }
  } */

  return (
    <div
      id='pause_button'
      style={{
        // background: !paused ? variables.success_light_color : variables.alert_light_color // TODO: Issue with variables!!! Weird...
        background: !paused ? 'chartreuse' : 'red',
      }}
      /* onClick={handleOnClick} */
    >
      {!paused ? <FaPause /> : <FaPlay />}
    </div>
  )
}
