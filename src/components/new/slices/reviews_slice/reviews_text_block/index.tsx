import React from 'react'

import useResize from '@/hooks/new/useResize'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import './index.scss'

export default function ReviewsTextBlock() {
  const { isDesktop } = useResize()

  return (
    <TextBlockSimple
      id={'reviews_text_block'}
      title={'HOME.REVIEWS.TEXT_BLOCK.TITLE'}
      paragraph={'HOME.REVIEWS.TEXT_BLOCK.PARAGRAPH'}
      blockStyle={{
        width: isDesktop ? '100%' : '90%',
        padding: '50px 35% 0 35%',
      }}
    />
  )
}
