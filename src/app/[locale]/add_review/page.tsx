'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'sonner'

import { useAddReviewMutation } from '@/redux/api/reviewApi'

import { Routes } from '@/routes/routes'

import ReviewCard from '@/components/cards/review_card'
import FormikField from '@/components/inputs/formik_field'
import FormikRatingStars from '@/components/inputs/formik_rating_stars'
import FormikTextarea from '@/components/inputs/formik_textarea'

import './index.scss'

export default function AddReview() {
  const [addReview] = useAddReviewMutation()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Must be a valid email').required('Required'),
    role: Yup.string().required('Required'),
    review: Yup.string().required('Required'),
    rating: Yup.number().min(1, 'Required'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
      review: '',
      rating: 0,
      date: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.promise(addReview(values), {
        loading: 'Loading',
        success: 'Success',
        error: 'Error',
      })
    },
  })

  useEffect(() => {
    console.log('formik.values.rating', formik.values.rating)
  }, [formik.values.rating])

  return (
    <div id='add_review'>
      <div id='add_review_container'>
        <h1 className='gradient_text'>Add a review</h1>
        <div id='add_review_form_and_preview_container'>
          <form onSubmit={formik.handleSubmit}>
            <FormikField
              type={'text'}
              name={'name'}
              handleChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <FormikField
              type={'text'}
              name={'email'}
              handleChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <FormikField
              type={'text'}
              name={'role'}
              handleChange={formik.handleChange}
              value={formik.values.role}
              error={formik.touched.role && Boolean(formik.errors.role)}
              helperText={formik.touched.role && formik.errors.role}
            />
            <FormikTextarea
              name={'review'}
              cols={50}
              rows={4}
              maxLength={150}
              handleChange={formik.handleChange}
              value={formik.values.review}
              error={formik.touched.review && Boolean(formik.errors.review)}
              helperText={formik.touched.review && formik.errors.review}
            />
            <FormikRatingStars
              name={'rating'}
              handleChange={formik.handleChange}
              value={formik.values.rating}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              helperText={formik.touched.rating && formik.errors.rating}
            />
            <div id='submit_reset_buttons_container'>
              <button type='submit'>Submit</button>
              <button type='submit'>Submit</button>
            </div>
          </form>

          <div id='new_review_preview'>
            <ReviewCard
              review={formik.values.review}
              name={formik.values.name}
              role={formik.values.role}
              rating={formik.values.rating}
            />
          </div>
        </div>
        <div id='view_all_reviews_link_container'>
          <Link id='view_all_reviews_link' href={Routes.find((route) => route.key === 'REVIEWS')!.path}>
            View all reviews
          </Link>
        </div>
      </div>
    </div>
  )
}
