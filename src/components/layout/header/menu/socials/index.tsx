import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import { FaPinterest } from 'react-icons/fa'

import './index.scss'

export default function Socials() {
  return (
    <div id='socials_container'>
      <FaInstagram
        size={30}
        color='white'
      />
      <FaPinterest
        size={30}
        color='white'
      />
      <IoLogoLinkedin
        size={30}
        color='white'
      />
      <AiFillGithub
        size={30}
        color='white'
      />
    </div>
  )
}
