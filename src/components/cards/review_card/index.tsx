'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'

import { ReviewCardInterface } from '@/interfaces/r3fInterfaces'

import useCardHoverEffect from '@/hooks/useCardHoverEffect'

import RatingStars from './rating_stars'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function ReviewCard({ data }: ReviewCardInterface) {
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
      {data && <p className='quote_up'>&quot;</p>}
      <p className='review'>{data.review}</p>
      {data && <p className='quote_down'>&quot;</p>}
      {data.rating !== 0 && (
        <div className='rating_stars_container'>
          <RatingStars rating={data.rating} />
        </div>
      )}
      <div className='name_role_container'>
        <p className='name'>{data.firstName}</p>
        {data.role && <p className='role'>{t(`ROLES.${data.role}`)}</p>}
      </div>
    </div>
  )
}
