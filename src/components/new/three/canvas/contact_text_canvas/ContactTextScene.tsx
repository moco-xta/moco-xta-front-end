import React, { useEffect, useMemo, useRef, useState } from 'react'
import { debounce } from 'lodash'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import CustomShaderMaterial from "three-custom-shader-material";
import html2canvas from 'html2canvas'

import useMouseMove from '@/hooks/new/useMouseMove'

import { Lights } from './Lights'

import vertexShader from '../../shaders/contact/contact_text/vertexShader.glsl'
import fragmentShader from '../../shaders/contact/contact_text/fragmentShader.glsl'

import './index.scss'

const useDomToCanvas = (domEl) => {
  const [texture, setTexture] = useState<THREE.CanvasTexture>()
  useEffect(() => {
    if (!domEl) return
    const convertDomToCanvas = async () => {
      const canvas = await html2canvas(domEl, { backgroundColor: null })
      setTexture(new THREE.CanvasTexture(canvas))
    }

    convertDomToCanvas()

    const debouncedResize = debounce(() => {
      convertDomToCanvas()
    }, 100)

    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
    }
  }, [domEl])

  return texture
}

export default function ContactTextScene() {
  const state = useThree();
  state.gl.setClearColor(0x000000, 0)
  const { width, height } = state.viewport;
  const [domEl, setDomEl] = useState(null);

  const materialRef = useRef(null);
  const textureDOM = useDomToCanvas(domEl);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: textureDOM },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [textureDOM]
  );

  const mouseLerped = useRef({ x: 0, y: 0 });

  useEffect(() => {
    console.log('mouseLerped', mouseLerped)
  }, [mouseLerped.current])

  const { mouseX, mouseY } = useMouseMove()

  useFrame((state, delta) => {
    /* const mouse = state.mouse; */
    const x = (1 / (window.innerWidth / 2)) * (mouseX - (window.innerWidth / 2))
    const y = (1 / (window.innerHeight / 2)) * -(mouseY - (window.innerHeight / 2))
    mouseLerped.current.x = THREE.MathUtils.lerp(mouseLerped.current.x, x, 0.1);
    mouseLerped.current.y = THREE.MathUtils.lerp(mouseLerped.current.y, y, 0.1);
    console.log('mouseLerped', mouseLerped.current)
    materialRef.current.uniforms.uMouse.value.x = mouseLerped.current.x;
    materialRef.current.uniforms.uMouse.value.y = mouseLerped.current.y;
  });

  return (
    <>
      <Html zIndexRange={[-1, -10]} prepend fullscreen>
        <div ref={(el) => setDomEl(el)} className="dom-element">
          <p className="flex flex-col">
            WHEN <br />
            WILL <br />
            WE <br />
            MEET ?<br />
          </p>
        </div>
      </Html>
      <mesh>
        <planeGeometry args={[width, height, 254, 254]} />
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={THREE.MeshStandardMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          flatShading
          silent
        />
        <Lights />
      </mesh>
    </>
  );
}
