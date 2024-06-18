import React, { Component, createRef, RefObject } from 'react'

import ProfilePictureScene from './ProfilePictureScene.js'

interface ProfilePictureSceneState {
  initialized: boolean
}

export default class ProfilePictureCanvas extends Component<
  {},
  ProfilePictureSceneState
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
    new ProfilePictureScene({
      container: this.canvasRef.current,
    })
  }

  render() {
    return (
      <div
        style={{ zIndex: '1', position: 'absolute', top: '0px', left: '0px' }}
        ref={this.canvasRef}
      />
    )
  }
}
