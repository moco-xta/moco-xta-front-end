import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'

import SocialsCanvas from '../../three/canvas/socials_canvas/SocialsCanvas'

import './index.scss'

const SIZE = 50

export default function Footer() {
  return (
    <footer>
      <SocialsCanvas className='footer_socials_canvas' />
      <div id='footer_socials'>
        <IoLogoGithub />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
      <p id='copyright'>© Copyright 2024 Federico Desmoulin - All rights reserved</p>
    </footer>
  )
}
