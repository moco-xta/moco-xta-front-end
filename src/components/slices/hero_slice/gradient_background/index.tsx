import React, { useEffect, useRef } from 'react'

/* import './index.scss' */

export default function GradientBackground() {
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
    <div className='gradient_container'>
      <svg
        id='svg_bubble'
        xmlns='http://www.w3.org/2000/svg'
      >
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
      />
    </div>
  )
}
