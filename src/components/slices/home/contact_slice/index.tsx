import React from 'react'

import ContactCanvas from '@/components/three/canvas/home_canvas/hero/contact_canvas/ContactCanvas'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

export default function ContactSlice() {
  return (
    <>
      <section
        id='contact_slice'
        className='fullscreen'
        style={{ zIndex: heroAnimationsConstants.Z_INDEXES.CONTACT_SLICE, position: 'fixed' }}
      >
        <ContactCanvas />
      </section>
    </>
  )
}
