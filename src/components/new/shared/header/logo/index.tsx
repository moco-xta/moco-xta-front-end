import React from 'react'
import Link from 'next/link'

import { Routes } from '@/routes/new/routes'

import LogoCanvas from '@/components/new/three/canvas/logo/LogoCanvas'

import './index.scss'

export default function Logo() {
  return (
    <div id='logo'>
      <Link href={Routes.find((route) => route.key === 'HOME')!.path}>
        <LogoCanvas />
      </Link>
    </div>
  )
}
