import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export default function IntroductionScene() {
  // const { nodes } = useGLTF(glbConstants.METRO.TEST_PATH)

  const meshRef = useRef<THREE.Mesh>(null)
  const progressRef = useRef(0)

  const shape = useMemo(() => {
    const s = new THREE.Shape()
    s.absarc(0, 0, 0.005, 0, Math.PI * 2)
    return s
  }, [])

  /* const path = useMemo(() => {
    console.log('nodes', nodes)
    const positionAttribute = (nodes.TestPath as THREE.Mesh).geometry.attributes.position
    const points = []
    
    for (let i = 0; i < positionAttribute.count; i++) {
      points.push(new THREE.Vector3().fromBufferAttribute(positionAttribute, i))
    }
    
    return new THREE.CatmullRomCurve3(points)
  }, [nodes]) */

  const [path, setPath] = useState<THREE.CatmullRomCurve3>(null!)

  useEffect(() => {
    fetch('./ligne_8_path.json')
      .then((res) => res.json())
      .then((data) => {
        const json = JSON.parse(data)
        const points = json.map((p: number[]) => new THREE.Vector3(...p))
        setPath(new THREE.CatmullRomCurve3(points))
      })
  }, [])

  /* const path = useMemo(() => {
    const p = new THREE.CurvePath<THREE.Vector3>()
    p.add(new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, 5, 5)))
    return p
  }, []) */

  const extrudeSettings = useMemo(
    () => ({
      steps: 100,
      bevelEnabled: false,
      extrudePath: path,
    }),
    [path],
  )

  const geometry = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    g.translate(-2.5, -2.5, -2.5)
    return g
  }, [shape, extrudeSettings])

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '#introduction_canvas',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress
      },
    })
  })

  useFrame(() => {
    if (meshRef.current) {
      ;(meshRef.current.material as THREE.ShaderMaterial).uniforms.uProgress.value =
        progressRef.current
    }
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
    >
      <shaderMaterial
        uniforms={{
          uProgress: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uProgress;
          void main() {
            if (vUv.x > uProgress) discard;
            gl_FragColor = vec4(1.0, 0.5, 0.0, 1.0); // Orange color
          }
        `}
      />
    </mesh>
  )
}
