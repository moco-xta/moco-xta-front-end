import React from 'react'

import type { TPlayerPage } from '@/types/components/layout/types'

import { PlayerPageGreeting } from '../page/contents/sections'

import './index.scss'

export default function PlayerPage({ introduction, canvas }: TPlayerPage) {
  return (
    <>
      <div id='player_canvas'>{canvas}</div>
      <PlayerPageGreeting introduction={introduction} />
    </>
  )
}
