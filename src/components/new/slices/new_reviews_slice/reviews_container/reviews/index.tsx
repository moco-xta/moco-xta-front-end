import React from 'react'

import ReviewsTextBlockContainer from './reviews_text_block_container'
import ReviewCards from './review_cards'

import './index.scss'

export default function Reviews() {
  return (
    <div id='reviews'>
      <ReviewsTextBlockContainer />
      <ReviewCards />
    </div>
  )
}
