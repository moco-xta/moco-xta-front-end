import { LocationInterface } from './location/locationInterfaces'

export interface AboutInterface {
  showInstructions: boolean
  accessToDeviceMotionAndOrientationGranted: boolean
  isFinalRender: boolean
  location: LocationInterface
  debug: {
    lights: boolean
  }
}

export interface AboutDesktopCanvasInterface {
  children: JSX.Element
}
