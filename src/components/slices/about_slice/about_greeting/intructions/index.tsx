import React from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslations } from 'next-intl'

import DesktopInstructions from './desktop_instructions'
import MobileInstructions from './mobile_instructions'
import IsClayRenderToggleButton from '@/components/buttons/is_clay_render_toggle_button'
import AboutEnterButton from '@/components/buttons/about_enter_button'

import './index.scss'

export default function Instructions() {
  const t = useTranslations('ABOUT')

  return (
    <div id={`${!isMobile ? 'desktop_instructions' : 'mobile_instructions'}`}>
      <h2 id='instructions_title'>{t('INSTRUCTIONS.INSTRUCTIONS')}</h2>
      {!isMobile ? <DesktopInstructions /> : <MobileInstructions />}
      <p id='render_mode_instructions'>{t('INSTRUCTIONS.CHOOSE_BETWEEN_CLAY_AND_FINAL_RENDER')}</p>
      <IsClayRenderToggleButton />
      <AboutEnterButton />
    </div>
  )
}
