import React, { Component, createRef, RefObject } from 'react'

import HeroBackgroundScene from './HeroBackgroundScene.js'

import './index.scss'

interface HeroBackgroundCanvasState {
  initialized: boolean
}

export default class HeroBackgroundCanvas extends Component<{}, HeroBackgroundCanvasState> {
  private heroBackgroundCanvasRef: RefObject<HTMLCanvasElement>

  constructor(props: any) {
    super(props)
    this.heroBackgroundCanvasRef = createRef()
  }

  componentDidMount() {
    this.init()
  }

  init = () => {
    new HeroBackgroundScene({
      container: this.heroBackgroundCanvasRef.current,
    })
  }

  /* render() {
    return (
      <div
        style={{
          zIndex: '1',
          position: 'absolute',
          top: '0px',
          left: '0px',
          // width: '50vw'
        }}
        ref={this.canvasRef}
      />
    )
  } */

  render() {
    return (
      <div id='hero_background_canvas_container'>
        <canvas
          id='hero_background_canvas'
          ref={this.heroBackgroundCanvasRef}
        ></canvas>
      </div>
    )
  }
}
