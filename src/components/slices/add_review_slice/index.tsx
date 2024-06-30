'use client'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

import { RootState } from '@/redux/store'
import { useAddReviewMutation } from '@/redux/api/reviewApi'

import { AddReviewValuesInterface } from '@/interfaces/reduxApiInterfaces'

import { addNewReviewValidationSchema } from 'validations/addNewReviewValidationSchema'

import AddReviewForm from './add_review_form'
import NewReviewPreview from './new_review_preview'
import SeeAllReviews from './see_all_reviews'

import { clearFormStoredValues } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function AddReviewSlice() {
  const t = useTranslations()

  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)

  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState<boolean>(
    !isAuthenticated ? true : false,
  )
  const [resetButtonIsDisabled, setResetButtonIsDisabled] = useState<boolean>(
    !isAuthenticated ? true : false,
  )

  useEffect(() => {
    if (isAuthenticated) {
      setSubmitButtonIsDisabled(false)
      setResetButtonIsDisabled(false)
    }
  }, [isAuthenticated])

  const initialValues: AddReviewValuesInterface = {
    review: '',
    role: '',
    rating: 0,
    date: new Date(),
  }

  const [addReview] = useAddReviewMutation()

  return (
    <section id='add_review_slice'>
      <div id='add_review_container'>
        <h1 id='add_review'>{t('ADD_REVIEW.ADD_A_REVIEW')}</h1>
        {!isAuthenticated && <p>You have to be logged in to add a review</p>}
        <Formik
          initialValues={initialValues}
          validationSchema={addNewReviewValidationSchema}
          onSubmit={(values, { resetForm }) => {
            setSubmitButtonIsDisabled(true)
            toast.promise(addReview(values).unwrap(), {
              loading: t('TOASTERS.ADD_REVIEW.LOADING'),
              success: () => {
                resetForm({
                  values: initialValues,
                })
                clearFormStoredValues(initialValues)
                setSubmitButtonIsDisabled(false)
                return t('TOASTERS.ADD_REVIEW.SUCCESS')
              },
              error: () => {
                setSubmitButtonIsDisabled(false)
                return t('TOASTERS.ADD_REVIEW.ERROR')
              },
            })
          }}
        >
          <div id='add_review_form_and_preview_container'>
            <AddReviewForm
              submitButtonIsDisabled={submitButtonIsDisabled}
              resetButtonIsDisabled={resetButtonIsDisabled}
            />
            <NewReviewPreview />
          </div>
        </Formik>
        <SeeAllReviews />
      </div>
    </section>
  )
}
