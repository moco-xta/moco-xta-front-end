import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import type { TPlayerPageGreeting } from '@/types/components/layout/types'

import { RootState } from '@/redux/store'

import Instructions from './intructions'

import './index.scss'

export default function PlayerPageGreeting({ introduction }: TPlayerPageGreeting) {
  const t = useTranslations('LAYOUT.PLAYER_PAGE.LEAVE_SCENE')
  const { showInstructions } = useSelector((state: RootState) => state.playerPageState)

  return (
    <>
      <div
        className={`player_page_greeting_section ${showInstructions ? 'show_player_page_greeting' : 'hide_player_page_greeting'}`}
      >
        {introduction}
        <Instructions />
      </div>
      <div
        id='press_escape_to_leave'
        className={`${!showInstructions ? 'show_ecape_to_leave' : 'hide_escape_to_leave'}`}
      >
        {t('PRESS')}
        <span
          id='escape_keyboard_key'
          className='keyboard_key'
        >
          ESC
        </span>
        {t('TO_LEAVE')}
      </div>
    </>
  )
}
