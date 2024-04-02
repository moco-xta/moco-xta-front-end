import { IntroductionCardDataInterface } from '@/interfaces/dataInterfaces'
import { ReviewCardDataInterface } from './componentsInterfaces'

export interface ForwardRefGltfInterface extends THREE.Mesh {
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
