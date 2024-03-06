import React, { ChangeEvent, useEffect, useState } from 'react'
import { IoStarSharp } from 'react-icons/io5'

import { FormikRatingStarsInterface } from '@/interfaces/components/inputs/formikRatingStarsInterface'

import './index.scss'

export default function FormikRatingStars({
  name,
  handleChange: FormikHandleChange,
  value,
  error,
  helperText,
}: FormikRatingStarsInterface) {
  const [rating, setRating] = useState<number>(value)
  const [hover, setHover] = useState<number | null>(null)

  useEffect(() => {
    setRating(value)
  }, [value])

  useEffect(() => {
    console.log('rating', rating)
  }, [rating])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    FormikHandleChange(e)
  }

  return (
    <div id='rating_stars_container'>
      <p>Rating</p>
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
      {error && <span>{helperText}</span>}
    </div>
  )
}
