import React from 'react'
import Link from 'next/link'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function SeeAllReviews() {
  return (
    <div id='view_all_reviews_link_container'>
      <Link
        id='view_all_reviews_link'
        href={Routes.find((route) => route.key === 'REVIEWS')!.path}
      >
        View all reviews
      </Link>
    </div>
  )
}
