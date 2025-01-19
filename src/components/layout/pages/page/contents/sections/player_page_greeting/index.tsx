import React from 'react'
import { useSelector } from 'react-redux'

import type { TPlayerPageGreeting } from '@/types/components/layout/types'

import { RootState } from '@/redux/store'

import Instructions from './intructions'

import './index.scss'

export default function PlayerPageGreeting({ introduction }: TPlayerPageGreeting) {
  const { showInstructions } = useSelector((state: RootState) => state.playerPageState)

  return (
    <div
      className={`player_page_greeting_section ${showInstructions ? 'show_player_page_greeting' : 'hide_player_page_greeting'}`}
    >
      {introduction}
      <Instructions />
    </div>
  )
}
