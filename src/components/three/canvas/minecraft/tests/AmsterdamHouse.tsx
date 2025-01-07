import React, { useRef } from 'react'
import * as THREE from 'three'

export default function AmsterdamHouse() {
  const houseRef = useRef<THREE.Group>(null!)

  // Base of the house (building block)
  const houseGeometry = new THREE.BoxGeometry(5, 10, 5)
  const houseMaterial = new THREE.MeshStandardMaterial({ color: '#e4bfae' })

  // Roof geometry (slanted)
  const roofGeometry = new THREE.ConeGeometry(5, 5, 4)
  const roofMaterial = new THREE.MeshStandardMaterial({ color: '#b93a3a' })

  // Windows and door (simplified)
  const windowGeometry = new THREE.BoxGeometry(1, 2, 0.1)
  const windowMaterial = new THREE.MeshStandardMaterial({ color: '#fff' })

  const doorGeometry = new THREE.BoxGeometry(2, 4, 0.1)
  const doorMaterial = new THREE.MeshStandardMaterial({ color: '#3e2a47' })

  return (
    <group ref={houseRef}>
      {/* House Base */}
      <mesh
        geometry={houseGeometry}
        material={houseMaterial}
        position={[0, 5, 0]}
      />

      {/* Roof */}
      <mesh
        geometry={roofGeometry}
        material={roofMaterial}
        position={[0, 10, 0]}
        rotation={[Math.PI / 4, 0, 0]}
      />

      {/* Front Windows */}
      <mesh
        geometry={windowGeometry}
        material={windowMaterial}
        position={[-2, 6, 2.6]}
      />
      <mesh
        geometry={windowGeometry}
        material={windowMaterial}
        position={[2, 6, 2.6]}
      />

      {/* Door */}
      <mesh
        geometry={doorGeometry}
        material={doorMaterial}
        position={[0, 2, 2.6]}
      />
    </group>
  )
}
