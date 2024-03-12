'use client'

import React, { createRef, useEffect, useMemo, useRef } from 'react'

import { Routes } from '@/routes/routes'

import Logo from '@/components/shared/header/logo'
import { NavBar } from '@/components/shared/header/nav_bar'

import './index.scss'

export default function Header() {
  const navWrapperRef = useRef<HTMLDivElement>(null!)

  function handleScroll() {
    const position = window.scrollY

    const nav = navWrapperRef.current.querySelector('nav')
    const lis = navWrapperRef.current.querySelectorAll('.li_route')
    if (position < 100) {
      lis.forEach((li_route) => {
        nav!.style.marginTop = '20px'
        nav!.style.marginRight = '20px'
        // @ts-ignore
        li_route.style.marginRight = '20px'
      })
    } else {
      lis.forEach((li_route) => {
        nav!.style.marginTop = '0px'
        nav!.style.marginRight = '0px'
        // @ts-ignore
        li_route.style.marginRight = '0px'
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header>
      <Logo />
      <NavBar ref={navWrapperRef} />
    </header>
  )
}
