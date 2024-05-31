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

import { clearFormStoredValues } from '@/helpers/localStorageHelpers'

import './index.scss'

export default function AddReview() {
  const t = useTranslations()

  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  )

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
    <div id='add_review'>
      <Formik
        initialValues={initialValues}
        validationSchema={addNewReviewValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitButtonIsDisabled(true)
          toast.promise(addReview(values).unwrap(), {
            loading: t('TOASTERS.ADD_REVIEW.LOADING'),
            success: () => {
              resetForm({ values: initialValues })
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
        <AddReviewForm
          submitButtonIsDisabled={submitButtonIsDisabled}
          resetButtonIsDisabled={resetButtonIsDisabled}
        />
      </Formik>
    </div>
  )
}
