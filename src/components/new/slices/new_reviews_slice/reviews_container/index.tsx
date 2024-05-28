import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import useResize from '@/hooks/new/useResize'

import AddReviewButton from '@/components/new/buttons/add_review_button'
import Reviews from './reviews'

import './index.scss'

export default function ReviewsContainer() {
  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )

  const { isDesktop } = useResize()

  return (
    <div
      id='reviews_container'
      className={`reviews_containers ${addReviewIsOpen ? '' : 'open'}`}
    >
      {/* {isDesktop &&  */}<AddReviewButton />{/* } */}
      {/* <Reviews /> */}
    </div>
  )
}
