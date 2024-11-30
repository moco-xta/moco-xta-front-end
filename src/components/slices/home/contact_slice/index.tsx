import React from 'react'

import ContactCanvas from '@/components/three/canvas/home_canvas/hero/contact_canvas/ContactCanvas'

export default function ContactSlice() {
  return (
    <>
      {/* <GreetingCanvas /> */}
      <section
        id='contact_slice'
        className='fullscreen'
        style={{ zIndex: 3, position: 'fixed' }}
      >
        <ContactCanvas />
      </section>
    </>
  )
}
