import React from 'react'
import { RapierRigidBody, RigidBody, RigidBodyProps } from '@react-three/rapier'

export type TRigidBodyWrapper = RigidBodyProps & {
  registerRigidBody: (name: string, rigidBody: RapierRigidBody) => void
}

export const RigidBodyWrapper = ({
  name,
  registerRigidBody,
  children,
  ...rest
}: TRigidBodyWrapper) => {
  return (
    <RigidBody
      name={name}
      ref={(rb: RapierRigidBody | null) => registerRigidBody(name!, rb!)}
      colliders='hull'
      restitution={0.2}
      {...rest}
    >
      {children}
    </RigidBody>
  )
}
