'use client'

import React from 'react'
import Link from 'next/link'

import { useGetReviewsQuery } from '@/redux/api/reviewApi'

import { Routes } from '@/routes/routes'

import ReviewCard from '@/components/cards/review_card'

export default function AllReviews() {
  const { data, isLoading, error } = useGetReviewsQuery()

  let content = null

  if (isLoading) content = <div>Is loading...</div>

  if (error) content = <div>An error occured...</div>

  if (data)
    content = (
      <div id='review_cards_wrapper'>
        {data?.map((review, index) => {
          return (
            <ReviewCard
              key={`reviewCard_${index}`}
              review={review.review}
              name={review.name}
              role={review.role}
              rating={review.rating}
            />
          )
        })}
      </div>
    )

  return (
    <>
      <div>{content}</div>
      <Link href={Routes.find((route) => route.key === 'ADD_REVIEW')!.path}>
        Add review
      </Link>
    </>
  )
}
