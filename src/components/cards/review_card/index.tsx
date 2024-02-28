import React from 'react'

import { ReviewCardInterface } from '@/interfaces/components/cards/reviewCardInterface'

import './index.scss'

export default function ReviewCard({ review, name, role, rating }: ReviewCardInterface) {
  return (
    <div id='review_card'>
      <p>{review}</p>
      <p>{name}</p>
      <p>{role}</p>
      <p>{rating}</p>
    </div>
  )
}
