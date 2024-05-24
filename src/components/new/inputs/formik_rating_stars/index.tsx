import React, { ChangeEvent, useEffect, useState } from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { IoStarOutline } from 'react-icons/io5'
import { useTranslations } from 'next-intl'

import { FormikRatingStarsInterface } from '@/interfaces/new/inputsInterfaces'

import useStoreInputValueInLocalStorage from '@/hooks/new/useStoreInputValueInLocalStorage'

import Error from '../../errors'

import variables from '@/styles/new/variables.module.scss'
import './index.scss'

export default function FormikRatingStars({
  label,
  name,
  handleChange,
  setFieldValue,
  value,
  error,
  helperText,
  disabled,
}: FormikRatingStarsInterface) {
  const t = useTranslations()

  const [storedValue, setValueToStore] = useStoreInputValueInLocalStorage(
    name,
    value,
  )

  const [hover, setHover] = useState<number | null>(null)

  useEffect(() => {
    if (storedValue) setFieldValue(name, storedValue)
  }, [storedValue, setFieldValue, name])

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValueToStore(e.currentTarget.value)
    return handleChange(e)
  }

  return (
    <div
      id='rating_stars_container'
      className='formik_input_container'
    >
      <p>
        {label}
        <Error
          error={error}
          helperText={helperText}
        />
      </p>
      <div className='rating_stars_wrapper'>
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1
          return (
            <label key={`startRatingLabel_${index}`}>
              <input
                type='radio'
                name={name}
                onChange={handleOnChange}
                value={currentRating}
                checked={value === currentRating}
                disabled={disabled}
              />
              {!error || hover ? (
                <IoStarSharp
                  className={`rating_star ${disabled ? 'disabled' : ''}`}
                  size={30}
                  color={
                    currentRating <= (hover || value)
                      ? 'gold'
                      : variables.grey_medium
                  }
                  onMouseEnter={() => {
                    if (!disabled) setHover(currentRating)
                  }}
                  onMouseLeave={() => setHover(null)}
                />
              ) : (
                <IoStarOutline
                  className='rating_star'
                  size={30}
                  color={variables.alert_color}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              )}
            </label>
          )
        })}
      </div>
    </div>
  )
}
