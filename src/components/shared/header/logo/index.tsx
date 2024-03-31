import React from 'react'
import Link from 'next/link'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function Logo() {
  return (
    <div id='logo'>
      <Link href={Routes.find((route) => route.key === 'HOME')!.path}>
        <img src="/img/png/moco_logo_light_h70.png" alt="Girl in a jacket" />
      </Link>
    </div>
  )
}
