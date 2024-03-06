import React from 'react'

import { ReviewCardInterface } from '@/interfaces/components/cards/reviewCardInterface'
import RatingStars from './rating_stars'

import './index.scss'

export default function ReviewCard({
  review,
  name,
  role,
  rating,
}: ReviewCardInterface) {
  return (
    <div id='review_card'>
      <p className='quote_up'>"</p>
      <p className='review'>{review}</p>
      <p className='quote_down'>"</p>
      <div className='rating_stars_container'>
        <RatingStars rating={rating} />
      </div>
      <div className='name_role_container'>
        <p className='name'>{name}</p>
        <p className='role'>{role}</p>
      </div>
    </div>
  )
}
