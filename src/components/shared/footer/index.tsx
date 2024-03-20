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
      <div id='logo_contact_and_socials_container'>
        <div id='logo'>Logo</div>
        <div id='contacts_container'>
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
        <div id='socials_container'>
          <FaLinkedinIn size={30} />
          <FaTwitter size={30} />
          <FaInstagram size={30} />
          <FaFacebookF size={30} />
          <IoLogoGithub size={30} />
        </div>
        <p>© Copyright 2024 Federico Desmoulin</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}
