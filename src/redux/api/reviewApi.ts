import apiSlice from '../slice/apiSlice'

import { default as apiConstants } from '@/constants/apiConstants.json'

import { ReviewPayloadInterface } from '@/interfaces/reduxApiInterfaces'

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query<ReviewPayloadInterface[], void>({
      query: () => apiConstants.REVIEWS_LIST,
      providesTags: ['Review'],
    }),
    addReview: build.mutation<ReviewPayloadInterface, ReviewPayloadInterface>({
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
