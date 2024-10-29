'use client'

import React from 'react'

import { HomePage } from '@/components/pages'
import { PreloaderSlice } from '@/components/slices'

export default function Home() {
  return (
    <>
      <PreloaderSlice />
      <HomePage />
    </>
  )
}
