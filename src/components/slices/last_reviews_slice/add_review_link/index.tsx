import React from 'react'

import InternalLink from '@/components/buttons/internal_link'

import './index.scss'

export default function AddReviewLink() {
  return (
    <InternalLink routeKey={'ADD_REVIEW'} translationKey={'HOME.LAST_REVIEWS.ADD_A_REVIEW'} />
  )
}
