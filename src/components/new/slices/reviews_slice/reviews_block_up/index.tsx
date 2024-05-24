import React from 'react'

import useResize from '@/hooks/new/useResize'

import AddReviewButton from '@/components/new/buttons/add_review_button'
import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import './index.scss'

export default function ReviewsBlockUp() {
  const { isDesktop } = useResize()

  return (
    <div id='reviews_block_up'>
      {!isDesktop && <AddReviewButton />}
      <TextBlockSimple
        id={'reviews_text_block'}
        title={'HOME.REVIEWS.TITLE'}
        paragraph={'HOME.REVIEWS.PARAGRAPH'}
        blockStyle={{
          width: isDesktop ? '100%' : '90%',
          padding: '50px 35% 50px 35%',
        }}
      />
    </div>
  )
}
