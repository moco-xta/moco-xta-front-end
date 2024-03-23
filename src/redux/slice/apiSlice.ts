import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Review', 'Test'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1/',
  }),
  endpoints: () => ({}),
})

export default apiSlice
