import React from 'react'

import { introductionSkillCards } from '@/ata/introductionSkillCards'

import IntroductionCard from '@/components/cards/introduction_card'

import './index.scss'

export default function IntroductionCards() {
  return (
    <div id='introduction_cards_wrapper'>
      {introductionSkillCards.map((content, index) => {
        return <IntroductionCard key={`introductionCard_${index}`} content={content} />
      })}
    </div>
  )
}
