import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/store'
import { setAddReviewIsOpen } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function AddReviewButton() {
  const dispatch = useDispatch<AppDispatch>()

  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )

  const handleSetAddReviewIsOpen = () => {
    dispatch(setAddReviewIsOpen(!addReviewIsOpen))
  }

  return (
    <div
      id='add_review_button'
      onClick={handleSetAddReviewIsOpen}
    >
      {!addReviewIsOpen ? 'OPEN' : 'CLOSE'}
    </div>
  )
}
