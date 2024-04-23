import { MutableRefObject } from 'react'
import { RapierRigidBody } from '@react-three/rapier'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export function addForce(
  timeRef: MutableRefObject<number>,
  delta: number,
  xRef: MutableRefObject<number>,
  yRef: MutableRefObject<number>,
  zRef: MutableRefObject<number>,
  mRef: MutableRefObject<RapierRigidBody>,
  o1Ref: MutableRefObject<RapierRigidBody>,
  cRef: MutableRefObject<RapierRigidBody>,
  o2Ref: MutableRefObject<RapierRigidBody>,
) {
  timeRef.current += delta * 2
  xRef.current =
    Math.cos(timeRef.current) *
    heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.ADD_FORCE.INTENSITY
  yRef.current =
    Math.sin(timeRef.current) *
    heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.ADD_FORCE.INTENSITY
  zRef.current =
    -Math.cos(
      timeRef.current +
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.ADD_FORCE.Z_THRESHOLD,
    ) * heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.ADD_FORCE.INTENSITY
  if (mRef.current)
    // @ts-ignore
    mRef.current.addForce(
      {
        x: xRef.current,
        y: yRef.current,
        z: zRef.current,
      },
      true,
    )
  if (o1Ref.current)
    // @ts-ignore
    o1Ref.current.addForce(
      {
        x: xRef.current,
        y: yRef.current,
        z: zRef.current,
      },
      true,
    )
  if (cRef.current)
    // @ts-ignore
    cRef.current.addForce(
      {
        x: xRef.current,
        y: yRef.current,
        z: zRef.current,
      },
      true,
    )
  if (o2Ref.current)
    // @ts-ignore
    o2Ref.current.addForce(
      {
        x: xRef.current,
        y: yRef.current,
        z: zRef.current,
      },
      true,
    )
}

export function applyImpulse(
  deltaX: number,
  deltaY: number,
  mRef: MutableRefObject<RapierRigidBody>,
  o1Ref: MutableRefObject<RapierRigidBody>,
  cRef: MutableRefObject<RapierRigidBody>,
  o2Ref: MutableRefObject<RapierRigidBody>,
) {
  if (mRef.current) {
    if (deltaX > 0)
      // @ts-ignore
      mRef.current.applyImpulse({
        x:
          deltaX *
          heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS
            .APPLY_IMPULSE_INTENSITY,
        y:
          -deltaY *
          heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS
            .APPLY_IMPULSE_INTENSITY,
        z: 0,
      })
    // @ts-ignore
    o1Ref.current.applyImpulse({
      x:
        deltaX *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      y:
        -deltaY *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      z: 0,
    })
    // @ts-ignore
    cRef.current.applyImpulse({
      x:
        deltaX *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      y:
        -deltaY *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      z: 0,
    })
    // @ts-ignore
    o2Ref.current.applyImpulse({
      x:
        deltaX *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      y:
        -deltaY *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      z: 0,
    })
    if (deltaX < 0)
      // @ts-ignore
      mRef.current.applyImpulse({
        x:
          deltaX *
          heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS
            .APPLY_IMPULSE_INTENSITY,
        y:
          -deltaY *
          heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS
            .APPLY_IMPULSE_INTENSITY,
        z: 0,
      })
    // @ts-ignore
    o1Ref.current.applyImpulse({
      x:
        deltaX *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      y:
        -deltaY *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      z: 0,
    })
    // @ts-ignore
    cRef.current.applyImpulse({
      x:
        deltaX *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      y:
        -deltaY *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      z: 0,
    })
    // @ts-ignore
    o2Ref.current.applyImpulse({
      x:
        deltaX *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      y:
        -deltaY *
        heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.APPLY_IMPULSE_INTENSITY,
      z: 0,
    })
  }
}
