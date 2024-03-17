import React from 'react'
import { useFormikContext } from 'formik'

import { AddReviewValuesInterface } from '@/interfaces/addReviewValuesInterface'

import ReviewCard from '@/components/cards/review_card'

import './index.scss'

export default function NewReviewPreview() {
  const { values } = useFormikContext<AddReviewValuesInterface>()

  return (
    <div id='new_review_preview'>
      <ReviewCard
        review={values.review}
        name={values.name}
        role={values.role}
        rating={values.rating}
      />
    </div>
  )
}
