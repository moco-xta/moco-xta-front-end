import apiSlice from '../slice/apiSlice'

import { default as apiConstants } from '@/constants/apiConstants.json'

import { ReviewInterface } from '@/interfaces/reviewInterface'

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query<ReviewInterface[], void>({
      query: () => apiConstants.REVIEWS_LIST,
      providesTags: ['Review'],
    }),
    addReview: build.mutation<ReviewInterface, ReviewInterface>({
      query: (reviewPayload) => ({
        url: apiConstants.ADD_REVIEW,
        method: 'POST',
        body: reviewPayload,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
})

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi
