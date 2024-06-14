import React, { Component, createRef, RefObject } from 'react'

import ContactScene from './ContactScene.js'

interface ContactSceneState {
  initialized: boolean
}

export default class DefaultThreeScene extends Component<
  {},
  ContactSceneState
> {
  private canvasRef: RefObject<HTMLDivElement>

  constructor(props: any) {
    super(props)
    this.canvasRef = createRef()
  }

  componentDidMount() {
    this.init()
  }

  init = () => {
    new ContactScene({
      container: this.canvasRef.current,
    })
  }

  render() {
    return <div ref={this.canvasRef} />
  }
}
