import React from 'react'

import InternalLink from '@/components/buttons/internal_link'

import './index.scss'

export default function SeeAllReviewsLink() {
  return (
    <InternalLink routeKey={'REVIEWS'} translationKey={'HOME.LAST_REVIEWS.SEE_ALL_REVIEWS'} />
  )
}
