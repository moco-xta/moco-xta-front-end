import { LocationInterface } from './locationInterfaces'

export interface AboutInterface {
  accessToDeviceMotionAndOrientationGranted: boolean
  showInstructions: boolean
  isFinalRender: boolean
  location: LocationInterface
  debug: {
    lights: boolean
  }
}
