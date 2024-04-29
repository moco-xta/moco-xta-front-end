import React from 'react'

import { IntroductionCardsInterface } from '@/interfaces/componentsInterfaces'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'
import IntroductionCardCanvas from '@/components/r3f/canvas/introduction_card_canvas'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function IntroductionCards({
  data,
  type,
}: IntroductionCardsInterface) {
  return (
    <div className='introduction_cards_container'>
      {data.map((content, index) => {
        return (
          <RevealTextBlock
            key={`introduction_${type}_card_container_${index}`}
            threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
            duration={'200ms'}
            delay={`${0.2 * (index + 1)}s`}
            x={50}
            y={50}
            style={{ margin: -40 }}
          >
            <div className='introduction_card_canvas_container'>
              <IntroductionCardCanvas content={content} />
            </div>
          </RevealTextBlock>
        )
      })}
    </div>
  )
}
