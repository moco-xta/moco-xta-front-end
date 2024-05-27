import React, { useRef } from 'react'

import { ReviewCardInterface } from '@/interfaces/new/componentsInterfaces'

import useCardHoverEffect from '@/hooks/new/useCardHoverEffect'

import { default as cardHoverConstants } from '@/constants/new/cardHoverConstants.json'

import './index.scss'

export default function ReviewCard({
  review,
  cardStyle,
}: ReviewCardInterface) {
  const cardRef = useRef<HTMLDivElement>(null)

  useCardHoverEffect(cardRef, cardHoverConstants)

  return (
    <div
      ref={cardRef}
      className='review_card'
      style={cardStyle}
    >
      <p>&quot;{review.review}&quot;</p>
      <div>{review.rating}</div>
      <span>
        {review.hasOwnProperty('firstName')
          ? /* @ts-ignore */
            review.firstName
          : 'firstName test'}
      </span>
      <span>{review.role}</span>
    </div>
  )
}
