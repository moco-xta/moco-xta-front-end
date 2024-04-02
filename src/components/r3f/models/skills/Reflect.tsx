import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import * as THREE from 'three'

interface ReflectInterface {
  children: any
  start: number[]
  end: number[]
  bounce: number
  far: number
}

function createEvent(api, hit, intersect, intersects) {
  return {
    api,
    object: intersect.object,
    position: intersect.point,
    direction: intersect.direction,
    reflect: intersect.reflect,
    normal: intersect.face?.normal,
    intersect,
    intersects,
    stopPropagation: () => (hit.stopped = true),
  }
}

export const Reflect = forwardRef<ReflectInterface, any>(function Reflect(
  {
    children,
    start = { x: 0, y: 0, z: 0 },
    end = [0, 0, 0],
    bounce = 10,
    far = 100,
  },
  ref,
) {
  const groupRef = useRef<THREE.Group>(null!)

  const vStart = new THREE.Vector3()
  const vEnd = new THREE.Vector3()
  const vDir = new THREE.Vector3()
  const vPos = new THREE.Vector3()

  let intersect = null
  let intersects = []

  const api = useMemo(
    () => ({
      number: 0,
      objects: [],
      hits: new Map(),
      start: new THREE.Vector3(),
      end: new THREE.Vector3(),
      raycaster: new THREE.Raycaster(),
      positions: new Float32Array(
        Array.from({ length: (bounce + 10) * 3 }, () => 0),
      ),
      setRay: (_start = [0, 0, 0], _end = [0, 0, 0]) => {
        api.start.set(start)
        api.end.set(end)
      },
      update: () => {
        api.number = 0
        intersects = []

        vStart.copy(api.start)
        vEnd.copy(api.end)
        vDir.subVectors(vEnd, vStart).normalize()
        vStart.toArray(api.positions, api.number++ * 3)

        while (true) {
          api.raycaster.set(vStart, vDir)
          intersect = api.raycaster.intersectObjects(api.objects, false)[0]
          if (api.number < bounce && intersect && intersect.face) {
            intersects.push(intersect)
            intersect.direction = vDir.clone()
            intersect.point.toArray(api.positions, api.number++ * 3)
            vDir.reflect(
              intersect.object
                .localToWorld(intersect.face.normal)
                .sub(intersect.object.getWorldPosition(vPos))
                .normalize(),
            )
            intersect.reflect = vDir.clone()
            vStart.copy(intersect.point)
          } else {
            vEnd
              .addVectors(vStart, vDir.multiplyScalar(far))
              .toArray(api.positions, api.number++ * 3)
            break
          }
        }

        return null
      },
    }),
    [bounce, far],
  )

  useLayoutEffect(() => void api.setRay(start, end), [start, end])
  useImperativeHandle(ref, () => api, [api])

  return <group ref={groupRef}>{children}</group>
})
