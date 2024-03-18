import React from 'react'
import { useTranslations } from 'next-intl'

import { FormikTextareaInterface } from '@/interfaces/formikTextareaInterface'

import FormError from '../../errors/form_error'

import './index.scss'

export default function FormikTextarea(props: FormikTextareaInterface) {
  const t = useTranslations()

  const {
    label,
    name,
    cols,
    rows,
    maxLength,
    handleChange,
    value,
    error,
    helperText,
  } = props

  return (
    <>
      <label htmlFor={name}>
        {label}
        <FormError
          error={error}
          helperText={helperText}
        />
      </label>
      <textarea
        className={`${error ? 'error' : ''}`}
        id={name}
        name={name}
        cols={cols}
        rows={rows}
        maxLength={maxLength}
        onChange={handleChange}
        value={value}
      />
    </>
  )
}
