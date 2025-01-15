import React from 'react'
import { FaPlay } from 'react-icons/fa'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import './index.scss'

export default function PlayButton() {
  const { timeline } = useGSAPTimelineContext()

  const handleOnClick = () => {
    timeline.play()
  }

  return (
    <button
      id='play_button'
      onClick={handleOnClick}
    >
      <FaPlay />
    </button>
  )
}
