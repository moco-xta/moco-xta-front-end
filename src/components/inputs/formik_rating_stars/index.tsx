import React, { ChangeEvent, useState } from 'react'
import { IoStarSharp } from 'react-icons/io5'
import { useTranslations } from 'next-intl'

import { FormikRatingStarsInterface } from '@/interfaces/components/inputs/formikRatingStarsInterface'

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
    <div id='rating_stars_container'>
      <p>{label}</p>
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
              />
              <IoStarSharp
                className='rating_star'
                size={30}
                color={currentRating <= (hover || value) ? 'gold' : 'grey'}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          )
        })}
      </div>
      {error && <span>{t(`${helperText}`)}</span>}
    </div>
  )
}
