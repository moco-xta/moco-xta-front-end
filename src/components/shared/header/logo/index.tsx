import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Routes } from '@/routes/routes'

import logoPic from '/public/img/png/moco_logo_light_h70.png'

import './index.scss'

export default function Logo() {
  return (
    <div id='logo_container'>
      <Link href={Routes.find((route) => route.key === 'HOME')!.path}>
        <Image
          src={logoPic}
          id='logo'
          alt='Logo header'
        />
      </Link>
    </div>
  )
}
