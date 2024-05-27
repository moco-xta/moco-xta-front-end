import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'

import './index.scss'

const SIZE = 50

export default function Footer() {
  return (
    <footer>
      <div id='footer_socials'>
        <IoLogoGithub size={SIZE} />
        <FaTwitter size={SIZE} />
        <FaInstagram size={SIZE} />
        <FaLinkedinIn size={SIZE} />
      </div>
      <p id='copyright'>
        © Copyright 2024 Federico Desmoulin - All rights reserved
      </p>
    </footer>
  )
}
