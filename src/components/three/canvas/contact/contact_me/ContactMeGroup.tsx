import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import ContactText from './texts/ContactText'
import MeText from './texts/MeText'
import { IphoneKeyboard } from '../iphone_keyboard/IphoneKeyboard'

import {
  getContactMeGroupAnimationsData,
  getContactMeGroupDefaultValues,
  getIphoneKeyboardAnimationsData,
} from '@/data/contact/three/contact_me/contactMeGroupData'

import { animate, showHide } from '@/animation/index'

export default function ContactMeGroup() {
  const { timeline } = useGSAPTimelineContext()

  const contactMeGroupRef = useRef<THREE.Group>(null!)
  const iphoneKeyboardGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: contactMeGroupRef.current,
        animationsData: getContactMeGroupAnimationsData(),
      })
      animate({
        timeline: timeline,
        ref: contactMeGroupRef.current,
        animationsData: getContactMeGroupAnimationsData(),
      })
      const iphoneKeyboardTouchs = gsap.utils.toArray(iphoneKeyboardGroupRef.current.children)
      iphoneKeyboardTouchs.forEach((iphoneKeyboardTouchRef) => {
        animate({
          timeline: timeline,
          ref: iphoneKeyboardTouchRef as THREE.Group,
          // animationsData: getHiTextAnimationsData(index),
          animationsData: getIphoneKeyboardAnimationsData(),
        })
      })
    },
    { scope: contactMeGroupRef },
  )

  return (
    <group
      ref={contactMeGroupRef}
      {...getContactMeGroupDefaultValues}
    >
      <group position={new THREE.Vector3(0, 0, -0.1)}>
        <ContactText />
        <MeText />
      </group>
      <IphoneKeyboard ref={iphoneKeyboardGroupRef} />
    </group>
  )
}
