import React, { useRef } from 'react'
import * as THREE from 'three'
import { AccumulativeShadows, Environment, Lightformer, RandomizedLight, SoftShadows, Sphere, useHelper } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'
import { getDegreeEuler } from '@/helpers/threeHelpers'
import { RectAreaLightHelper } from 'three/examples/jsm/Addons.js'
import { MeshProps } from '@react-three/fiber'

const INTENSITY = 1.5
const MAP_SIZE = [4096, 4096]
const SHADOW_CAMERA_FAR = 500
const SHADOW_CAMERA_LEFT = -10
const SHADOW_CAMERA_RIGHT = 10
const SHADOW_CAMERA_TOP = 10
const SHADOW_CAMERA_BOTTOM = -10
const SHADOW_RADIUS = 50
const SHADOW_BIAS = 0.00001

function Striplight(props: MeshProps) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color='white' />
    </mesh>
  )
}

export default function Lights() {
  const lightRef = useRef<THREE.RectAreaLight>(null!)

  useHelper(lightRef, RectAreaLightHelper, 'cyan')
  return (
    <>
      <ambientLight intensity={1.5} />
      {/* <Environment
        files={imgConstants.EXR.STUDIO_04}
        // backgroundIntensity={0.5}
        environmentIntensity={0.5}
      /> */}
      {/* <Environment
        // background
        resolution={64}
      >
        <Striplight
          position={[10, 2, 0]}
          scale={[1, 3, 10]}
        />
        <Striplight
          position={[-10, 2, 0]}
          scale={[1, 3, 10]}
        />        
      </Environment> */}
      <SoftShadows
        focus={2}
        samples={40}
        size={80}
      />
      {/* <AccumulativeShadows temporal frames={100} color="orange" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
        <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows> */}
      {/* <Sphere>
      <LayerMaterial
        color="#ffffff" //
        lighting="physical"
        transmission={1}
      >
        <Depth
          colorA="#810000" //
          colorB="#ffd0d0"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={2}
          origin={[1, 1, 1]}
        />
      </LayerMaterial>
    </Sphere> */}
      {/* <rectAreaLight width={1} height={1} rotation={getDegreeEuler({ x: -90 })} /> */}
      {/* <rectAreaLight
      ref={lightRef}
      intensity={5}
      width={1}
      height={6}
      color="white"
      position={[-6, 0, 6]}
      rotation={getDegreeEuler({ y: -45 })}
    /> */}
      <directionalLight
        position={[-6, 0, 6]}
        intensity={INTENSITY}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      />
      <directionalLight
        position={[6, 0, 6]}
        intensity={INTENSITY}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      />
      <directionalLight
        position={[0, 0, 9]}
        intensity={INTENSITY}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      />
      {/* <rectAreaLight
        ref={lightRef}
        intensity={5}
        width={1}
        height={6}
        color="white"
        position={[6, 0, 6]}
        rotation={getDegreeEuler({ y: 45 })}
      /> */}
      {/* <rectAreaLight
        ref={lightRef}
        intensity={5}
        width={1}
        height={6}
        color="white"
        position={[0, 0, 9]}
      /> */}
      {/* <Environment resolution={2048}>
        <Lightformer
          intensity={5}
          color={0xFFFFFF}
          rotation-x={Math.PI / 2}
          position={[-6, 4, 6]}
          scale={[1, 10, 1]}
        />
        <Lightformer
          intensity={5}
          color={0xFFFFFF}
          rotation-x={Math.PI / 2}
          position={[6, 4, 6]}
          scale={[1, 10, 1]}
        />
        <Lightformer
          intensity={2.5}
          color={0x000044}
          // rotation-x={Math.PI / 2}
          position={[0, 0, -6]}
          scale={[5, 5, 1]}
        />
        <Lightformer
          intensity={3}
          color={0x000088}
          // rotation-x={Math.PI / 2}
          position={[0, 10, 0]}
          scale={[10, 10, 1]}
        /> */}
      {/* <Lightformer
          intensity={3}
          color={0xFFFFFF}
          // rotation-x={Math.PI / 2}
          position={[0, -10, 0]}
          scale={[10, 10, 1]}
        /> */}
      {/* <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        /> */}
      {/* <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        /> */}
      {/* <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} /> */}
      {/* <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} /> */}
      {/* <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} /> */}
      {/* <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} /> */}
      {/* Sides */}
      {/* <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        /> */}
      {/* <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        /> */}
      {/* Key */}
      {/* <Lightformer
          form='ring'
          color='red'
          intensity={10}
          scale={2}
          position={[10, 5, 10]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        /> */}
      {/* </Environment> */}
      {/* <directionalLight
        position={[-10, 10, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      /> */}
      {/* <directionalLight
        position={[0, 0, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      /> */}
    </>
  )
}
