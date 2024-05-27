import React from 'react'

import useResize from '@/hooks/new/useResize'

import AddReviewButton from '@/components/new/buttons/add_review_button'
import ReviewsTextBlock from '../reviews_text_block'

import './index.scss'

export default function ReviewsBlockUp() {
  const { isDesktop } = useResize()

  return (
    <div id='reviews_block_up'>
      {!isDesktop && <AddReviewButton />}
      <ReviewsTextBlock />
    </div>
  )
}
