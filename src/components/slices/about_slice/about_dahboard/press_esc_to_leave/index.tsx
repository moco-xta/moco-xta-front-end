import React from 'react'
import { useTranslations } from 'next-intl'

import EscapeKey from '@/components/shared/keyboard_keys/EscapeKey'

import './index.scss'

export default function PressEscToLeave() {
  const t = useTranslations('ABOUT')

  return (
    <div id='press_esc_to_leave'>
      {t('ESCAPE_POINTER_LOCK.PRESS')}
      <EscapeKey />
      {t('ESCAPE_POINTER_LOCK.TO_LEAVE')}
    </div>
  )
}
