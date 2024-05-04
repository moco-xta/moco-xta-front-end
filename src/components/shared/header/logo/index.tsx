import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Routes } from '@/routes/routes'

import useIsDesktop from '@/hooks/useIsDesktop'

import logoPic from '/public/img/png/moco_logo_light_h70.png'

import './index.scss'

export default function Logo() {
  const { isDesktop } = useIsDesktop()

  const [logoDimesion, setlogoDimension] = useState({
    width: 109,
    height: 70,
  })

  useEffect(() => {
    isDesktop ? setlogoDimension({ width: 110, height: 70 }) : setlogoDimension({ width: 55, height: 35 })
  }, [isDesktop])

  return (
    <div id='logo'>
      <Link href={Routes.find((route) => route.key === 'HOME')!.path}>
        <Image
          src={logoPic}
          id='logo_test'
          alt='Logo header'
        />
      </Link>
    </div>
  )
}
