import React from 'react'
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaMousePointer,
} from 'react-icons/fa'
import { LuTouchpad } from 'react-icons/lu'
import { useTranslations } from 'next-intl'

import { DesktopInstructionsInterface } from '@/interfaces/new/componentsInterfaces'

import IsClayRenderToggleButton from '@/components/new/buttons/is_clay_render_toggle_button'
import AboutEnterButton from '@/components/new/buttons/about_enter_button'

import './index.scss'

export default function DesktopInstructions({
  handleSetIsClayRender,
}: DesktopInstructionsInterface) {
  const t = useTranslations('ABOUT')

  return (
    <div id='desktop_instructions'>
      <h2 id='desktop_instructions_title'>{t('INSTRUCTIONS')}</h2>
      <div id='displacement_desktop_instructions'>
        <div id='displacement_keyboard_keys'>
          <FaArrowUp className='keyboard_key' />
          <div id='left_down_right_keys'>
            <FaArrowLeft className='keyboard_key' />
            <FaArrowDown className='keyboard_key' />
            <FaArrowRight className='keyboard_key' />
          </div>
        </div>
        <p>{t('USE_THE_KEYBOARD_ARROWS_TO_MOVE')}</p>
      </div>
      <p id='camera_orientation_desktop_instructions'>
        {t('USE')}{' '}
        <FaMousePointer
          id='mouse_pointer_icon'
          size={40}
        />{' '}
        {t('OR')}{' '}
        <LuTouchpad
          id='touchpad_icon'
          size={40}
        />{' '}
        {t('TO_DIRECT_THE_CAMERA')}
      </p>
      <p id='render_mode_desktop_instructions'>
        {t('CHOOSE_BETWEEN_CLAY_AND_FINAL_RENDER')}
      </p>
      <IsClayRenderToggleButton handleSetIsClayRender={handleSetIsClayRender} />
      <AboutEnterButton />
    </div>
  )
}
