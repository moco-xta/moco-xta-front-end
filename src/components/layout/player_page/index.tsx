import React from 'react'

import type { TPlayerPage } from '@/types/components/layout/types'

import PlayerPageGreeting from '../slices/player_page_greeting'

import './index.scss'

export default function PlayerPage({ id, /* introduction, */ canvas }: TPlayerPage) {
  return (
    <div
      id={id}
      className='player_page'
    >
      <div id='player_page_canvas'>{canvas}</div>
      <PlayerPageGreeting /* introduction={introduction} */ />
    </div>
  )
}
