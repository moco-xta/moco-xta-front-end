'use client'

import React, { useEffect, useRef } from 'react'
import { MdComputer } from 'react-icons/md'

import DefaultCanvas from '@/components/r3f/canvas/default_canvas'

import './index.scss'

export default function HeroSlice() {
  const bubbleRef = useRef()
  let curX = 0
  let curY = 0
  let tgX = 0
  let tgY = 0

  function move(event: any) {
    tgX = event.clientX
    tgY = event.clientY
    curX += (tgX - curX) / 20
    curY += (tgY - curY) / 20
    if (bubbleRef.current)
      // @ts-ignore
      bubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
  }

  useEffect(() => {
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div id='hero_slice'>
      <div className='gradient_container'>
        <svg id='svg_bubble' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <filter id='goo'>
              <feGaussianBlur
                in='SourceGraphic'
                stdDeviation='10'
                result='blur'
              />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                result='goo'
              />
              <feBlend
                in='SourceGraphic'
                in2='goo'
              />
            </filter>
          </defs>
        </svg>
        <div className='g1'></div>
        <div className='g2'></div>
        <div className='g3'></div>
        <div className='g4'></div>
        <div className='g5'></div>
        <div
          ref={bubbleRef as any}
          className='interactive'
        ></div>
        <div id='head_text'>
          <p id='role'>
            <MdComputer />
            <span>Creative developer</span>
          </p>
          <h1 id='heading'>
            Hi, I'm <span className='gradient_text'>Federico</span>
          </h1>
          <h3 id='subheading'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h3>
        </div>
        <div id='default_scene_container'>
          <DefaultCanvas />
        </div>
      </div>
    </div>
  )
}
