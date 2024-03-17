import React from 'react'
import { Formik } from 'formik'
import { toast } from 'sonner'

import { useAddReviewMutation } from '@/redux/api/reviewApi'

import { AddReviewValuesInterface } from '@/interfaces/addReviewValuesInterface'

import { addNewReviewValidationSchema } from 'validations/addNewReviewValidationSchema'

import AddReviewForm from './add_review_form'
import NewReviewPreview from './new_review_preview'
import SeeAllReviews from './see_all_reviews'

import './index.scss'

const initialValues: AddReviewValuesInterface = {
  name: '',
  email: '',
  role: '',
  review: '',
  rating: 0,
  date: new Date(),
}

export default function AddReviewSlice() {
  const [addReview] = useAddReviewMutation()

  return (
    <div id='add_review_slice'>
      <div id='add_review_container'>
        <h1>Add a review</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={addNewReviewValidationSchema}
          onSubmit={(values, { resetForm }) => {
            toast.promise(addReview(values), {
              loading: 'Loading',
              success: () => {
                resetForm()
                return 'Success'
              },
              error: 'Error',
            })
          }}
        >
          <div id='add_review_form_and_preview_container'>
            <AddReviewForm />
            <NewReviewPreview />
          </div>
        </Formik>
        <SeeAllReviews />
      </div>
    </div>
  )
}
