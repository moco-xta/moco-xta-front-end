import React from 'react'

import SocialsCanvas from '../../three/canvas/socials_canvas/SocialsCanvas'
import ContactTextBlock from './contact_text_block'
import ProfilePictureCanvas from '../../three/canvas/profile_picture_canvas/ProfilePictureCanvas'
import ContactTextCanvas from '../../three/canvas/contact_text_canvas/ContactTextCanvas'

import './index.scss'

export default function ContactSlice() {
  return (
    <>
      <SocialsCanvas className={'contact_socials_canvas'} />
      <ContactTextBlock />
      <ContactTextCanvas />
      <ProfilePictureCanvas />
    </>
  )
}
