import React, {
  ComponentProps,
  ComponentType,
  ForwardRefExoticComponent,
  Ref,
  RefAttributes,
} from 'react'

declare const editable: (<
  T extends keyof JSX.IntrinsicElements | ComponentType<any>,
  U extends 'mesh' | 'group',
>(
  Component: T,
  type: T extends 'primitive' ? null : U,
) => ForwardRefExoticComponent<
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
  group: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').GroupProps, 'visible'> & {
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
}

export default editable
