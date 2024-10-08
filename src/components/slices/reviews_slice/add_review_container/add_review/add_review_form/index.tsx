import React, { SyntheticEvent } from 'react'
import { useSelector } from 'react-redux'
import { useFormikContext } from 'formik'
import { useTranslations } from 'next-intl'

import { FormsInterface } from '@/interfaces/formsInterfaces'
import { AddReviewValuesInterface } from '@/interfaces/reduxApiInterfaces'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import { RootState } from '@/redux/store'

import { FormikRadioGroup, FormikRatingStars, FormikTextarea } from '@/components/inputs'
import { ResetButton, SubmitButton } from '@/components/buttons'
import ReviewCard from '../../../review_card'

import { reviewRolesData } from '@/data/reviews/reviewRolesData'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function AddReviewForm({ submitButtonIsDisabled }: FormsInterface) {
  const t = useTranslations()

  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)

  const { isLargeScreen } = useIsLargeScreen()

  const { errors, handleChange, values, resetForm, setFieldValue, submitForm, touched } =
    useFormikContext<AddReviewValuesInterface>()

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
        <h2 className='form_title'>{t('HOME.REVIEWS.ADD_REVIEW')}</h2>
        <form onSubmit={handleSubmit}>
          <FormikTextarea
            label={t('ADD_REVIEW.REVIEW')}
            name={'review'}
            rows={4}
            maxLength={150}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            value={values.review}
            error={touched.review && Boolean(errors.review)}
            helperText={touched.review && errors.review}
            disabled={!isAuthenticated}
            inputStyle={{
              border: variables.input_border_light,
            }}
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
            inputStyle={{
              border: variables.input_border_light,
            }}
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
      {isLargeScreen && (
        <ReviewCard
          review={values}
          /* reviewCardStyle={{ width: '100%', margin: '0 0 0 20px' }} */
        />
      )}
    </div>
  )
}
