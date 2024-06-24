import React from 'react'
import { useTranslations } from 'next-intl'

import { PressEscToLeaveInterface } from '@/interfaces/new/componentsInterfaces'

import './index.scss'

export default function PressEscToLeave({
  showInstructions,
}: PressEscToLeaveInterface) {
  const t = useTranslations('ABOUT')

  return (
    <div id='press_esc_to_leave'>
      {t('ESCAPE_POINTER_LOCK.PRESS')}
      <span
        id='esc_keyboard_key'
        className='keyboard_key'
      >
        ESC
      </span>
      {t('ESCAPE_POINTER_LOCK.TO_LEAVE')}
    </div>
  )
}
