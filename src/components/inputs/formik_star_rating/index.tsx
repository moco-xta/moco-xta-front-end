import React, { ChangeEvent, useEffect, useState } from 'react'
import { IoStarOutline, IoStarSharp } from 'react-icons/io5'

import { FormikStarRatingInterface } from '@/interfaces/components/inputs/formikStarRatingInterface'

import './index.scss'

export default function FormikStarRating({
  name,
  handleChange: FormikHandleChange,
  value,
  error,
  helperText,
}: FormikStarRatingInterface) {
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
    <div id='star_rating_container'>
      <p>Rating</p>
      <div id='stars_wrapper'>
        {[...Array(5)].map((start, index) => {
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
                className='star_rating'
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
