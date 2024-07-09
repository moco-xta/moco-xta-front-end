import React from 'react'

import ContactPicture from './contact_picture'
import ContactTextBlock from './contact_text_block'

import SocialsCanvas from '../../three/canvas/socials_canvas/SocialsCanvas'
import ProfilePictureCanvas from '../../three/canvas/profile_picture_canvas/ProfilePictureCanvas'
import ContactTextCanvas from '../../three/canvas/contact_text_canvas/ContactTextCanvas'

import './index.scss'

export default function ContactSlice() {
  /* return (
    <>
      <SocialsCanvas className={'contact_socials_canvas'} />
      <ContactTextBlock />
      <ContactTextCanvas />
      <ProfilePictureCanvas />
    </>
  ) */

  return (
    <div id='contact_slice'>
      <ContactPicture />
      <ContactTextBlock />
    </div>
  )
}
