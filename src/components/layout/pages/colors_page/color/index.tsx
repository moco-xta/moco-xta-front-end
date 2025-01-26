import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FaCheck } from 'react-icons/fa6'

import type { TColorData } from '@/types/data/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { hexToRgba } from '@/helpers/colorsHelpers'

import './index.scss'

export type TColor = {
  color: TColorData
}

export default function Color({ color }: TColor) {
  const colorRef = useRef<HTMLDivElement>(null!)
  const copiedRef = useRef<HTMLDivElement>(null!)

  const [isHovered, setIsHovered] = useState<boolean>(false)

  function handleOnClick(color: string) {
    navigator.clipboard.writeText(color.toUpperCase())
    gsap.to(copiedRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: 'power3.in',
    })
  }

  function handleOnMouseEnter() {
    setIsHovered(true)
    gsap.to(colorRef.current, {
      x: '-=20px',
      height: '190px',
      // opacity: 1,
      duration: 0.15,
      ease: 'power3.out',
    })
    gsap.to(colorRef.current.children[0].children, {
      opacity: 1,
      duration: 0.15,
      ease: 'power3.out',
    })
  }

  function handleOnMouseLeave() {
    setIsHovered(false)
    gsap.to(colorRef.current, {
      x: 0,
      height: '100px',
      // opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      delay: '-=0.75',
    })
    gsap.to(colorRef.current.children[0].children, {
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      delay: '-=0.75',
    })
    gsap.to(copiedRef.current, {
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      delay: '-=1.5',
    })
  }

  return (
    <div
      ref={colorRef}
      className={`color ${isHovered ? 'hover' : ''}`}
      style={{ background: color.hex }}
      onClick={() => handleOnClick(color.hex)}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className='color_details'>
        <span className='color_name'>{capitalizeFirstLetter(color.name)}</span>
        <span className='color_hex'>{color.hex.toUpperCase()}</span>
        <span className='color_rgba'>{hexToRgba(color.hex)}</span>
      </div>

      <div
        ref={copiedRef}
        className='copied'
      >
        <FaCheck />
        Copied
      </div>
    </div>
  )
}
