import React from 'react'
import Link from 'next/link'
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
      <div id='links_and_contact_container'>
        <div id='links_container'>
          {Routes.filter((route) => route.hasOwnProperty('index'))
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
            ))}
        </div>
        <div id='contact_and_logo_container'>
          <div id='footer_logo_container'>
            <img
              id='footer_logo'
              src='/img/png/moco_logo_normal_h300.png'
            />
          </div>
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
            <FaLinkedinIn size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaFacebookF size={30} />
            <IoLogoGithub size={30} />
          </div>
        </div>
      </div>
      <div id='copyright_container'>
        <p id='copyright'>
          © Copyright 2024 Federico Desmoulin - All rights reserved
        </p>
      </div>
    </footer>
  )
}
