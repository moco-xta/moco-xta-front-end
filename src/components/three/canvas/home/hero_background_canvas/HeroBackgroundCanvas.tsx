import React, { Component, createRef, RefObject } from 'react'

import HeroBackgroundScene from './HeroBackgroundScene.js'

interface HeroBackgroundCanvasState {
  initialized: boolean
}

export default class HeroBackgroundCanvas extends Component<{}, HeroBackgroundCanvasState> {
  private canvasRef: RefObject<HTMLDivElement>

  constructor(props: any) {
    super(props)
    this.canvasRef = createRef()
  }

  componentDidMount() {
    this.init()
  }

  init = () => {
    new HeroBackgroundScene({
      container: this.canvasRef.current,
    })
  }

  render() {
    return (
      <div
        style={{
          zIndex: '1',
          position: 'absolute',
          top: '0px',
          left: '0px',
          /* width: '50vw' */
        }}
        ref={this.canvasRef}
      />
    )
  }
}
