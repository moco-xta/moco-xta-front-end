import React from 'react'
import { useTranslations } from 'next-intl'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import AddReviewButton from '@/components/buttons/add_review_button'
import TextBlockSimple from '@/components/shared/text_blocks/text_block_simple'

import './index.scss'

export default function ReviewsTextBlock() {
  const t = useTranslations('BUTTONS')

  const { isLargeScreen } = useIsLargeScreen()

  return (
    <div id='reviews_text_block_container'>
      {!isLargeScreen && <AddReviewButton text={t('OPEN')} />}
      <TextBlockSimple
        id='reviews_text_block'
        title={'HOME.REVIEWS.TEXT_BLOCK.TITLE'}
        paragraph={'HOME.REVIEWS.TEXT_BLOCK.PARAGRAPH'}
        className={'centered_text_block'}
      />
    </div>
  )
}
