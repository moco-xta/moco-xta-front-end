import React, {
  ComponentProps,
  ComponentType,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  Ref,
  RefAttributes,
} from 'react'

export type TGSAPTimelineContext = {
  timeline: GSAPTimeline
}

export type TGSAPTimelineProvider = {
  delay?: number
  timeScale?: number
  labels?: TLabel[]
  children: JSX.Element
}

type TLabel = {
  name: string
  position: number | string
}

type TKeyframes = Record<string, string | Record<string, string>>

// #########################################################################
// #########################################################################
// #########################################################################
// #########################################################################
// #########################################################################

export declare const editableRewrited: <
  T extends keyof JSX.IntrinsicElements,
  U extends 'group' | 'mesh',
>(
  Component: T,
  type: T extends 'primitive' ? null : U, // https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
) => ForwardRefExoticComponent<
  PropsWithoutRef<{
    elementKey: string
    visible?: boolean | 'editor' | undefined
  }> &
    RefAttributes<unknown>
> & {
  group: ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').GroupProps, 'visible'> & {
      elementKey: string
      visible?: boolean | 'editor' | undefined
      ref?: Ref<unknown> | undefined
    }
  >
} /* & {

} */

export declare const editable: (<
  T extends keyof JSX.IntrinsicElements | ComponentType<any>,
  U extends 'group' | 'mesh',
>(
  Component: T,
  type: T extends 'primitive' ? null : U,
) => ForwardRefExoticComponent<
  PropsWithoutRef<
    Omit<ComponentProps<T>, 'visible'> & {
      elementKey: string
      visible?: boolean | 'editor' | undefined
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
      elementKey: string
      visible?: boolean | 'editor' | undefined
      ref?: Ref<unknown> | undefined
    }
  >
  mesh: React.ForwardRefExoticComponent<
    Omit<import('@react-three/fiber').MeshProps, 'visible'> & {
      elementKey: string
      visible?: boolean | 'editor' | undefined
      ref?: Ref<unknown> | undefined
    }
  >
} & {
  primitive: React.ForwardRefExoticComponent<
    {
      object: any
      elementKey: string
      visible?: boolean | 'editor' | undefined
      editableType: keyof JSX.IntrinsicElements
      ref?: Ref<unknown> | undefined
    } & {
      [props: string]: any
    }
  >
}

// export default editable
//# sourceMappingURL=editable.d.ts.map
