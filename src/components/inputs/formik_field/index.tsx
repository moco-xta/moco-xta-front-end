import React from 'react'

import { FormikFieldInterface } from '@/interfaces/components/inputs/formikFieldinterface'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function FormikField(props: FormikFieldInterface) {
  const { label, type, name, handleChange, value, error, helperText } = props

  return (
    <div className='formik_field_container'>
      <label htmlFor={name}>
        {label ? label : capitalizeFirstLetter(name)}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      />
      {error && <span>{helperText}</span>}
    </div>
  )
}
