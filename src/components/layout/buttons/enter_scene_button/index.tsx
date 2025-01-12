import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { RootState } from '@/redux/store'

import './index.scss'

export default function EnterSceneButton() {
  const t = useTranslations('LAYOUT.BUTTONS')

  const { pointerLockControlsSelector } = useSelector((state: RootState) => state.playerPageState)

  return <button id={pointerLockControlsSelector}>{t('ENTER')}</button>
}
