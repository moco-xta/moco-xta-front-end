import React, { ChangeEvent, useEffect } from 'react'

import { FormikTextareaInterface } from '@/interfaces/formikTextareaInterface'

import useStoreInputValueInLocalStorage from '@/hooks/useStoreInputValueInLocalStorage'

import FormError from '../../errors/form_error'

import './index.scss'

export default function FormikTextarea(props: FormikTextareaInterface) {
  const {
    label,
    name,
    cols,
    rows,
    maxLength,
    handleChange,
    setFieldValue,
    value,
    error,
    helperText,
  } = props

  const [ storedValue, setValueToStore ] = useStoreInputValueInLocalStorage(name, value)

  useEffect(() => {
    if(storedValue) setFieldValue(name, storedValue)
  }, [storedValue])

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValueToStore(e.currentTarget.value)
    return handleChange(e)
  }

  return (
    <>
      <label htmlFor={name}>
        {label}
        <FormError
          error={error}
          helperText={helperText}
        />
      </label>
      <textarea
        className={`${error ? 'error' : ''}`}
        id={name}
        name={name}
        cols={cols}
        rows={rows}
        maxLength={maxLength}
        onChange={handleOnChange}
        value={value}
      />
    </>
  )
}
