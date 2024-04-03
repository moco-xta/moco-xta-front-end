import * as THREE from 'three'

import { SkillsLogoInterface } from '@/interfaces/dataInterfaces'

import { default as skillsConstants } from '@/constants/skillsConstants.json'

import { degreesToRadians } from '@/helpers/r3fHelpers'
import { SkillsLogoJsonInterface } from '@/interfaces/constantsInterfaces'
import { ForwardRefExoticComponent, RefAttributes, lazy } from 'react'
import { GroupProps } from '@react-three/fiber'
import pointer from 'json-pointer'

interface ComponentsInterface {
  [key: string]: ForwardRefExoticComponent<
    Omit<GroupProps, 'ref'> & RefAttributes<THREE.Group<THREE.Object3DEventMap>>
  >
}

let components = Array.from(skillsConstants.LOGOS.DATA).reduce(
  (object: ComponentsInterface, logo) => {
    const Component = lazy(
      () =>
        new Promise((resolve, reject) => {
          import(`../components/r3f/models/logos/${logo.COMPONENT}`)
            .then((result) =>
              resolve(result.default ? result : { default: result }),
            )
            .catch(reject)
        }),
    )
    object[logo.COMPONENT] = Component
    return object
  },
  {},
)

export const skillsData: SkillsLogoInterface[] = Array.from(
  skillsConstants.LOGOS.DATA,
).map((logo: SkillsLogoJsonInterface) => {
  return {
    name: logo.NAME,
    category: pointer(skillsConstants, logo.CATEGORY),
    component: components[logo.COMPONENT],
    /* component: LogoPhotoshop, */
    geometry: {
      position: new THREE.Vector3(
        logo.GEOMETRY.POSITION.X,
        logo.GEOMETRY.POSITION.Z,
        logo.GEOMETRY.POSITION.Y,
      ),
      rotation: new THREE.Euler(
        degreesToRadians(logo.GEOMETRY.ROTATION.X),
        degreesToRadians(logo.GEOMETRY.ROTATION.Z),
        degreesToRadians(logo.GEOMETRY.ROTATION.Y),
      ),
      scale: new THREE.Vector3(
        logo.GEOMETRY.SCALE.X,
        logo.GEOMETRY.SCALE.Z,
        logo.GEOMETRY.SCALE.Y,
      ),
    },
  }
})

console.log(skillsData)
