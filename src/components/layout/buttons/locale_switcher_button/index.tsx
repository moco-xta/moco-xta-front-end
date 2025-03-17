import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch /* useSelector */ } from 'react-redux'
import { useLocale, useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaArrowRight } from 'react-icons/fa'
import { RiTranslate2 } from 'react-icons/ri'

import { AppDispatch /* RootState */ } from '@/redux/store'
import { setLocalSwitcherPositionContent, toggleLocaleSwitcher } from '@/redux/slices/appStateSlice'

import './index.scss'
import { helveticaRomanFont } from '@/app/fonts'

export default function LocaleSwitcherButton() {
  const t = useTranslations('LOCALES')
  const locale = useLocale()
  const dispatch = useDispatch<AppDispatch>()

  const localeSwitcherButtonRef = useRef<HTMLButtonElement>(null!)
  const timelineRef = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  const handleResize = useCallback(() => {
    const rect = localeSwitcherButtonRef.current.getBoundingClientRect()

    dispatch(
      setLocalSwitcherPositionContent({
        width: rect.width,
        top: rect.top + rect.height,
        left: rect.left,
      }),
    )
  }, [dispatch])

  useEffect(() => {
    if (localeSwitcherButtonRef.current) handleResize()
  }, [dispatch, handleResize, localeSwitcherButtonRef])

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useGSAP(() => {
    timelineRef.current
      .to('#tanslation_icon', {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power1.out',
      })
      .to(
        '#arrow_icon',
        {
          translateX: '15px',
          color: 'white',
          opacity: 1,
          duration: 0.25,
          ease: 'power1.out',
        },
        0,
      )
      .to(
        '#locale_text',
        {
          translateX: '15px',
          duration: 0.25,
          ease: 'power1.out',
        },
        0,
      )
  })

  const handleOnClick = () => {
    dispatch(toggleLocaleSwitcher())
  }

  const handleMouseEnter = () => {
    timelineRef.current.play()
  }
  const handleMouseLeave = () => {
    timelineRef.current.reverse()
  }

  return (
    <div
      id='locale_switcher_button_wrapper'
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FaArrowRight
        id='arrow_icon'
        size={10}
      />
      <button
        ref={localeSwitcherButtonRef}
        id='locale_switcher_button'
        className={`${helveticaRomanFont.className}`}
      >
        <span id='locale_text'>{t(locale.toUpperCase()).toUpperCase()}</span>
        <RiTranslate2 id='tanslation_icon' />
      </button>
    </div>
  )
}
