'use client'

import React from 'react'

import RevealComponent from '@/components/shared/reveal_component'

import './index.scss'

export default function Contact() {
  return (
    <div id='contact_container'>
      <div id='contact_head_text'>
        <RevealComponent
          x={100}
          y={100}
          duration={'500ms'}
          threshold={0.75}
        >
          <p>Federico</p>
          <p>Desmoulin</p>
        </RevealComponent>
      </div>
      <div id='contact_socials_container'>
        <RevealComponent
          x={100}
          y={100}
          duration={'500ms'}
          threshold={0.75}
        >
          <div>
            <h2>Social</h2>
          </div>
          <div>
            <h2>Contact</h2>
            <p>+33 6 35 67 87 75</p>
            <p>moco.xta@gmail.com</p>
          </div>
        </RevealComponent>
      </div>
    </div>
  )
}