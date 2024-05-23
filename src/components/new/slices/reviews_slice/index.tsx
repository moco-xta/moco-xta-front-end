import React from 'react'

import AddReviewContainer from './add_review_container'
import ReviewsContainer from './reviews_container'

import './index.scss'

export default function ReviewsSlice() {
  return (
    <section id='reviews_slice'>
      <AddReviewContainer />
      <ReviewsContainer />
    </section>
  )
}
