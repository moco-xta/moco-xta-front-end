import React from 'react'
import { useTranslations } from 'next-intl'

import { FormikRadiogroupInterface } from '@/interfaces/form/inputs/formikRadioGroupInterface'

import FormError from '../../errors/form_error'

import './index.scss'

export default function FormikRadioGroup(props: FormikRadiogroupInterface) {
  const t = useTranslations()

  const { label, name, options, translationKeyPrefix, handleChange, error, helperText } = props

  return (
    <div className='formik_input_container formik_radio_group_container'>
      <label htmlFor={name}>
        {label}
        <FormError error={error} helperText={helperText} />
      </label>
      <div className='radio_options_wrapper'>
        {options.map((option, index) => (
          <div
            key={`radio_${option.name}_${index}`}
            className='radio_option_container'
          >
            <input
              className={`${error ? 'error' : ''}`}
              type='radio'
              id={option.name}
              name={name}
              onChange={handleChange}
              value={option.value ? option.value : option.name}
            />
            <label htmlFor={option.name}>
              {t(`${translationKeyPrefix}.${option.name}`)}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
