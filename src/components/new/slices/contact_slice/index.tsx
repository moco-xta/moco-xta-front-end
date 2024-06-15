import React from 'react'

import ProfilePictureCanvas from '../../three/canvas/profile_picture_canvas/ProfilePictureCanvas'
import ContactTextCanvas from '../../three/canvas/contact_text_canvas/ProfilePictureCanvas'

import './index.scss'

export default function ContactSlice() {
  return (
    <>
      <ProfilePictureCanvas />
      <ContactTextCanvas />
    </>
  )
}
