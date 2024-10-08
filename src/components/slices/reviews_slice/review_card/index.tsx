import React, { useRef } from 'react'

import { ReviewCardInterface } from '@/interfaces/componentsInterfaces'

import useCardHoverEffect from '@/hooks/useCardHoverEffect'

import RatingStars from './rating_stars'

import { default as cardHoverConstants } from '@/constants/cardHoverConstants.json'

import './index.scss'

export default function ReviewCard({ review, cardStyle }: ReviewCardInterface) {
  const cardRef = useRef<HTMLDivElement>(null)

  useCardHoverEffect(cardRef, cardHoverConstants)

  return (
    <div
      ref={cardRef}
      className='review_card'
      style={cardStyle}
    >
      <div>
        <p>
          &quot;
          {review.review}
          &quot;
        </p>
        <RatingStars rating={review.rating} />
      </div>
      <div>
        {/* @ts-ignore */}
        <p>
          {review.hasOwnProperty('firstName')
            ? /* @ts-ignore */
              review.firstName
            : 'firstName test'}
        </p>
        <p>{review.role}</p>
      </div>
    </div>
  )
}
