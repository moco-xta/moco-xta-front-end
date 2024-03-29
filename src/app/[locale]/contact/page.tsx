'use client'

import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'
import ContactCanvas from '@/components/r3f/canvas/contact_canvas'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function Contact() {
  return (
    <>
      <div id='contact'>
        <div id='contact_container'>
          <div id='canvas_head_text_container'>
            <div id='contact_canvas_container'>
              <ContactCanvas />
            </div>
            <div id='contact_head_text'>
              <RevealTextBlock
                threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
                duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
                y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
              >
                <h1 className='gradient_text'>Federico Desmoulin</h1>
                {/* <h2>Web developer</h2> */}
              </RevealTextBlock>
            </div>
          </div>
          <div id='why_socials_contacts_container'>
            <RevealTextBlock
              threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
              duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
              y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
            >
              <div id='why_container'>
                <h2>Why?</h2>
                <p id='why'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <div id='socials_container'>
                <h2>Socials</h2>
                <div className='social_container'>
                  <FaLinkedinIn
                    className='social_icon'
                    size={30}
                  />
                  <span>Federico Desmoulin</span>
                </div>
                <div className='social_container'>
                  <FaTwitter
                    className='social_icon'
                    size={30}
                  />
                  <span>@moco_xta</span>
                </div>
                <div className='social_container'>
                  <FaInstagram
                    className='social_icon'
                    size={30}
                  />
                  <span>@moco_xta</span>
                </div>
                <div className='social_container'>
                  <FaFacebookF
                    className='social_icon'
                    size={30}
                  />
                  <span>Moco.xta</span>
                </div>
                <div className='social_container'>
                  <IoLogoGithub
                    className='social_icon'
                    size={30}
                  />
                  <span>moco-xta</span>
                </div>
              </div>
              <div id='contacts_container'>
                <h2>Contact</h2>
                <div className='contact_container'>
                  <CiMobile1
                    className='contact_icon'
                    size={30}
                  />
                  <p>+33 6 35 67 87 75</p>
                </div>
                <div className='contact_container'>
                  <MdOutlineEmail
                    className='contact_icon'
                    size={30}
                  />
                  <p>moco.xta@gmail.com</p>
                </div>
              </div>
            </RevealTextBlock>
          </div>
        </div>
        <div id='my_role'>
          <RevealTextBlock
            threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
            duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
            y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
          >
            <p>Creative Developer</p>
          </RevealTextBlock>
        </div>
      </div>
      {/* <div id='contact_canvas_container'>
        <ContactCanvas />
      </div> */}
    </>
  )
}
