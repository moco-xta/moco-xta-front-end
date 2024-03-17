import React from 'react'

import InternalLink from '@/components/buttons/internal_link'

import './index.scss'

export default function SeeAllReviews() {
  return (
    <div id='view_all_reviews_link_container'>
      <InternalLink
        routeKey={'REVIEWS'}
        translationKey={'ADD_REVIEW.SEE_ALL_REVIEWS'}
      />
    </div>
  )
}
