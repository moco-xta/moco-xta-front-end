import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { RootState } from '@/redux/store'

import AddReview from './add_review'
import AddReviewButton from '@/components/new/buttons/add_review_button'

import './index.scss'

export default function AddReviewContainer() {
  const t = useTranslations('BUTTONS')

  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )
  return (
    <div
      id='add_review_container'
      className={`reviews_containers ${addReviewIsOpen ? 'open' : ''}`}
      /* className={`reviews_containers ${addReviewIsOpen ? 'open' : ''} responsive_background`} */
    >
      <AddReview />
      <AddReviewButton text={t('CLOSE')} />
    </div>
  )
}
