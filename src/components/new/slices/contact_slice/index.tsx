import React from 'react'

import ProfilePictureCanvas from '../../three/canvas/profile_picture_canvas/ProfilePictureCanvas'
import ContactTextCanvas from '../../three/canvas/contact_text_canvas/ContactTextCanvas'

import './index.scss'

export default function ContactSlice() {
  return (
    <>
      <ContactTextCanvas />
      <ProfilePictureCanvas />
    </>
  )
}