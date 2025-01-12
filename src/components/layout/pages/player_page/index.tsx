import React from 'react'

import type { TPlayerPage } from '@/types/components/layout/types'
import { PlayerPageGreeting } from '../page/contents/sections'

import './index.scss'

export default function PlayerPage({ canvas }: TPlayerPage) {
  return (
    <>
      <section id='player_canvas'>{canvas}</section>
      <PlayerPageGreeting />
    </>
  )
}
