import React from 'react'

import { FormikRadiogroupInterface } from '@/interfaces/components/inputs/formikRadioGroupInterface'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function FormikRadioGroup(props: FormikRadiogroupInterface) {
  const { label, name, options, handleChange, value, error, helperText } = props

  return (
    <div className='formik_radio_group_container'>
      <label htmlFor={name}>
        {label ? label : capitalizeFirstLetter(name)}
      </label>
      <div className='radio_options_wrapper'>
        {options.map((option, index) => (
          <div
            key={`radio_${option.name}_${index}`}
            className='radio_option_container'
          >
            <input
              type='radio'
              id={option.name}
              name={name}
              onChange={handleChange}
              value={option.value ? option.value : option.name}
            />
            <label htmlFor={option.name}>
              {option.label ? option.label : capitalizeFirstLetter(option.name)}
            </label>
          </div>
        ))}
      </div>
      {error && <span>{helperText}</span>}
    </div>
  )
}
