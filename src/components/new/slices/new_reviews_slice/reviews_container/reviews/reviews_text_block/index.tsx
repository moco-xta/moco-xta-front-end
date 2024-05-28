import React from 'react'

import useResize from '@/hooks/new/useResize'

import AddReviewButton from '@/components/new/buttons/add_review_button'

import './index.scss'

export default function ReviewsTextBlock() {
  const { isDesktop } = useResize()

  return (
    <div id='reviews_text_block'>
      {!isDesktop && <AddReviewButton />}
    </div>
  )
}
