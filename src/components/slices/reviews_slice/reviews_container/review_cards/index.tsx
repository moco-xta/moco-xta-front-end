import React from 'react'

import { ReviewPayloadInterface } from '@/interfaces/reduxApiInterfaces'

import ReviewCard from '../../review_card'

import './index.scss'

const REVIEWS_TEST: ReviewPayloadInterface[] = [
  {
    firstName: 'Federico',
    role: 'DEVELOPER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    date: new Date('2024-5-20'),
  },
  {
    firstName: 'Federico',
    role: 'DESIGNER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 4,
    date: new Date('2024-5-20'),
  },
  {
    firstName: 'Antoine',
    role: 'PROJECT_MANAGER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 3,
    date: new Date('2024-5-20'),
  },
  {
    firstName: 'Charly',
    role: 'DESIGNER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 2,
    date: new Date('2024-5-20'),
  },
  {
    firstName: 'Toto',
    role: 'DEVELOPER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 1,
    date: new Date('2024-5-20'),
  },
  {
    firstName: 'Jean-Mich',
    role: 'PROJECT_MANAGER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 0,
    date: new Date('2024-5-20'),
  },
  {
    firstName: 'Pierre',
    role: 'OTHER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    date: new Date('2024-5-20'),
  },
]

export default function ReviewCards() {
  return (
    <div
      id='review_cards'
      className='snap_inline'
    >
      {REVIEWS_TEST.map((review, index) => (
        <ReviewCard
          key={`review_card_${index}`}
          review={review}
          cardStyle={{
            margin: '30px 10px',
          }}
        />
      ))}
    </div>
  )
}
