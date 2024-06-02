import * as THREE from 'three'

import { SnakeCellInterface } from '@/interfaces/new/newSnakeGameInterfaces'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export function updateCamera(snakeHead: SnakeCellInterface, direction: string) {
  let newGroupPosition = {
    x: 0,
    y: 0,
    z: 0,
  }
  let newGroupRotation = {
    x: 0,
    y: 0,
    z: 0,
  }
  let newCameraRotation = {
    x: 0,
    y: 0,
    z: 0,
  }

  switch (direction) {
    case 'NORTH':
      newGroupPosition = {
        x: snakeHead.position.x,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z:
          snakeHead.position.z -
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
      }
      newGroupRotation.x = THREE.MathUtils.degToRad(
        snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(180)
      break
    case 'SOUTH':
      newGroupPosition = {
        x: snakeHead.position.x,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z:
          snakeHead.position.z +
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
      }
      newGroupRotation.x = THREE.MathUtils.degToRad(
        -snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(0)
      break
    case 'WEST':
      newGroupPosition = {
        x:
          snakeHead.position.x +
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z: snakeHead.position.z,
      }
      newGroupRotation.z = THREE.MathUtils.degToRad(
        snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(90)
      break
    case 'EAST':
      newGroupPosition = {
        x:
          snakeHead.position.x -
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION
            .DISTANCE_FROM_SNAKE_HEAD,
        y: snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        z: snakeHead.position.z,
      }
      newGroupRotation.z = THREE.MathUtils.degToRad(
        -snakeGameConstants.PERSPECTIVE_CAMERA.ROTATION.TILT,
      )
      newCameraRotation.y = THREE.MathUtils.degToRad(-90)
      break
    default:
      break
  }

  return {
    newGroupPosition: newGroupPosition,
    newGroupRotation: newGroupRotation,
    newCameraRotation: newCameraRotation,
  }
}