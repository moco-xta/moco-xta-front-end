import React from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslations } from 'next-intl'

import DesktopInstructions from './desktop_instructions'
import MobileInstructions from './mobile_instructions'

import './index.scss'

export default function Instructions() {
  const t = useTranslations('ABOUT')

  return <>{!isMobile ? <DesktopInstructions /> : <MobileInstructions />}</>
}
