import React, { ChangeEvent, useState } from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { IoStarOutline } from 'react-icons/io5'
import { useTranslations } from 'next-intl'

import { FormikRatingStarsInterface } from '@/interfaces/form/inputs/formikRatingStarsInterface'

import FormError from '../../errors/form_error'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function FormikRatingStars({
  label,
  name,
  handleChange: FormikHandleChange,
  value,
  error,
  helperText,
}: FormikRatingStarsInterface) {
  const t = useTranslations()

  const [hover, setHover] = useState<number | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    FormikHandleChange(e)
  }

  return (
    <div
      id='rating_stars_container'
      className='formik_input_container'
    >
      <p>
        {label}
        <FormError
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
                onChange={handleChange}
                value={currentRating}
                checked={value === currentRating}
              />
              {!error || hover ? (
                <IoStarSharp
                  className='rating_star'
                  size={30}
                  color={currentRating <= (hover || value) ? 'gold' : 'grey'}
                  onMouseEnter={() => setHover(currentRating)}
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
