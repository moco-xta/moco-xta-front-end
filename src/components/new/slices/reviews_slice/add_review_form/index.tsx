import React, { SyntheticEvent } from 'react'
import { useSelector } from 'react-redux'
import { useFormikContext } from 'formik'
import { useTranslations } from 'next-intl'

import { FormsInterface } from '@/interfaces/formsInterfaces'
import { AddReviewValuesInterface } from '@/interfaces/reduxApiInterfaces'

import { RootState } from '@/redux/store'

import {
  FormikRadioGroup,
  FormikRatingStars,
  FormikTextarea,
} from '@/components/new/inputs'
import { ResetButton, SubmitButton } from '@/components/new/buttons'
import ReviewCard from '../review_card'

import { reviewRolesData } from '@/data/reviewRolesData'

import './index.scss'

export default function AddReviewForm({
  submitButtonIsDisabled,
}: FormsInterface) {
  const t = useTranslations()

  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  )

  const {
    errors,
    handleChange,
    values,
    resetForm,
    setFieldValue,
    submitForm,
    touched,
  } = useFormikContext<AddReviewValuesInterface>()

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    submitForm()
  }

  function handleResetForm() {
    resetForm()
    localStorage.clear()
  }

  return (
    <div id='add_review_form'>
      <div id='add_review_first_block'>
        <h2>{t('ADD_REVIEW.ADD_A_REVIEW')}</h2>
        <form onSubmit={handleSubmit}>
          <FormikTextarea
            label={t('ADD_REVIEW.REVIEW')}
            name={'review'}
            cols={50}
            rows={4}
            maxLength={150}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            value={values.review}
            error={touched.review && Boolean(errors.review)}
            helperText={touched.review && errors.review}
            disabled={!isAuthenticated}
          />
          <FormikRadioGroup
            label={t('ADD_REVIEW.ROLE')}
            name={'role'}
            options={reviewRolesData}
            translationKeyPrefix={'ADD_REVIEW.ROLES'}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            value={values.role}
            error={touched.role && Boolean(errors.role)}
            helperText={touched.role && errors.role}
            disabled={!isAuthenticated}
          />
          <FormikRatingStars
            label={t('ADD_REVIEW.RATING')}
            name={'rating'}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            value={values.rating}
            error={touched.rating && Boolean(errors.rating)}
            helperText={touched.rating && errors.rating}
            disabled={!isAuthenticated}
          />
          <div className='submit_reset_buttons_container'>
            <SubmitButton submitButtonIsDisabled={submitButtonIsDisabled} />
            <ResetButton resetForm={handleResetForm} />
          </div>
        </form>
      </div>
      <ReviewCard
        review={values}
        reviewCardStyle={{ margin: '0 auto 0 auto' }}
      />
    </div>
  )
}
