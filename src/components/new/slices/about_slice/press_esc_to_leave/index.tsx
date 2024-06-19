import React from 'react'
import { useTranslations } from 'next-intl'

import { PressEscToLeaveInterface } from '@/interfaces/new/componentsInterfaces'

import './index.scss'

export default function PressEscToLeave({ showInstructions }: PressEscToLeaveInterface) {
  const t = useTranslations('ABOUT')

  return (
    <div
      id='press_esc_to_leave'
      className={`${showInstructions ? 'hide_press_esc' : 'show_press_esc'}`}
    >
      {t('PRESS')}
      <span
        id='esc_keyboard_key'
        className='keyboard_key'
      >
        ESC
      </span>
      {t('TO_LEAVE')}
    </div>
  )
}
