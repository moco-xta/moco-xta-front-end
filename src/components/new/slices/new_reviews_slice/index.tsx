import React from 'react'

import AddReviewContainer from './add_review_container'
import ReviewsContainer from './reviews_container'

import './index.scss'

export default function NewReviewsSlice() {
  return (
    <div id='new_reviews_slice'>
      <AddReviewContainer />
      <ReviewsContainer />
    </div>
  )
}
