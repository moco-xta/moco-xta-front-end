import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'

import { ExoMarket } from '../../models/home/buildings/ExoMarket'
import { ExoMarketShutter } from '../../models/home/buildings/ExoMarketShutter'
import Heading from './Heading'
import { MacBookPro } from '../../models/home/MacBookPro'
import { Axis } from '../../models/home/Axis'
import Me from './Me'
import Map from './Map'
import LogoAngular from '../../models/home/logos/LogoAngular'
import LogoGsap from '../../models/home/logos/LogoGsap'

import './index.scss'
import LogoDocker from '../../models/home/logos/LogoDocker'
import LogoFigma from '../../models/home/logos/LogoFigma'
import LogoSpring from '../../models/home/logos/LogoSpring'
import LogoBlender from '../../models/home/logos/LogoBlender'
import LogoReact from '../../models/home/logos/LogoReact'
import LogoNextjs from '../../models/home/logos/LogoNextjs'
import LogoReactThreeDrei from '../../models/home/logos/LogoReactThreeDrei'
import IphoneKeyboardTouch from './IphoneKeyboardTouch'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export default function HomeScene() {
  const iphoneKeyboard1 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_1)
  iphoneKeyboard1.magFilter = THREE.NearestFilter
  const iphoneKeyboard2 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_2)
  iphoneKeyboard2.magFilter = THREE.NearestFilter
  const iphoneKeyboard3 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_3)
  iphoneKeyboard3.magFilter = THREE.NearestFilter
  const iphoneKeyboard4 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_4)
  iphoneKeyboard4.magFilter = THREE.NearestFilter
  const iphoneKeyboard5 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_5)
  iphoneKeyboard5.magFilter = THREE.NearestFilter
  const iphoneKeyboard6 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_6)
  iphoneKeyboard6.magFilter = THREE.NearestFilter
  const iphoneKeyboard7 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_7)
  iphoneKeyboard7.magFilter = THREE.NearestFilter
  const iphoneKeyboard8 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_8)
  iphoneKeyboard8.magFilter = THREE.NearestFilter
  const iphoneKeyboard9 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_9)
  iphoneKeyboard9.magFilter = THREE.NearestFilter
  const iphoneKeyboardStar = new THREE.TextureLoader().load(
    texturesConstants.HOME.IPHONE_KEYBOARD_STAR,
  )
  iphoneKeyboardStar.magFilter = THREE.NearestFilter
  const iphoneKeyboard0 = new THREE.TextureLoader().load(texturesConstants.HOME.IPHONE_KEYBOARD_0)
  iphoneKeyboard0.magFilter = THREE.NearestFilter
  const iphoneKeyboardHash = new THREE.TextureLoader().load(
    texturesConstants.HOME.IPHONE_KEYBOARD_HASH,
  )
  iphoneKeyboardHash.magFilter = THREE.NearestFilter
  const iphoneKeyboardCall = new THREE.TextureLoader().load(
    texturesConstants.HOME.IPHONE_KEYBOARD_CALL,
  )
  iphoneKeyboardCall.magFilter = THREE.NearestFilter

  return (
    <>
      {/* <ExoMarket />
      <ExoMarketShutter
        name='ExoMarketShutter_A1Left'
        position={[-5.57866, 8.80972, -0.012591]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(155.863), 0)}
      />
      <ExoMarketShutter
        name='ExoMarketShutter_A1Right'
        position={[-4.70192, 8.80972, -0.012591]}
        scale={[-1, 1, 1]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-143.988), 0)}
      />
      <ExoMarketShutter
        name='ExoMarketShutter_B1Left'
        position={[-1.68599, 8.76814, -0.012591]}
        scale={[1, 0.992, 1]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(18.5992), 0)}
      />
      <ExoMarketShutter
        name='ExoMarketShutter_B1Right'
        position={[-0.812365, 8.76814, -0.012591]}
        scale={[-1, 0.992, 1]}
        rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(-3.18573), 0)}
      />
      <Plane
        args={[25, 25]}
        rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0)}
        receiveShadow
      >
        <meshStandardMaterial color={'white'} />
      </Plane> */}
      <Heading />
      <MacBookPro />
      <Axis />
      <Me />
      <Map />
      <LogoAngular position={new THREE.Vector3(6, 5, 4)} />
      <LogoGsap position={new THREE.Vector3(4, 3, 7)} />
      <LogoDocker position={new THREE.Vector3(3, -1, 8)} />
      <LogoFigma position={new THREE.Vector3(-2, 0, 9)} />
      <LogoSpring position={new THREE.Vector3(-3, 7, -12)} />
      <LogoBlender position={new THREE.Vector3(-5, 3, -17)} />
      <LogoReact position={new THREE.Vector3(-8, 5, -16)} />
      <LogoNextjs position={new THREE.Vector3(-6, 0, -10)} />
      <LogoReactThreeDrei position={new THREE.Vector3(-9, -1, -4)} />
      <group position={new THREE.Vector3(0, 7, 0)}>
        <IphoneKeyboardTouch
          position={new THREE.Vector3(-1.5, 0, 0)}
          map={iphoneKeyboard1}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(0, 0, 0)}
          map={iphoneKeyboard2}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(1.5, 0, 0)}
          map={iphoneKeyboard3}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(-1.5, 0, -1.5)}
          map={iphoneKeyboard4}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(0, 0, -1.5)}
          map={iphoneKeyboard5}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(1.5, 0, -1.5)}
          map={iphoneKeyboard6}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(-1.5, 0, -3)}
          map={iphoneKeyboard7}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(0, 0, -3)}
          map={iphoneKeyboard8}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(1.5, 0, -3)}
          map={iphoneKeyboard9}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(-1.5, 0, -4.5)}
          map={iphoneKeyboardStar}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(0, 0, -4.5)}
          map={iphoneKeyboard0}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(1.5, 0, -4.5)}
          map={iphoneKeyboardHash}
        />
        <IphoneKeyboardTouch
          position={new THREE.Vector3(0, 0, -6)}
          map={iphoneKeyboardCall}
        />
      </group>
    </>
  )
}
