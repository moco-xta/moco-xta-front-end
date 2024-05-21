'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'

import { ReviewCardInterface } from '@/interfaces/r3fInterfaces'

import useCardHoverEffect from '@/hooks/useCardHoverEffect'

import RatingStars from './rating_stars'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function ReviewCard({ review }: ReviewCardInterface) {
  const t = useTranslations('ADD_REVIEW')

  const cardRef = useRef<HTMLDivElement>(null)

  useCardHoverEffect(
    cardRef,
    effectsConstants.CARD_HOVER_EFFECT.LAST_REVIEWS_CARDS,
  )

  /* return (
    <div className='star_canvas_container'>
      <ReviewCanvas data={data} />
    </div> */

  return (
    <div
      ref={cardRef}
      /* id='review_card' */
    >
      {review && <p className='quote_up'>&quot;</p>}
      <p className='review'>{review.review}</p>
      {review && <p className='quote_down'>&quot;</p>}
      {review.rating !== 0 && (
        <div className='rating_stars_container'>
          <RatingStars rating={review.rating} />
        </div>
      )}
      <div className='name_role_container'>
        <p className='name'>{review.firstName}</p>
        {review.role && <p className='role'>{t(`ROLES.${review.role}`)}</p>}
      </div>
    </div>
  )
}
