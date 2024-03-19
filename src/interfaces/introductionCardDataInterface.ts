import { GroupProps } from '@react-three/fiber'

export interface IntroductionCardDataInterface {
  name: string
  logo: {
    component: (props: GroupProps) => JSX.Element
    position: {
      [key: string]: number
    }
    scale: {
      [key: string]: number
    }
  }
  description: {
    key: string
    position: {
      [key: string]: number
    }
  }
}
