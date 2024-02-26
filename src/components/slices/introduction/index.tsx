'use client'

import React from 'react'

import IntroductionCard from '@/components/cards/introduction_card'
import RevealComponent from '@/components/shared/reveal_component'

import './index.scss'

const array = [{}, {}, {}, {}, {}, {}]

export default function Introduction() {
  return (
    <div id='introduction_slice'>
      <div id='introduction_content'>
        <RevealComponent
          x={100}
          y={100}
          duration={'500ms'}
          threshold={0.75}
        >
          <p className='intersection_obserever'>Introduction</p>
        </RevealComponent>
        <RevealComponent
          x={100}
          y={100}
          duration={'500ms'}
          threshold={0.75}
        >
          <h2 className='intersection_obserever'>Overview</h2>
        </RevealComponent>

        <RevealComponent
          x={100}
          y={100}
          duration={'500ms'}
          threshold={0.75}
        >
          <p className='intersection_obserever'>
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients
            to create efficient, scalable, and user-friendly solutions that
            solve real-world problems. Let's work together to bring your ideas
            to life!
          </p>
        </RevealComponent>

        <div id='cards_container'>
          {array.map((card, index) => {
            return <IntroductionCard key={`introductionCard_${index}`} />
          })}
        </div>
      </div>
    </div>
  )
}
