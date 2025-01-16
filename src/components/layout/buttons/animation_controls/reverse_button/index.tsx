import React from 'react'
import { FaPlay } from 'react-icons/fa'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import './index.scss'

export default function ReverseButton() {
  const { timeline } = useGSAPTimelineContext()

  const handleOnClick = () => {
    timeline.reverse()
  }

  return (
    <button
      id='play_button'
      onClick={handleOnClick}
    >
      <FaPlay id='reverse_icon' />
    </button>
  )
}
