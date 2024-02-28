import apiSlice from '../slice/apiSlice'

import { default as ApiConstants } from '@/constants/apiConstants.json'

import { ReviewInterface } from '@/interfaces/api/reviewInterface'

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query<ReviewInterface[], void>({
      query: () => ApiConstants.REVIEW,
      providesTags: ['Review'],
    }),
    addReview: build.mutation<ReviewInterface, ReviewInterface>({
      query: (review) => ({
        url: ApiConstants.REVIEW,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
})

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi
