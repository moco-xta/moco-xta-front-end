import React from 'react'
import Link from 'next/link'

import { InternalLinkInterface } from '@/interfaces/buttonsInterfaces'

import './index.scss'

export default function InternalLinkButton({ path, text, style }: InternalLinkInterface) {
  return (
    <div
      className='internal_link_button'
      style={style}
    >
      <Link href={path}>{text}</Link>
    </div>
  )
}
