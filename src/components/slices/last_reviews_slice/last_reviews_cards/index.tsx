import React from 'react'
import { useTranslations } from 'next-intl'

import { useGetReviewsQuery } from '@/redux/api/reviewApi'

import ReviewCanvas from '@/components/r3f/canvas/review_canvas'

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
              <div
                key={`review_card_${index}`}
                className='review_container'
              >
                <ReviewCanvas
                  reviewIndex={index}
                  data={review}
                />
              </div>
            )
          })}
      </>
    )

  return <div id='last_reviews_cards_wrapper'>{content}</div>
}
