'use client'

import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'

gsap.registerPlugin(useGSAP)

export default function Page() {
  return <div className='page'>Home</div>
}
