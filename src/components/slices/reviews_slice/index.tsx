import React from 'react'
import Link from 'next/link'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function ReviewsSlice() {
  return  (
    <div id='reviews_slice'>
      <p>Reviews</p>
      <Link href={Routes.find((route) => route.key === 'ADD_REVIEW')!.path}>
        Add review
      </Link>
    </div>
  )
}
