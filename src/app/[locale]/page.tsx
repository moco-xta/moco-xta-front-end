import React from 'react'

import Hero from '@/components/slices/hero'
import Introduction from '@/components/slices/introduction'
import PerformedWith from '@/components/slices/performed_with'

import './index.scss'

export default function Home() {
  return (
    <div id='home_container'>
      <Hero />
      <Introduction />
      <PerformedWith />
    </div>
  )
}
