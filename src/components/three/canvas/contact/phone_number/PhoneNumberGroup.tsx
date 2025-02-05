import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import PhoneNumberText from './texts/PhoneNumberText'
import { IphoneKeyboard } from '../iphone_keyboard/IphoneKeyboard'
import PhoneNumberInputComponent from './PhoneNumberInputComponent'

import {
  getPhoneNumberGroupAnimationsData,
  getIphoneKeyboardAnimationsData,
} from '@/data/contact/three/phone_number/phoneNumberGroupData'

import { animate, showHide } from '@/animation/index'

export default function PhoneNumberGroup() {
  const { timeline } = useGSAPTimelineContext()

  const phoneNumberGroupRef = useRef<THREE.Group>(null!)
  const phoneNumberWithInputGroupRef = useRef<THREE.Group>(null!)
  const iphoneKeyboardGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: phoneNumberGroupRef.current,
        animationsData: getPhoneNumberGroupAnimationsData(),
      })
      animate({
        timeline: timeline,
        ref: phoneNumberGroupRef.current,
        animationsData: getPhoneNumberGroupAnimationsData(),
      })
      const iphoneKeyboardTouchs = gsap.utils.toArray(iphoneKeyboardGroupRef.current.children)
      iphoneKeyboardTouchs.forEach((iphoneKeyboardTouchRef, index) => {
        animate({
          timeline: timeline,
          ref: iphoneKeyboardTouchRef as THREE.Group,
          // animationsData: getHiTextAnimationsData(index),
          animationsData: getIphoneKeyboardAnimationsData({
            index: index,
          }),
        })
      })
    },
    { scope: phoneNumberGroupRef },
  )

  return (
    <group ref={phoneNumberGroupRef}>
      <group ref={phoneNumberWithInputGroupRef}>
        <PhoneNumberText />
        <PhoneNumberInputComponent />
      </group>
      <IphoneKeyboard ref={iphoneKeyboardGroupRef} />
    </group>
  )
}
