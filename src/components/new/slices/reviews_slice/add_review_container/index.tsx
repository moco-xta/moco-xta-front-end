import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import AddReview from '../add_review'
import AddReviewButton from '@/components/new/buttons/add_review_button'

import './index.scss'

export default function AddReviewContainer() {
  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )

  return (
    <div
      id='add_review_container'
      className={addReviewIsOpen ? 'open' : ''}
    >
      <AddReview />
      <AddReviewButton />
    </div>
  )
}
