import React, { createRef, useEffect } from 'react'
import HeroClass from './HeroClass.js'

export default function HeroCanvas() {
  const canvasRef = createRef<HTMLDivElement>()

  useEffect(() => {
    new HeroClass({
      // @ts-ignore
      container: canvasRef.current,
    })
  }, [])

  return <div ref={canvasRef}></div>
}
