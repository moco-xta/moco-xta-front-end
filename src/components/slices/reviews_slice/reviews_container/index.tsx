import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { RootState } from '@/redux/store'

import useResize from '@/hooks/useResize'

import AddReviewButton from '@/components/buttons/add_review_button'
import ReviewsTextBlockContainer from './reviews_text_block_container'
import ReviewCards from './review_cards'

import './index.scss'

export default function ReviewsContainer() {
  const t = useTranslations('BUTTONS')

  const addReviewIsOpen = useSelector((state: RootState) => state.appState.addReviewIsOpen)

  const { isDesktop } = useResize()

  return (
    <>
      {isDesktop ? (
        <div
          id='reviews_container_desktop'
          className={`reviews_containers ${addReviewIsOpen ? '' : 'open'}`}
          /* className={`reviews_containers ${addReviewIsOpen ? '' : 'open'} responsive_background`} */
        >
          <AddReviewButton text={t('OPEN')} />
          <div id='reviews_container'>
            <ReviewsTextBlockContainer />
            <ReviewCards />
          </div>
        </div>
      ) : (
        <div
          id='reviews_container_not_desktop'
          className={`reviews_containers ${addReviewIsOpen ? '' : 'open'}`}
          /* className={`reviews_containers ${addReviewIsOpen ? '' : 'open'} responsive_background`} */
        >
          <ReviewsTextBlockContainer />
          <ReviewCards />
        </div>
      )}
    </>
  )
}