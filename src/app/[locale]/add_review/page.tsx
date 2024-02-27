'use client'

import React, { SyntheticEvent, useState } from 'react'

import { useAddReviewMutation } from '@/redux/api/reviewApi'

import { ReviewInterface } from '@/interfaces/api/reviewInterface'

import './index.scss'

export default function AddReview() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [review, setReview] = useState<string>('')
  const [numberOfStars, setNumberOfStars] = useState<number>(0)

  const [addReview] = useAddReviewMutation()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const newReview: ReviewInterface = {
      name: name,
      email: email,
      role: role,
      review: review,
      number_of_stars: numberOfStars,
      date: new Date(),
    }
    addReview(newReview)
  }
  return (
    <div id='add_review_container'>
      <div id='add_review_form_and_preview_container'>
        <form onSubmit={handleSubmit}>
          <h1>Add a review</h1>
          <input
            id='name'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id='email'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id='role'
            type='text'
            placeholder='Role'
            name='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <textarea
            id='review'
            rows={4}
            cols={50}
            placeholder='Review'
            name='review'
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button type='submit'>Submit</button>
          <input
            type='reset'
            value='Reset'
          />
        </form>
        <div id='new_review_preview'>
          <div id="review_card">
            <p>{review}</p>
            <p>{name}</p>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
