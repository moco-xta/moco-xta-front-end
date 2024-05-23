import React, { useRef } from 'react'

import { ReviewCardInterface } from '@/interfaces/new/componentsInterfaces'

import useCardHoverEffect from '@/hooks/new/useCardHoverEffect'

import { default as cardHoverConstants } from '@/constants/new/cardHoverConstants.json'

import './index.scss'

export default function ReviewCard({ review, reviewCardStyle }: ReviewCardInterface) {
  const cardRef = useRef<HTMLDivElement>(null)

  useCardHoverEffect(
    cardRef,
    cardHoverConstants,
  )

  return (
    <div ref={cardRef} className='review_card' style={reviewCardStyle}>
      <p>"{review.review}"</p>
      <div>{review.rating}</div>
      {/* @ts-ignore */}
      <span>{review.hasOwnProperty('firstName') ? review.firstName : 'firstName test'}</span>
      <span>{review.role}</span>
    </div>
  )
}
