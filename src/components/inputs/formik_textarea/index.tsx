import React from 'react'

import { FormikTextareaInterface } from '@/interfaces/components/inputs/formikTextareaInterface'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function FormikTextarea(props: FormikTextareaInterface) {
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
        {label ? label : capitalizeFirstLetter(name)}
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
      {error && <span>{helperText}</span>}
    </>
  )
}
