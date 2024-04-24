import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function Logo() {
  return (
    <div id='logo'>
      <Link href={Routes.find((route) => route.key === 'HOME')!.path}>
        <Image
          src='/img/png/moco_logo_light_h70.png'
          width={!isMobile ? 109 : 55}
          height={!isMobile ? 70 : 35}
          alt='Logo header'
        />
      </Link>
    </div>
  )
}
