import React from 'react'
import { useTranslations } from 'next-intl'

import { FormikTextareaInterface } from '@/interfaces/components/inputs/formikTextareaInterface'

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
      </label>
      <textarea
        id={name}
        name={name}
        cols={cols}
        rows={rows}
        maxLength={maxLength}
        onChange={handleChange}
        value={value}
      />
      {error && <span>{t(`${helperText}`)}</span>}
    </>
  )
}
