import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { iconsDataInterface } from '@/interfaces/r3f/iconsDataInterface'

import IconAnsible from '@/components/r3f/models/icons/IconAnsible'
import IconBlender from '@/components/r3f/models/icons/IconBlender'
import IconChatGpt from '@/components/r3f/models/icons/IconChatGpt'
import IconCss from '@/components/r3f/models/icons/IconCss'
import IconDocker from '@/components/r3f/models/icons/IconDocker'
import IconFigma from '@/components/r3f/models/icons/IconFigma'
import IconGithub from '@/components/r3f/models/icons/IconGithub'
import IconGsap from '@/components/r3f/models/icons/IconGsap'
import IconHtml from '@/components/r3f/models/icons/IconHtml'
import IconI18n from '@/components/r3f/models/icons/IconI18n'
import IconIllustrator from '@/components/r3f/models/icons/IconIllustrator'
import IconNextjs from '@/components/r3f/models/icons/IconNextjs'
import IconNpm from '@/components/r3f/models/icons/IconNpm'
import IconPhotoshop from '@/components/r3f/models/icons/IconPhotoshop'
import IconPostgresql from '@/components/r3f/models/icons/IconPostgresql'
import IconRedux from '@/components/r3f/models/icons/IconRedux'
import IconSass from '@/components/r3f/models/icons/IconSass'
import IconSpringboot from '@/components/r3f/models/icons/IconSpringboot'
import IconThreejs from '@/components/r3f/models/icons/IconThreejs'
import IconWebgl from '@/components/r3f/models/icons/IconWebgl'

export default function Content() {
  const iconAnsibleRef = useRef(new THREE.Object3D())
  const iconBlenderRef = useRef(new THREE.Object3D())
  const iconChatGptRef = useRef(new THREE.Object3D())
  const iconCssRef = useRef(new THREE.Object3D())
  const iconDockerRef = useRef(new THREE.Object3D())
  const iconFigmaRef = useRef(new THREE.Object3D())
  const iconGithubRef = useRef(new THREE.Object3D())
  const iconGsapRef = useRef(new THREE.Object3D())
  const iconHtmlRef = useRef(new THREE.Object3D())
  const iconI18nRef = useRef(new THREE.Object3D())
  const iconIllustratorRef = useRef(new THREE.Object3D())
  const iconNextjsRef = useRef(new THREE.Object3D())
  const iconNpmRef = useRef(new THREE.Object3D())
  const iconPhotoshopRef = useRef(new THREE.Object3D())
  const iconPostgresqlRef = useRef(new THREE.Object3D())
  const iconReduxRef = useRef(new THREE.Object3D())
  const iconSassRef = useRef(new THREE.Object3D())
  const iconSpringbootRef = useRef(new THREE.Object3D())
  const iconThreejsRef = useRef(new THREE.Object3D())
  const iconWebglRef = useRef(new THREE.Object3D())

  const refs = [
    iconAnsibleRef,
    iconBlenderRef,
    iconChatGptRef,
    iconCssRef,
    iconDockerRef,
    iconFigmaRef,
    iconGithubRef,
    iconGsapRef,
    iconHtmlRef,
    iconI18nRef,
    iconIllustratorRef,
    iconNextjsRef,
    iconNpmRef,
    iconPhotoshopRef,
    iconPostgresqlRef,
    iconReduxRef,
    iconSassRef,
    iconSpringbootRef,
    iconThreejsRef,
    iconWebglRef,
  ]

  const iconData: iconsDataInterface = {
    total_length: 0,
    widths: [],
  }

  useEffect(() => {
    refs.forEach((ref) => {
      // @ts-ignore
      iconData.widths.push(ref.current.width)
    })
    let sum = 0
    refs.forEach((ref, index) => {
      if (index === 0) {
        ref.current.position.x = sum
        sum += iconData.widths[index] / 2
      } else {
        ref.current.position.x = sum + iconData.widths[index] / 2 + index * 0.5
        sum += iconData.widths[index]
      }
    })
    iconData.widths.forEach((width) => {
      iconData.total_length += width + 0.5
    })
  }, [])

  useFrame((state, delta, xrFrame) => {
    refs.forEach((ref) => {
      ref.current.position.x += delta
      if (ref.current.position.x > iconData.total_length / 2)
        ref.current.position.x -= iconData.total_length
    })
  })

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 15]}
        fov={10}
      />
      <directionalLight
        position={[0, 0, 5]}
        castShadow
      />
      <ambientLight position={[3, 3, 3]} />
      <IconAnsible ref={iconAnsibleRef} />
      <IconBlender ref={iconBlenderRef} />
      <IconChatGpt ref={iconChatGptRef} />
      <IconCss ref={iconCssRef} />
      <IconDocker ref={iconDockerRef} />
      <IconFigma ref={iconFigmaRef} />
      <IconGithub ref={iconGithubRef} />
      <IconGsap ref={iconGsapRef} />
      <IconHtml ref={iconHtmlRef} />
      <IconI18n ref={iconI18nRef} />
      <IconIllustrator ref={iconIllustratorRef} />
      <IconNextjs ref={iconNextjsRef} />
      <IconNpm ref={iconNpmRef} />
      <IconPhotoshop ref={iconPhotoshopRef} />
      <IconPostgresql ref={iconPostgresqlRef} />
      <IconRedux ref={iconReduxRef} />
      <IconSass ref={iconSassRef} />
      <IconSpringboot ref={iconSpringbootRef} />
      <IconThreejs ref={iconThreejsRef} />
      <IconWebgl ref={iconWebglRef} />
    </>
  )
}
