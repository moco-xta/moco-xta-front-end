import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { EnterSceneButton } from '@/components/layout/buttons'

import './index.scss'

export default function PlayerPageGreeting() {
  const { showInstructions } = useSelector((state: RootState) => state.playerPageState)

  return (
    <section
      id='player_page_greeting_section'
      className={`${showInstructions ? 'show_player_page_greeting' : 'hide_player_page_greeting'}`}
    >
      <EnterSceneButton />
    </section>
  )
}
