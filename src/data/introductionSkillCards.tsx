import * as THREE from 'three'

import { IntroductionSkillCardInterface } from '@/interfaces/data/introductionSkillCardInterface'

import { LogoNextjs } from '@/components/r3f/logos/LogoNextjs'
import { LogoReactThreeDrei } from '@/components/r3f/logos/LogoReactThreeDrei'
import { LogoSpringBoot } from '../components/r3f/logos/LogoSpringBoot'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { Gltf } from '@react-three/drei'

export const introductionSkillCards: IntroductionSkillCardInterface[] = [
  {
    /* logo: <LogoReactThreeDrei position={new THREE.Vector3(0, 0, 0)}  scale={new THREE.Vector3(0, 0, 0)} />, */
    logo: <Gltf src={GltfConstants.LOGO_REACT_THREE_DREI} receiveShadow castShadow />,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    logo: <Gltf src={GltfConstants.LOGO_REACT_THREE_DREI} receiveShadow castShadow />,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    logo: <Gltf src={GltfConstants.LOGO_REACT_THREE_DREI} receiveShadow castShadow />,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
]
