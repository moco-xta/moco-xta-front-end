'use client'

import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import './index.scss'

export default function ReverseButton() {
  const [reversed, setReversed] = useState<boolean>(false)

  const { timeline } = useGSAPTimelineContext()

  const handleOnClick = () => {
    if (!timeline.reversed()) {
      timeline.reversed(true)
      setReversed(true)
    } else {
      timeline.reversed(false)
      setReversed(false)
    }
  }

  return (
    <div
      id='reverse_button'
      style={{
        background: 'chartreuse',
      }}
      onClick={handleOnClick}
    >
      <FaPlay
        style={{
          transform: `${!reversed ? 'rotate(180deg)' : 'rotate(0deg)'}`,
        }}
      />
    </div>
  )
}
