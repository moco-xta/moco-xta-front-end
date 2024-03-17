import React from 'react'
import { useTranslations } from 'next-intl'

import { FormikFieldInterface } from '@/interfaces/components/inputs/formikFieldinterface'

import './index.scss'

export default function FormikField(props: FormikFieldInterface) {
  const t = useTranslations()

  const { label, type, name, handleChange, value, error, helperText } = props

  return (
    <div className='formik_field_container'>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      />
      {error && <span>{t(`${helperText}`)}</span>}
    </div>
  )
}
