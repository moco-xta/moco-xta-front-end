import { ComponentType, LazyExoticComponent, lazy } from 'react'
import { GroupProps } from '@react-three/fiber'

import { default as logosConstants } from '@/constants/resources/three/logosConstants.json'

export type TLazyLogoType = LazyExoticComponent<ComponentType<GroupProps>>

type TLogoData = {
  name: string
  component: TLazyLogoType
}

type TLogoConstant = {
  name: string
  component: string
}

const loadComponent = (component: string): TLazyLogoType =>
  lazy(
    () =>
      new Promise((resolve, reject) => {
        import(`../../components/three/models/resources/${component}`)
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

const logosComponents: Record<string, TLazyLogoType> = Array.from(logosConstants).reduce(
  (object, logo) => {
    object[logo.component] = loadComponent(logo.component)
    return object
  },
  {} as Record<string, TLazyLogoType>,
)

export const logosData: TLogoData[] = Array.from(logosConstants).map((logo: TLogoConstant) => {
  const data = {
    name: logo.name,
    component: logosComponents[logo.component],
  }
  console.log('data', data)
  return data
})
