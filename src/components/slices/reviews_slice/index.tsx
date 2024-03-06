'use client'

import React from 'react'
import Link from 'next/link'

import { useGetReviewsQuery } from '@/redux/api/reviewApi'

import GradientBackground from '@/components/shared/gradient_background'
import ReviewCard from '@/components/cards/review_card'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function ReviewsSlice() {
  const { data, isLoading, error } = useGetReviewsQuery()

  let content = null

  if (isLoading) content = <div>Is loading...</div>

  if (error) content = <div>An error occured...</div>

  if (data)
    content = (
      <>
        {data?.map((review, index) => {
          if (index < 3) {
            return (
              <ReviewCard
                key={`reviewCard_${index}`}
                review={review.review}
                name={review.name}
                role={review.role}
                rating={review.rating}
              />
            )
          }
        })}
      </>
    )

  return (
    <div id='reviews_slice'>
      <div id='reviews_container'>
        <p>Reviews</p>
        <div id='review_cards_wrapper'>
          {content}
        </div>
        <Link href={Routes.find((route) => route.key === 'ADD_REVIEW')!.path}>
          Add review
        </Link>
        <Link href={Routes.find((route) => route.key === 'REVIEWS')!.path}>
          View all reviews
        </Link>
      </div>
      <div id='reviews_gradient_background_container'>
        <GradientBackground />
      </div>
    </div>
  )
}
