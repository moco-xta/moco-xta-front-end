import React from 'react'

import AddReview from './add_review'
import Reviews from './reviews'

import './index.scss'

export default function ReviewsSlice() {
  return (
    <section id='reviews_slice'>
      <AddReview />
      <Reviews />
    </section>
  )
}
