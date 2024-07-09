import React from 'react'
import { isMobile } from 'react-device-detect'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'

import TextBlockSimple from '@/components/shared/text_blocks/text_block_simple'
import SocialsCanvas from '@/components/three/canvas/socials_canvas/SocialsCanvas'

import { default as externalLinksConstants } from '@/constants/externalLinksConstants.json'

import './index.scss'

interface SocialIconInteface {
  social: 'GITHUB' | 'LINKEDIN' | 'TWITTER' | 'INSTAGRAM'
  children: JSX.Element
}

const SocialIcon = ({ social, children }: SocialIconInteface) => {
  return (
    <a
      href={externalLinksConstants.SOCIALS[social]}
      target='_blank'
    >
      {children}
    </a>
  )
}

export default function ContactTextBlock() {
  return (
    <div id='contact_text_block'>
      <TextBlockSimple
        title={'Title'}
        paragraph={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
      />
      <h3>Social</h3>
      {!isMobile ? (
        <SocialsCanvas className='contact_socials_canvas' />
      ) : (
        <div id='social_icons_container'>
          <SocialIcon social={'GITHUB'}>
            <IoLogoGithub className='social_icon' />
          </SocialIcon>
          <SocialIcon social={'TWITTER'}>
            <FaTwitter className='social_icon' />
          </SocialIcon>
          <SocialIcon social={'INSTAGRAM'}>
            <FaInstagram className='social_icon' />
          </SocialIcon>
          <SocialIcon social={'LINKEDIN'}>
            <FaLinkedinIn className='social_icon' />
          </SocialIcon>
        </div>
      )}
      <TextBlockSimple
        title={'Contact'}
        paragraph={`moco.xta@gmail.com\n+33 6 77 77 77 77`}
      />
    </div>
  )
}
