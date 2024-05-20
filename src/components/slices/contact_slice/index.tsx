import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'

import LifeGame from './lifeGame'

import './index.scss'

export default function ContactSlice() {
  return (
    <>
      <div id='contact_slice'>
        <div id='socials_container'>
          <Image
            id='socials_picture'
            src='/img/png/contact/socials.png'
            width={700}
            height={400}
            alt=''
          />
          <div id='social_icons_container'>
            <div
              id='linkedin_container'
              className='social_container'
            >
              <FaLinkedinIn
                className='social_icon'
                size={50}
              />
            </div>
            <div
              id='github_container'
              className='social_container'
            >
              <IoLogoGithub
                className='social_icon'
                size={50}
              />
            </div>
            <div
              id='twitter_container'
              className='social_container'
            >
              <FaTwitter
                className='social_icon'
                size={50}
              />
            </div>
          </div>
        </div>
        <div id='contact_content'>
          <Image
            id='monkey_phone'
            src='/img/gif/monkey_phone.gif'
            width={240}
            height={135}
            alt='Monkey phone'
          />
          <div>
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
          <div id='fur_moco_lucky_cat_container'>
            <Image
              id='fur_moco'
              src='/img/png/moco_logo_fur_back_ligths.png'
              width={450}
              height={300}
              alt=''
            />
            <Image
              id='lucky_cat'
              src='/img/gif/lucky_cat_2.gif'
              width={100}
              height={100}
              alt='Lucky cat'
            />
          </div>
        </div>
        <LifeGame />
      </div>
      <div className='noise_background'></div>
    </>
  )
}
