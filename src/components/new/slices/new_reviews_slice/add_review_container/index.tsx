import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import './index.scss'

export default function AddReviewContainer() {
  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )

  return (
    <div
      id='add_review_container'
      className={`reviews_containers ${addReviewIsOpen ? 'open' : ''}`}
    >
      ADD REVIEW
    </div>
  )
}
