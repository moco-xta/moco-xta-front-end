import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { useTranslations } from 'next-intl'
import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function Footer() {
  const t = useTranslations('ROUTES')

  return (
    <footer>
    {/* <div id='footer_logo_container'>
      <Image
        id='footer_logo'
        src='/img/png/moco_logo_turquoise_h300.png'
        width={466}
        height={300}
        alt='Logo footer'
      />
    </div> */}
      {/* <div id='links_and_contact_container'> */}
        {/* <div id='links_container'> */}
          {/* {Routes.filter((route) => route.hasOwnProperty('index'))
            // @ts-ignore
            .sort((a, b) => a.index - b.index)
            .map((route) => (
              <Link
                key={`footerLink_${route.key}`}
                className='footer_link'
                href={route.path}
                scroll={true}
              >
                {t(route.key)}
              </Link>
            ))} */}
        {/* </div> */}
        {/* <div id='contact_and_logo_container'>
          <div className='contact_container'>
            <p>+33 6 35 67 87 75</p>
            <CiMobile1
              className='contact_icon'
              size={30}
            />
          </div>
          <div className='contact_container'>
            <p>moco.xta@gmail.com</p>
            <MdOutlineEmail
              className='contact_icon'
              size={30}
            />
          </div>
          <div id='footer_socials_container'>
            <FaLinkedinIn
              className='social_icon'
              size={30}
            />
            <FaTwitter
              className='social_icon'
              size={30}
            />
            <FaInstagram
              className='social_icon'
              size={30}
            />
            <FaFacebookF
              className='social_icon'
              size={30}
            />
            <IoLogoGithub
              className='social_icon'
              size={30}
            />
          </div>
        </div> */}
      {/* </div> */}
      <div id='copyright_container'>
        <p id='copyright'>
          © Copyright 2024 Federico Desmoulin - All rights reserved
        </p>
      </div>
    </footer>
  )
}
