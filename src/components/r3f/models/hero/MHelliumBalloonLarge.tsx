import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { useEffect } from 'react'

const HDRI = '/img/hdr/skidpan_8k.hdr'

type GLTFResult = GLTF & {
  nodes: {
    MHelliumBalloonLarge: THREE.Mesh
  }
  materials: {}
}

export function MHelliumBalloonLarge(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(GltfConstants.M_HELLIUM_BALLOON_LARGE) as GLTFResult

  /* const { gl, scene } = useThree()
  const pmremGenerator = new THREE.PMREMGenerator(gl)
  const loader = new RGBELoader()
  loader.setDataType(THREE.UnsignedByteType)
  pmremGenerator.compileEquirectangularShader() */

  /* useEffect(() => {
     loader.load(HDRI, texture => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture

	scene.environment = envMap
        // one can also set scene.background to envMap here

	texture.dispose()
	pmremGenerator.dispose()
     })
   }, [scene, loader, pmremGenerator]) */



   let envMap

   const { gl, scene } = useThree()
   const pmremGenerator = new THREE.PMREMGenerator(gl)
  const hdriLoader = new RGBELoader()
  hdriLoader.load( HDRI, function ( texture ) {
    envMap = pmremGenerator.fromEquirectangular( texture ).texture;
    texture.dispose(); 
    /* scene.environment = envMap */
  } );

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MHelliumBalloonLarge.geometry}
      >
        <meshStandardMaterial
          color={0x457623}
          envMap={envMap}
          metalness={1}
          roughness={0.2}
        />
        {/* <meshPhongMaterial
          color={0xffffff}
          specular={0xffffff}
          metalness={1}
          roughness={0.5}
          envMap={envMap}
          combine={THREE.MultiplyOperation}
          shininess={50}
          reflectivity={1.0}
        /> */}
      </mesh>
    </group>
  )
}

useGLTF.preload(GltfConstants.M_HELLIUM_BALLOON_LARGE)
