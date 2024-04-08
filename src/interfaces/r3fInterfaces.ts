import { IntroductionCardDataInterface } from '@/interfaces/dataInterfaces'
import { ReviewCardDataInterface } from './componentsInterfaces'
import { GroupProps, MeshProps } from '@react-three/fiber'
import { Ref } from 'react'

export interface ForwardRefGltfGroupInterface extends THREE.Group {
  width: number
}

export interface IntroductionCardCanvasInterface {
  content: IntroductionCardDataInterface
}

export interface IntroductionCardSceneInterface {
  content: IntroductionCardDataInterface
}

export interface StarCanvasInterface {
  data: ReviewCardDataInterface
}

export interface StarSceneInterface {
  data: ReviewCardDataInterface
}

export interface ColorPadAndArrowInterface {
  groupRotation: THREE.Euler
  padRotation: THREE.Euler
  padColor: THREE.Color
  displayArrows: boolean
  exclude: number[]
  arrowsGroupRotation: THREE.Euler
  secondArrowRotation: THREE.Euler
}

export interface RotationGrooupInterface {
  rubiksCubeRef: Ref<THREE.Group>
}

export interface RoundedCubeInterface extends MeshProps {}

export interface ColorPadInterface extends GroupProps {
  color: THREE.Color
}
