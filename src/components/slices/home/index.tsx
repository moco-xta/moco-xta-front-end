import React from 'react'

import HeroSlice from './hero_slice'
import ContactSlice from './contact_slice'

export default function HomePage() {
  return (
    <>
      <HeroSlice />
      <ContactSlice />
    </>
  )
}
