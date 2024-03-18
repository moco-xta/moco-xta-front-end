import React from 'react'

import InternalLink from '@/components/links/internal_link'

import './index.scss'

export default function SeeAllReviews() {
  return (
    <div id='view_all_reviews_link_container'>
      <InternalLink
        routeKey={'ALL_REVIEWS'}
        translationKey={'ADD_REVIEW.SEE_ALL_REVIEWS'}
      />
    </div>
  )
}
