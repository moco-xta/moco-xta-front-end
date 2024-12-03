import * as THREE from 'three'

export interface SceneInterface {
  sceneName: string
  steps: number
}

interface CoordinatesInterface {
  x: number
  y: number
  z: number
}

interface SelectedAxisInterface {
  x?: boolean
  y?: boolean
  z?: boolean
}

interface RandomRangeInterface {
  min: number
  max: number
  decimal?: number
}

export interface RandomRangePositionInterface {
  min: number | CoordinatesInterface
  max: number | CoordinatesInterface
  decimal?: number
}

interface GetSceneDelayInterface {
  scenes: SceneInterface[]
  sceneName: string
  offset: number
  stagger?: {
    index: number
    offset: number
  }
}

export const getSceneDelay = ({ scenes, sceneName, offset, stagger }: GetSceneDelayInterface) => {
  const steps: number[] = []
  let frame: number = 0

  scenes.forEach((keyframe, index) => {
    steps.push(keyframe.steps)
    if (keyframe.sceneName === sceneName) frame = index
  })

  const delay = !stagger
    ? steps.slice(0, frame).reduce((a, b) => a + b, 0) + offset
    : steps.slice(0, frame).reduce((a, b) => a + b, 0) + offset + stagger.index * stagger.offset

  console.log('delay', delay)

  return delay
}

export const getDelay = (keyframeName: string, keyframes: SceneInterface[]) => {
  const steps: number[] = []
  let keyframeIndex: number = 0

  keyframes.forEach((keyframe, index) => {
    steps.push(keyframe.steps)
    if (keyframe.sceneName === keyframeName) keyframeIndex = index
  })

  return steps.slice(0, keyframeIndex).reduce((a, b) => a + b, 0) + 1
}

export const getRandomInt = ({ min, max, decimal = 1 }: RandomRangeInterface) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return (Math.floor(Math.random() * (max - min + 1)) + min) * decimal
}

const randomPositiveOrNegative = () => {
  return Math.random() < 0.5 ? -1 : 1
}

export const setRandomPosition = ({ min, max, decimal = 1 }: RandomRangePositionInterface) => {
  return new THREE.Vector3(
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : min.x,
        max: typeof max !== 'object' ? max : max.x,
        decimal: decimal,
      }),
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : min.y,
        max: typeof max !== 'object' ? max : max.y,
        decimal: decimal,
      }),
    randomPositiveOrNegative() *
      getRandomInt({
        min: typeof min !== 'object' ? min : min.z,
        max: typeof max !== 'object' ? max : max.z,
        decimal: decimal,
      }),
  )
}

export const setRandomRotation = ({ x, y, z }: SelectedAxisInterface) => {
  return new THREE.Euler(
    x ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
    y ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
    z ? THREE.MathUtils.degToRad(getRandomInt({ min: 0, max: 360 })) : 0,
  )
}
