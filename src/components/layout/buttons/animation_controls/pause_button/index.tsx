import React from 'react'
import { FaPause } from 'react-icons/fa'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import './index.scss'

export default function PauseButton() {
  const { timeline } = useGSAPTimelineContext()

  const handleOnClick = () => {
    if (!timeline.paused()) timeline.pause()
  }

  return (
    <button
      id='pause_button'
      onClick={handleOnClick}
    >
      <FaPause />
    </button>
  )
}
