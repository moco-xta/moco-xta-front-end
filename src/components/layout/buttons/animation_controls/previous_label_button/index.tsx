import React from 'react'
import { FaStepBackward } from 'react-icons/fa'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import './index.scss'

export default function PreviousLabelButton() {
  const { timeline } = useGSAPTimelineContext()

  const handleOnClick = () => {
    timeline.previousLabel(0)
  }

  return (
    <button
      id='previous_label_button'
      onClick={handleOnClick}
    >
      <FaStepBackward />
    </button>
  )
}
