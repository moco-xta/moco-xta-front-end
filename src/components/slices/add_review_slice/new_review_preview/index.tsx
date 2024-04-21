import React from 'react'
import { useFormikContext } from 'formik'

import { AddReviewValuesInterface } from '@/interfaces/reduxApiInterfaces'

import ReviewCard from '@/components/cards/review_card'

import './index.scss'

export default function NewReviewPreview() {
  const { values } = useFormikContext<AddReviewValuesInterface>()

  return (
    <div id='new_review_preview'>
      {/* TODO: fix it */}
      {/* @ts-ignore */}
      <ReviewCard data={values} />
    </div>
  )
}
