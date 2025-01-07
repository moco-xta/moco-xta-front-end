'use client'

import React from 'react'

import MinecraftCanvas from '@/components/three/canvas/minecraft/MinecraftCanvas'

import './index.scss'

export default function Projects() {
  return (
    <div id='minecraft_canvas_container'>
      <MinecraftCanvas />
    </div>
  )
}
