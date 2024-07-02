import { ComponentType, LazyExoticComponent, lazy } from 'react'
import { MeshProps } from '@react-three/fiber'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

type LazyPadType = LazyExoticComponent<ComponentType<MeshProps>>

const loadComponent = (component: string): LazyPadType =>
  lazy(
    () =>
      new Promise((resolve, reject) => {
        import(`../components/three/models/rubiks_cube/${component}`)
          .then((result) =>
            resolve(
              result.default
                ? result
                : {
                    default: result,
                  },
            ),
          )
          .catch(reject)
      }),
  )

const padsComponents: Record<string, LazyPadType> = Array.from(
  rubiksCubeConstants.RUBIKS_CUBE.PADS,
).reduce(
  (object, pad) => {
    object[pad.COMPONENT] = loadComponent(pad.COMPONENT)
    return object
  },
  {} as Record<string, LazyPadType>,
)

interface PadDataInterface {
  name: string
  component: LazyPadType
}

interface PadJsonInterface {
  NAME: string
  COMPONENT: string
}

export const padsData: PadDataInterface[] = Array.from(rubiksCubeConstants.RUBIKS_CUBE.PADS).map(
  (pad: PadJsonInterface) => {
    return {
      name: pad.NAME,
      component: padsComponents[pad.COMPONENT],
    }
  },
)
