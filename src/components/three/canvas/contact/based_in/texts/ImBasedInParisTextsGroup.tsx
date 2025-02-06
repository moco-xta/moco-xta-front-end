import React, { useRef } from 'react'
import * as THREE from 'three'
// import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

import { extend/* , Object3DNode */ } from '@react-three/fiber'

import ImText from './ImText'
import BasedText from './BasedText'
import InParisText from './InParisText'

// import rawFontJson from '../../../../../../../public/fonts/json/Parisine_Try_Regular.json'

/* const fontJson = {
  ...rawFontJson,
  original_font_information: Object.fromEntries(
    Object.entries(rawFontJson.original_font_information).map(([key, value]) => [
      key,
      String(value),
    ]),
  ),
} */

extend({ TextGeometry })

/* declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
    }
  }
} */

export default function ImBasedinParisTextsGroup() {
  const imBasedinParisTextsGroupRef = useRef<THREE.Group>(null!)

  // const font = new FontLoader().parse(fontJson)

  return (
    <group ref={imBasedinParisTextsGroupRef}>
      <ImText />
      {/*   <mesh position={[0, 0, 0]}>
        <textGeometry args={['Hello, Three.js!', { font, size: 1, height: 1 }]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh> */}
      <BasedText />
      <InParisText />
    </group>
  )
}
