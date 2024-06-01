import React from 'react'
import { useTranslations } from 'next-intl'

import useResize from '@/hooks/new/useResize'

import AddReviewButton from '@/components/new/buttons/add_review_button'
import ReviewsTextBlockContainer from './reviews_text_block_container'
import ReviewCards from './review_cards'

import './index.scss'

export default function ReviewsContainer() {
  const t = useTranslations('BUTTONS')

  const { isDesktop } = useResize()

  return (
    <>
      {isDesktop ? (
        <div id='reviews_container'>
          <AddReviewButton text={t('OPEN')} />
          <div>
            <ReviewsTextBlockContainer />
            <ReviewCards />
          </div>
        </div>
      ) : (
        <div>
          <ReviewsTextBlockContainer />
          <ReviewCards />
        </div>
      )}
    </>
  )
}
