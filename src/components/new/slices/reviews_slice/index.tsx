import React from 'react'

import ReviewsTextBlock from './reviews'
import ReviewCards from './review_cards'

import './index.scss'

export default function ReviewsSlice() {
  return (
    <section id='reviews_slice'>
      <ReviewsTextBlock />
      <ReviewCards />
    </section>
  )
}
