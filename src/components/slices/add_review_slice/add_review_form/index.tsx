import React, { SyntheticEvent } from 'react'
import { useFormikContext } from 'formik'
import { useTranslations } from 'next-intl'

import { AddReviewValuesInterface } from '@/interfaces/addReviewValuesInterface'

import FormikField from '@/components/form/inputs/formik_field'
import FormikRadioGroup from '@/components/form/inputs/formik_radio_group'
import FormikRatingStars from '@/components/form/inputs/formik_rating_stars'
import FormikTextarea from '@/components/form/inputs/formik_textarea'

import { reviewRoles } from '@/data/reviewRoles'

import './index.scss'

export default function AddReviewForm() {
  const t = useTranslations()

  const { errors, handleChange, values, resetForm, submitForm, touched } =
    useFormikContext<AddReviewValuesInterface>()

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    submitForm()
  }

  return (
    <div id='add_review_form_container'>
      <form onSubmit={handleSubmit}>
        <FormikField
          label={t('ADD_REVIEW.NAME')}
          type={'text'}
          name={'name'}
          handleChange={handleChange}
          value={values.name}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <FormikField
          label={t('ADD_REVIEW.EMAIL')}
          type={'text'}
          name={'email'}
          handleChange={handleChange}
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
          value={values.review}
          error={touched.review && Boolean(errors.review)}
          helperText={touched.review && errors.review}
        />
        <FormikRatingStars
          label={t('ADD_REVIEW.RATING')}
          name={'rating'}
          handleChange={handleChange}
          value={values.rating}
          error={touched.rating && Boolean(errors.rating)}
          helperText={touched.rating && errors.rating}
        />
        <div id='submit_reset_buttons_container'>
          <button type='submit'>{t('FORMS.SUBMIT')}</button>
          <button
            type='reset'
            onClick={() => resetForm()}
          >
            {t('FORMS.RESET')}
          </button>
        </div>
      </form>
    </div>
  )
}
