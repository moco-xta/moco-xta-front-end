import React from 'react'

import useResize from '@/hooks/new/useResize'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import variables from '@/styles/new/variables.module.scss'
import './index.scss'

export default function ReviewsTextBlock() {
  const { isDesktop } = useResize()

  return (
    <TextBlockSimple
      id={'reviews_text_block'}
      title={'HOME.REVIEWS.TEXT_BLOCK.TITLE'}
      paragraph={'HOME.REVIEWS.TEXT_BLOCK.PARAGRAPH'}
      /* blockStyle={
        isDesktop
          ? {
              padding: `${variables.top_bottom_margin_medium} 35% 0 35%`,
            }
          : {
              padding: `${variables.top_bottom_margin_small} 0 0 0`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }
      } */
    />
  )
}
