import { ComponentType, lazy, LazyExoticComponent } from 'react'
import { GroupProps } from '@react-three/fiber'

type TLazyModel = LazyExoticComponent<ComponentType<GroupProps>>

type TModelConstants = {
  key: string
  component: string
}

type TModelData = {
  key: string
  component: Record<string, TLazyModel>
}

function loadModel(component: string): TLazyModel {
  return lazy(
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
}

export function getModelsData(modelsConstants: TModelConstants[]): TModelData[] {
  const modelsData: TModelData[] = Array.from(modelsConstants).map((model: TModelConstants) => {
    const data = {
      key: model.key,
      component: Array.from(modelsConstants).reduce(
        (object, logo) => {
          object[logo.component] = loadModel(logo.component)
          return object
        },
        {} as Record<string, TLazyModel>,
      ),
    }
    return data
  })

  return modelsData
}
