import React from 'react'

import InternalLink from '@/components/links/internal_link'

import './index.scss'

export default function SeeAllReviewsLink() {
  return (
    <InternalLink
      routeKey={'ALL_REVIEWS'}
      translationKey={'HOME.LAST_REVIEWS.SEE_ALL_REVIEWS'}
    />
  )
}
