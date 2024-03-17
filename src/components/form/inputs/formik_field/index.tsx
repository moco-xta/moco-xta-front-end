import React from 'react'
import { useTranslations } from 'next-intl'

import { FormikFieldInterface } from '@/interfaces/form/inputs/formikFieldinterface'

import FormError from '../../errors/form_error'

import './index.scss'

export default function FormikField(props: FormikFieldInterface) {
  const t = useTranslations()

  const { label, type, name, handleChange, value, error, helperText } = props

  return (
    <div className='formik_input_container formik_field_container'>
      <label
        htmlFor={name}
        className='input_label'
      >
        {label}
        <FormError
          error={error}
          helperText={helperText}
        />
      </label>
      <input
        className={`${error ? 'error' : ''}`}
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}
