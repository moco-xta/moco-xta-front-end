import React from 'react'
import { useTranslations } from 'next-intl'

import { useGetReviewsQuery } from '@/redux/api/reviewApi'

import AddReviewLink from '@/components/links/add_review_link'
import ReviewCard from '@/components/cards/review_card'

import './index.scss'

export default function AllReviewsSlice() {
  const t = useTranslations()

  const { data, isLoading, error } = useGetReviewsQuery()

  let content = null
  if (isLoading)
    content = (
      <div className='request_states_container'>
        {t('REQUESTS.FETCHING_DATA')}
      </div>
    )
  if (error)
    content = (
      <div className='request_states_container'>
        {t('REQUESTS.AN_ERROR_OCCURED')}
      </div>
    )
  if (data)
    content = (
      <>
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
      </>
    )
  return (
    <div id='all_reviews_slice'>
      <div id='all_reviews_content'>
        <div id='all_reviews_title_and_add_review_link_container'>
          <h2>{t('ALL_REVIEWS.ALL_REVIEWS')}</h2>
          <AddReviewLink />
        </div>
        <div id='review_cards_wrapper'>{content}</div>
      </div>
    </div>
  )
}
