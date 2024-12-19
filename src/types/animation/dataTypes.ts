export type TAnimatedComponentData<T> = {
  label?: string
  duration: number
  defaultValues?: Partial<T>
  animations: TAnimationsData<T>
}

export type TDefaultValues = {
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
}

export type TAnimationsData<T> = Partial<Record<keyof T, TAnimation>>

type TAnimation = {
  keyframes: TKeyframesData
}

export type TKeyframesData =
  | Record<string, Record<string, string | number>>
  | {
      easeEach?: string
    }
