import React, { ChangeEvent, useEffect } from 'react'
import { useTranslations } from 'next-intl'

import { FormikRadioGroupInterface } from '@/interfaces/formikInterfaces'

import useStoreInputValueInLocalStorage from '@/hooks/useStoreInputValueInLocalStorage'

import Error from '../../errors'

import './index.scss'

export default function FormikRadioGroup(props: FormikRadioGroupInterface) {
  const t = useTranslations()

  const {
    label,
    name,
    options,
    translationKeyPrefix,
    handleChange,
    setFieldValue,
    value,
    error,
    helperText,
  } = props

  const [storedValue, setValueToStore] = useStoreInputValueInLocalStorage(
    name,
    value,
  )

  useEffect(() => {
    if (storedValue) setFieldValue(name, storedValue)
  }, [storedValue, setFieldValue, name])

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValueToStore(e.currentTarget.value)
    return handleChange(e)
  }

  return (
    <div className='formik_input_container formik_radio_group_container'>
      <label htmlFor={name}>
        {label}
        <Error
          error={error}
          helperText={helperText}
        />
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
              onChange={handleOnChange}
              value={option.value ? option.value : option.name}
              checked={value === option.value || value === option.name}
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
