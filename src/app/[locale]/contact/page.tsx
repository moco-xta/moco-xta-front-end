'use client'

import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'
import { IoLogoGithub } from 'react-icons/io'

import RevealComponent from '@/components/shared/reveal_component'

import './index.scss'
import ContactCanvas from '@/components/r3f/canvas/contact_canvas'

export default function Contact() {
  return (
    <>
      <div id='contact'>
        <div id='contact_container'>
          <div id='contact_head_text'>
            <RevealComponent
              y={100}
              duration={'500ms'}
              threshold={0.75}
            >
              <h1 className='gradient_text'>Federico Desmoulin</h1>
              {/* <h2>Web developer</h2> */}
            </RevealComponent>
          </div>
          <div id='why_socials_contacts_container'>
            <RevealComponent
              y={100}
              duration={'500ms'}
              threshold={0.75}
            >
              <div id='why_container'>
                <h2>Why?</h2>
                <p id='why'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
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
            </RevealComponent>
          </div>
        </div>
        <div id='my_role'>
          <RevealComponent
            y={50}
            duration={'500ms'}
            threshold={0.75}
          >
            <p>Creative Developer</p>
          </RevealComponent>
        </div>
      </div>
      <div id='contact_canvas_container'>
        <ContactCanvas />
      </div>
    </>
  )
}
