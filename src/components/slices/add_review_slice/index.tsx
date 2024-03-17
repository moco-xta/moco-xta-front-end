import React, { useState } from 'react'
import { Formik } from 'formik'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { useAddReviewMutation } from '@/redux/api/reviewApi'

import { AddReviewValuesInterface } from '@/interfaces/addReviewValuesInterface'

import { addNewReviewValidationSchema } from 'validations/addNewReviewValidationSchema'

import AddReviewForm from './add_review_form'
import NewReviewPreview from './new_review_preview'
import SeeAllReviews from './see_all_reviews'

import './index.scss'

export default function AddReviewSlice() {
  const t = useTranslations('ADD_REVIEW')

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState<boolean>(false)

  const initialValues: AddReviewValuesInterface = {
    name: '',
    email: '',
    role: '',
    review: '',
    rating: 0,
    date: new Date(),
  }

  const [addReview] = useAddReviewMutation()

  return (
    <div id='add_review_slice'>
      <div id='add_review_container'>
        <h1 id='add_review'>{t('ADD_A_REVIEW')}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={addNewReviewValidationSchema}
          onSubmit={(values, { resetForm }) => {
            setSubmitButtonIsDisabled(true)
            setTimeout(() => {
              toast.promise(addReview(values), {
                loading: 'Loading',
                success: () => {
                  resetForm({ values: initialValues })
                  setSubmitButtonIsDisabled(false)
                  return 'Success'
                },
                error: 'Error',
              })
            }, 10000);
            /* toast.promise(addReview(values), {
              loading: 'Loading',
              success: () => {
                resetForm({ values: initialValues })
                setSubmitButtonIsDisabled(false)
                return 'Success'
              },
              error: 'Error',
            }) */
          }}
        >
          <div id='add_review_form_and_preview_container'>
            <AddReviewForm submitButtonIsDisabled={submitButtonIsDisabled} />
            <NewReviewPreview />
          </div>
        </Formik>
        <SeeAllReviews />
      </div>
    </div>
  )
}
