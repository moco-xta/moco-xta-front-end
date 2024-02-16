import React from 'react'
import Link from 'next/link'

import { Routes } from '@/routes/routes'

import './index.scss'

export default function Logo() {
  return (
    <div id='logo'>
      <Link href={Routes.find((route) => route.name === 'Home')!.path}>
        Logo
      </Link>
    </div>
  )
}
