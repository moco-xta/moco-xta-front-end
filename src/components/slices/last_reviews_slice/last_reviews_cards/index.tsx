import React from 'react'
import { useTranslations } from 'next-intl'

import { useGetReviewsQuery } from '@/redux/api/reviewApi'

import ReviewCard from '@/components/cards/review_card'

import './index.scss'

export default function LastReviewsCards() {
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
        {data
          ?.filter((_, index) => index < 3)
          .map((review, index) => {
            return (
              <ReviewCard
                key={`reviewCard_${index}`}
                data={review}
              />
            )
          })}
      </>
    )

  return <div id='last_reviews_cards_wrapper'>{content}</div>
}
