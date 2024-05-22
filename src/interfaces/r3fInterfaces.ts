import {
  IntroductionCardDataInterface,
  ProjectDataInterface,
} from '@/interfaces/dataInterfaces'
import { ReviewDataInterface } from './componentsInterfaces'
import { GroupProps, MeshProps } from '@react-three/fiber'
import { MutableRefObject, Ref, RefObject } from 'react'

interface CoordinatesInterface {
  X: number
  Y: number
  Z: number
}

export interface ForwardRefGltfGroupInterface extends THREE.Group {
  width: number
}

interface LightsByCategoryInterface {
  TYPE: string
  COLOR?: string
  INTENSITY: number
  POSITIONS: CoordinatesInterface[]
}

export interface LightsInterface {
  canvasName: string
  data: LightsByCategoryInterface[]
}

export interface IntroductionCardCanvasInterface {
  content: IntroductionCardDataInterface
}

export interface IntroductionCardSceneInterface {
  content: IntroductionCardDataInterface
}

export interface ProjectCardCanvasInterface {
  content: ProjectDataInterface
}

export interface ProjectCardInterface {
  index: number
  currentProject: number
  projectData: ProjectDataInterface
}

export interface ProjectCardSceneInterface {
  content: ProjectDataInterface
}

export interface ProjectsSceneInterface {
  projectsRefs: { ref: RefObject<THREE.Group<THREE.Object3DEventMap>> }[]
}

export interface ReviewCanvasInterface {
  reviewIndex: number
  data: ReviewDataInterface
}

export interface ReviewCardInterface {
  data: ReviewDataInterface
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

export interface RotationGroupInterface {
  rubiksCubeRef: Ref<THREE.Group>
}

export interface RoundedCubeInterface extends MeshProps {}

export interface ColorPadInterface extends MeshProps {
  color: THREE.Color
}

export interface PadsInterface {
  colorPadIndex: MutableRefObject<number>
  coordinates: THREE.Vector3
}

export interface RatingStarInterface extends MeshProps {
  color: THREE.Color
}

export interface ReactThreeDreiInterface {
  position: THREE.Vector3
}

export interface RingInterface {
  rigidBodyType: 'fixed'
}

export interface StringElementInterface {
  position: THREE.Vector3
  rotation: THREE.Euler
}
