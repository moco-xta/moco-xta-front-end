import React from 'react'

import ReviewsBlockUp from '../reviews_block_up'
import ReviewCards from '../review_cards'

import './index.scss'

export default function Reviews() {
  return (
    <div id='reviews'>
      <ReviewsBlockUp />
      <ReviewCards />
    </div>
  )
}
