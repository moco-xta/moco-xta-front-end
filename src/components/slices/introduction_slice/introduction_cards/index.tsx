import React from 'react'

import { IntroductionCardsInterface } from '@/interfaces/components/introductionCardsInterface'

import IntroductionCardCanvas from '@/components/r3f/canvas/introduction_card_canvas'

import './index.scss'

export default function IntroductionCards({
  data,
  type,
}: IntroductionCardsInterface) {
  return (
    <div className='introduction_cards_container'>
      {data.map((content, index) => {
        return (
          <div
            key={`introduction_${type}_card_container_${index}`}
            className='introduction_card_canvas_container'
          >
            <IntroductionCardCanvas content={content} />
          </div>
        )
      })}
    </div>
  )
}
