import React from 'react'

import { ReviewCardInterface } from '@/interfaces/new/componentsInterfaces'

import './index.scss'

export default function ReviewCard({ review, reviewCardStyle }: ReviewCardInterface) {
  return (
    <div className='review_card' style={reviewCardStyle}>
      <p>"{review.review}"</p>
      <div>{review.rating}</div>
      {/* @ts-ignore */}
      <span>{review.hasOwnProperty('firstName') ? review.firstName : 'firstName test'}</span>
      <span>{review.role}</span>
    </div>
  )
}
