import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import './index.scss'

export default function ReviewsContainer() {
  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )

  return (
    <div
      id='reviews_container'
      className={`reviews_containers ${addReviewIsOpen ? '' : 'open'}`}
    >
      REVIEWS
    </div>
  )
}
