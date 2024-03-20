'use client'

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
  const t = useTranslations()

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] =
    useState<boolean>(false)

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
    <section id='add_review_slice'>
      <div id='add_review_container'>
        <h1 id='add_review'>{t('ADD_REVIEW.ADD_A_REVIEW')}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={addNewReviewValidationSchema}
          onSubmit={(values, { resetForm }) => {
            setSubmitButtonIsDisabled(true)
            toast.promise(addReview(values), {
              loading: t('TOASTERS.ADD_REVIEW.LOADING'),
              success: () => {
                resetForm({ values: initialValues })
                localStorage.clear()
                setSubmitButtonIsDisabled(false)
                return t('TOASTERS.ADD_REVIEW.SUCCESS')
              },
              error: t('TOASTERS.ADD_REVIEW.ERROR'),
            })
          }}
        >
          <div id='add_review_form_and_preview_container'>
            <AddReviewForm submitButtonIsDisabled={submitButtonIsDisabled} />
            <NewReviewPreview />
          </div>
        </Formik>
        <SeeAllReviews />
      </div>
    </section>
  )
}
