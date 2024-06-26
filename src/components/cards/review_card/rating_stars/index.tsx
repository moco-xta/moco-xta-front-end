import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

import { RatingStarsInterface } from '@/interfaces/componentsInterfaces'

import './index.scss'

export default function RatingStars({ rating }: RatingStarsInterface) {
  return (
    <div className='rating_stars_wrapper'>
      {[...Array(5)].map((_, index) => (
        <IoStarSharp
          key={`rating_start_${index}`}
          size={40}
          color={rating >= index + 1 ? 'gold' : 'grey'}
        />
      ))}
    </div>
  )
}
