'use client'

import React, { RefObject, useEffect, useRef } from 'react'

import RevealComponent from '@/components/shared/reveal_component'

import { getUvMousePositionOnDiv } from '@/utils/cssUtils'

import './index.scss'

const array = [{}, {}, {}, {}, {}, {}]

function Card() {
  const cardRef = useRef<HTMLElement>(null)

  function handleMouseMove(e: MouseEvent): void {
    const { x, y } = getUvMousePositionOnDiv(e)
    cardRef.current!.style.transform = `perspective(1000px) rotateX(${y * 12}deg) rotateY(${x * 12}deg)`
  }

  useEffect(() => {
    cardRef.current!.addEventListener('mousemove', handleMouseMove)
    return () => {
      cardRef.current!.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={cardRef as RefObject<HTMLDivElement>}
      className='card'
    >
      Test
    </div>
  )
}

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
            return <Card />
          })}
        </div>
      </div>
    </div>
  )
}
