import React, { SyntheticEvent } from 'react'
import { useFormikContext } from 'formik'
import { useTranslations } from 'next-intl'

import { FormsInterface } from '@/interfaces/formsInterfaces'
import { AddReviewValuesInterface } from '@/interfaces/addReviewValuesInterface'

import {
  FormikRadioGroup,
  FormikRatingStars,
  FormikTextField,
  FormikTextarea,
} from '@/components/form/inputs'
import { ResetButton, SubmitButton } from '@/components/form/buttons'

import { reviewRoles } from '@/data/reviewRoles'

import './index.scss'

export default function AddReviewForm({
  submitButtonIsDisabled,
}: FormsInterface) {
  const t = useTranslations()

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
    <div id='add_review_form_container'>
      <form
        className='card_background_gradient'
        onSubmit={handleSubmit}
      >
        <FormikTextField
          label={t('ADD_REVIEW.NAME')}
          type={'text'}
          name={'name'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.name}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <FormikTextField
          label={t('ADD_REVIEW.EMAIL')}
          type={'text'}
          name={'email'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <FormikRadioGroup
          label={t('ADD_REVIEW.ROLE')}
          name={'role'}
          options={reviewRoles}
          translationKeyPrefix={'ADD_REVIEW.ROLES'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.role}
          error={touched.role && Boolean(errors.role)}
          helperText={touched.role && errors.role}
        />
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
        />
        <FormikRatingStars
          label={t('ADD_REVIEW.RATING')}
          name={'rating'}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          value={values.rating}
          error={touched.rating && Boolean(errors.rating)}
          helperText={touched.rating && errors.rating}
        />
        <div className='submit_reset_buttons_container'>
          <SubmitButton submitButtonIsDisabled={submitButtonIsDisabled} />
          <ResetButton resetForm={handleResetForm} />
        </div>
      </form>
    </div>
  )
}
