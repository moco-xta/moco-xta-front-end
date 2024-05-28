import React from 'react'
import { useTranslations } from 'next-intl'

import useResize from '@/hooks/new/useResize'

import AddReviewButton from '@/components/new/buttons/add_review_button'
import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import variables from '@/styles/new/variables.module.scss'
import './index.scss'

export default function ReviewsTextBlock() {
  const t = useTranslations('BUTTONS')

  const { isDesktop } = useResize()

  return (
    <div id='reviews_text_block_container'>
      {!isDesktop && <AddReviewButton text={t('OPEN')} />}
      <TextBlockSimple
        id='reviews_text_block'
        title={'HOME.REVIEWS.TEXT_BLOCK.TITLE'}
        paragraph={'HOME.REVIEWS.TEXT_BLOCK.PARAGRAPH'}
        blockStyle={
          isDesktop
            ? {
                padding: `${variables.top_bottom_margin_medium} 35% 0 35%`,
              }
            : {
                padding: `${variables.top_bottom_margin_small} ${variables.left_right_margin_smaller} 0 ${variables.left_right_margin_smaller}`,
                display: 'flex',
                flexDirection: 'column',
              }
        }
      />
    </div>
  )
}
