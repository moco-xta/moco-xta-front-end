import React from 'react'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { getDegreeEuler } from '@/helpers/threeHelpers'

import { mocoHeliumData } from '@/data/hero/three/moco_helium/mocoHeliumData'

import { wrapperMaterial } from '@/components/three/materials/moco_helium/mocoHeliumMaterials'

export default function Wrapper() {
  return (
    <group>
      <RigidBody type='fixed'>
        <Plane
          args={[mocoHeliumData.wrapper.args.width, mocoHeliumData.wrapper.args.depth]}
          position={[0, mocoHeliumData.wrapper.args.height / 2, 0]}
          rotation={getDegreeEuler({ x: 90 })}
          material={wrapperMaterial}
          onUpdate={(self) => self.layers.set(1)}
        />
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[mocoHeliumData.wrapper.args.width, mocoHeliumData.wrapper.args.depth]}
          position={[0, -mocoHeliumData.wrapper.args.height / 2, 0]}
          rotation={getDegreeEuler({ x: 90 })}
          material={wrapperMaterial}
          onUpdate={(self) => self.layers.set(1)}
        />
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[mocoHeliumData.wrapper.args.width, mocoHeliumData.wrapper.args.height]}
          position={[0, 0, -mocoHeliumData.wrapper.args.depth / 2]}
          material={wrapperMaterial}
          onUpdate={(self) => self.layers.set(1)}
        />
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[mocoHeliumData.wrapper.args.width, mocoHeliumData.wrapper.args.height]}
          position={[0, 0, mocoHeliumData.wrapper.args.depth / 2]}
          material={wrapperMaterial}
          onUpdate={(self) => self.layers.set(1)}
        />
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[mocoHeliumData.wrapper.args.depth, mocoHeliumData.wrapper.args.height]}
          position={[-mocoHeliumData.wrapper.args.width / 2, 0, 0]}
          rotation={getDegreeEuler({ y: 90 })}
          material={wrapperMaterial}
          onUpdate={(self) => self.layers.set(1)}
        />
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[mocoHeliumData.wrapper.args.depth, mocoHeliumData.wrapper.args.height]}
          position={[mocoHeliumData.wrapper.args.width / 2, 0, 0]}
          rotation={getDegreeEuler({ y: -90 })}
          material={wrapperMaterial}
          onUpdate={(self) => self.layers.set(1)}
        />
      </RigidBody>
    </group>
  )
}
