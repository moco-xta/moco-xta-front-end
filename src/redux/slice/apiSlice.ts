import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Review', 'Test'],
  baseQuery: fetchBaseQuery({
    /* baseUrl: process.env.NEXT_PUBLIC_BACK_END, */
    baseUrl: 'https://127.0.0.1:8080/test/v1/',
  }),
  endpoints: () => ({}),
})

export default apiSlice
