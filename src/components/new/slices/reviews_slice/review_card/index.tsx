import React from 'react'

import { ReviewCardInterface } from '@/interfaces/new/componentsInterfaces'

import './index.scss'

export default function ReviewCard({ review }: ReviewCardInterface) {
  return (
    <div className='review_card'>
      <p>{review.review}</p>
      <div>{review.rating}</div>
      <span>{review.firstName}</span>
      <span>{review.role}</span>
    </div>
  )
}
