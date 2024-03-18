'use client'

import React from 'react'

import LastReviewsCards from './last_reviews_cards'
import AddReviewLink from '../../links/add_review_link'
import SeeAllReviewsLink from '../../links/see_all_reviews_link'

import './index.scss'

export default function LastReviewsSlice() {
  return (
    <div id='last_reviews_slice'>
      <div id='last_reviews_content'>
        <h2>Reviews</h2>
        <LastReviewsCards />
        <div id='add_review_and_see_all_reviews_link_container'>
          <AddReviewLink />
          <SeeAllReviewsLink />
        </div>
      </div>
    </div>
  )
}
