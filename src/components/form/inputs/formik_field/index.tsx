import React, { ChangeEvent, useEffect } from 'react'

import { FormikFieldInterface } from '@/interfaces/formikFieldinterface'

import useStoreInputValueInLocalStorage from '@/hooks/useStoreInputValueInLocalStorage'

import FormError from '../../errors/form_error'

import './index.scss'

export default function FormikField(props: FormikFieldInterface) {
  const { label, type, name, handleChange, setFieldValue, value, error, helperText } = props

  const [ storedValue, setValueToStore ] = useStoreInputValueInLocalStorage(name, value)

  useEffect(() => {
    if(storedValue) setFieldValue(name, storedValue)
  }, [storedValue])

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValueToStore(e.currentTarget.value)
    return handleChange(e)
  }

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
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )
}
