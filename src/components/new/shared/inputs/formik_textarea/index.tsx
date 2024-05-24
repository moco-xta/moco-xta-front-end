import React, { ChangeEvent, useEffect } from 'react'

import { FormikTextareaInterface } from '@/interfaces/new/inputsInterfaces'

import useStoreInputValueInLocalStorage from '@/hooks/new/useStoreInputValueInLocalStorage'

import Error from '../../errors'

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
    disabled,
    inputStyle
  } = props

  const [storedValue, setValueToStore] = useStoreInputValueInLocalStorage(
    name,
    value,
  )

  useEffect(() => {
    if (storedValue) setFieldValue(name, storedValue)
  }, [storedValue, setFieldValue, name])

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValueToStore(e.currentTarget.value)
    return handleChange(e)
  }

  return (
    <>
      <label htmlFor={name}>
        {label}
        <Error
          error={error}
          helperText={helperText}
        />
      </label>
      <textarea
        className={`${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
        style={inputStyle}
        id={name}
        name={name}
        cols={cols}
        rows={rows}
        maxLength={maxLength}
        onChange={handleOnChange}
        value={value}
        disabled={disabled}
      />
    </>
  )
}
