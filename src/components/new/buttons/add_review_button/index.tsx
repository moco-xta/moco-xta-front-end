import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { AppDispatch, RootState } from '@/redux/store'
import { setAddReviewIsOpen } from '@/redux/slice/appStateSlice'

import './index.scss'

export default function AddReviewButton() {
  const t = useTranslations('BUTTONS')

  const dispatch = useDispatch<AppDispatch>()

  const addReviewIsOpen = useSelector(
    (state: RootState) => state.appState.addReviewIsOpen,
  )

  const handleSetAddReviewIsOpen = () => {
    dispatch(setAddReviewIsOpen(!addReviewIsOpen))
  }

  return (
    <div
      id='add_review_button'
      onClick={handleSetAddReviewIsOpen}
    >
      {!addReviewIsOpen ? t('OPEN') : t('CLOSE')}
    </div>
  )
}
