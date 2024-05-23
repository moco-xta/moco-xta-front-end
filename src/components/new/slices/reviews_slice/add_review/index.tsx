import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import AddReviewButton from '@/components/new/buttons/add_review_button'

import './index.scss'

export default function AddReview() {
  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )

  return (
    <div
      id='add_review_container'
      className={addReviewIsOpen ? 'open' : ''}
    >
      <div id='add_review'>
        ADD REVIEW
      </div>
      <AddReviewButton />
    </div>
  )
}
