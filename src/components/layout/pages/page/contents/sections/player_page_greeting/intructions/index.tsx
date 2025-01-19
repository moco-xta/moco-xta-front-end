import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaMousePointer } from 'react-icons/fa'
import { LuTouchpad } from 'react-icons/lu'
import { useTranslations } from 'next-intl'

import { EnterSceneButton } from '@/components/layout/buttons'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function Instructions() {
  const t = useTranslations('LAYOUT.PLAYER_PAGE.INSTRUCTIONS')

  return (
    <div className='instructions'>
      <h2 className='instructions_title'>{capitalizeFirstLetter(t('TITLE'))}</h2>

      <div className='displacement_desktop_instructions'>
        <div className='displacement_keyboard_keys'>
          <FaArrowUp className='keyboard_key' />
          <div className='left_down_right_keys'>
            <FaArrowLeft className='keyboard_key' />
            <FaArrowDown className='keyboard_key' />
            <FaArrowRight className='keyboard_key' />
          </div>
        </div>
        <p>{capitalizeFirstLetter(t('USE_THE_KEYBOARD_ARROWS_TO_MOVE'))}</p>
      </div>
      <p className='camera_orientation_desktop_instructions'>
        {capitalizeFirstLetter(t('USE'))}{' '}
        <FaMousePointer
          className='mouse_pointer_icon'
          size={40}
        />{' '}
        {t('OR')}{' '}
        <LuTouchpad
          className='touchpad_icon'
          size={40}
        />{' '}
        {t('TO_DIRECT_THE_CAMERA')}
      </p>
      <EnterSceneButton />
    </div>
  )
}
