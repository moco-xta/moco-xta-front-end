import React from 'react'
import { LuRotate3D } from 'react-icons/lu'
import { useTranslations } from 'next-intl'

import { MobileInstructionsInterface } from '@/interfaces/new/componentsInterfaces'

import IsClayRenderToggleButton from '@/components/new/buttons/is_clay_render_toggle_button'
import AboutEnterButton from '@/components/new/buttons/about_enter_button'

import './index.scss'

export default function MobileInstructions({
  handleSetIsClayRender,
}: MobileInstructionsInterface) {
  const t = useTranslations('ABOUT')

  return (
    <div id='mobile_instructions'>
      <p>
        {t('INSTRUCTIONS.ROTATE')}{' '}
        <LuRotate3D
          id='rotate_3D_icon'
          size={35}
        />{' '}
        {t('INSTRUCTIONS.YOUR_PHONE')} {t('INSTRUCTIONS.TO_DIRECT_THE_CAMERA')}
      </p>
      <p id='displacement_mobile_instructions'>
        {t('INSTRUCTIONS.DISPLACEMENT_IS_COMING_SOON')}! :&#41;
      </p>
      <p id='render_mode_desktop_instructions'>
        {t('CHOOSE_BETWEEN_CLAY_AND_FINAL_RENDER')}
      </p>
      <IsClayRenderToggleButton handleSetIsClayRender={handleSetIsClayRender} />
      <AboutEnterButton />
    </div>
  )
}
