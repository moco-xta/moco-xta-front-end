'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'

import { ReviewCardInterface } from '@/interfaces/r3fInterfaces'
import './index.scss'
import ReviewCanvas from '@/components/r3f/canvas/review_canvas'

export default function ReviewCard({ data }: ReviewCardInterface) {
  const t = useTranslations('ADD_REVIEW')

  const cardRef = useRef<HTMLDivElement>(null)

  /* useCardHoverEffect(
    cardRef,
    effectsConstants.CARD_HOVER_EFFECT.LAST_REVIEWS_CARDS,
  ) */

  return (
    <div className='star_canvas_container'>
      {/* <ReviewCanvas data={data} /> */}
    </div>
  )
}

/* return (
    <div
      ref={cardRef}
      id='review_card'
    >
      {review && <p className='quote_up'>&quot;</p>}
      <p className='review'>{review}</p>
      {review && <p className='quote_down'>&quot;</p>}
      {rating !== 0 && (
        <div className='rating_stars_container'>
          <RatingStars rating={rating} />
        </div>
      )}
      <div className='name_role_container'>
        <p className='name'>{name}</p>
        {role && <p className='role'>{t(`ROLES.${role}`)}</p>}
      </div>

      <div id='star_canvas_container'>
        <StarCanvas />
      </div>
    </div>
  )
}
 */
