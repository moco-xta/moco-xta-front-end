import React, { ChangeEvent, useEffect } from 'react'

import { FormikTextInterface } from '@/interfaces/new/inputsInterfaces'

import useStoreInputValueInLocalStorage from '@/hooks/new/useStoreInputValueInLocalStorage'

import Error from '../../errors'

import './index.scss'

export default function FormikTextField(props: FormikTextInterface) {
  const {
    label,
    type,
    name,
    handleChange,
    setFieldValue,
    value,
    storeValue = true,
    error,
    helperText,
  } = props

  const [storedValue, setValueToStore] = useStoreInputValueInLocalStorage(name, value)

  useEffect(() => {
    if (storedValue) setFieldValue(name, storedValue)
  }, [storedValue, setFieldValue, name])

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (storeValue) setValueToStore(e.currentTarget.value)
    return handleChange(e)
  }

  return (
    <div className='formik_input_container formik_field_container'>
      <label
        htmlFor={name}
        className='input_label'
      >
        {label}
        <Error
          error={error}
          helperText={helperText}
        />
      </label>
      <input
        className={`${error ? 'error' : ''}`}
        type={type}
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )
}
