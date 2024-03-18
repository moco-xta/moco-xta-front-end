import apiSlice from '../slice/apiSlice'

import { default as ApiConstants } from '@/constants/apiConstants.json'

import { TestInterface } from '@/interfaces/testInterface'

const taskApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTests: build.query<TestInterface[], void>({
      query: () => ApiConstants.TEST,
      providesTags: ['Test'],
    }),
    addNewTest: build.mutation<TestInterface, TestInterface>({
      query: (task) => ({
        url: ApiConstants.TEST,
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Test'],
    }),
  }),
})

export const { useGetTestsQuery, useAddNewTestMutation } = taskApi
