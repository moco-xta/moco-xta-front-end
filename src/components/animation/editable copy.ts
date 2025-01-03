import type { ComponentProps, ComponentType, Ref, RefAttributes } from 'react'
import React from 'react'
import type { $FixMe } from '../types'
declare const editable: (<
  T extends keyof JSX.IntrinsicElements | ComponentType<any>,
  U extends
    | 'spotLight'
    | 'line'
    | 'mesh'
    | 'lineSegments'
    | 'lineLoop'
    | 'points'
    | 'group'
    | 'perspectiveCamera'
    | 'orthographicCamera'
    | 'pointLight'
    | 'hemisphereLight'
    | 'directionalLight'
    | 'ambientLight'
    | 'fog',
>(
  Component: T,
  type: T extends 'primitive' ? null : U,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<
    Omit<ComponentProps<T>, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
    } & (T extends 'primitive'
        ? {
            editableType: U
          }
        : {}) &
      RefAttributes<JSX.IntrinsicElements[U]>
  > &
    RefAttributes<unknown>
>) & {
  spotLight: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').SpotLightProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  line: React.ForwardRefExoticComponent<
    Omit<React.SVGLineElementAttributes<SVGLineElement>, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  mesh: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').MeshProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  lineSegments: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').LineSegmentsProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  lineLoop: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').LineLoopProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  points: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').PointsProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  group: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').GroupProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  perspectiveCamera: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').PerspectiveCameraProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  orthographicCamera: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').OrthographicCameraProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  pointLight: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').PointLightProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  hemisphereLight: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').HemisphereLightProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  directionalLight: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').DirectionalLightProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  ambientLight: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').AmbientLightProps, 'visible'> & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
  fog: React.ForwardRefExoticComponent<
    Omit<
      import('@react-three/fiber').ExtendedColors<
        import('@react-three/fiber').Overwrite<
          Partial<import('three').Fog>,
          import('@react-three/fiber').NodeProps<import('three').Fog, typeof import('three').Fog>
        >
      >,
      'visible'
    > & {
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      ref?: Ref<unknown> | undefined
    }
  >
} & {
  primitive: React.ForwardRefExoticComponent<
    {
      object: any
      theatreKey: string
      visible?: boolean | 'editor' | undefined
      additionalProps?: $FixMe
      objRef?: $FixMe
      editableType: keyof JSX.IntrinsicElements
      ref?: Ref<unknown> | undefined
    } & {
      [props: string]: any
    }
  >
}
export default editable
//# sourceMappingURL=editable.d.ts.map
