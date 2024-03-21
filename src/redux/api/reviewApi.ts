import apiSlice from '../slice/apiSlice'

import { default as ApiConstants } from '@/constants/apiConstants.json'

import { ReviewInterface } from '@/interfaces/reviewInterface'

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query<ReviewInterface[], void>({
      query: () => 'https://127.0.0.1:8080/test/v1/' + ApiConstants.REVIEW,
      providesTags: ['Review'],
    }),
    addReview: build.mutation<ReviewInterface, ReviewInterface>({
      query: (review) => ({
        url: 'https://127.0.0.1:8080/test/v1/' + ApiConstants.REVIEW,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
})

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi
