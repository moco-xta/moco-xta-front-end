import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

export default function Map() {
  const { scene } = useThree()

  const [mapDiv, setMapDiv] = useState<HTMLElement | null>(null!)
  // const [texture, setTexture] = useState<THREE.CanvasTexture>(null!)

  useEffect(() => {
    if (mapDiv) {
      const canvas = mapDiv.querySelector('iframe') // Google Maps uses a canvas internally
      if (canvas) {
        const mapTexture = new THREE.CanvasTexture(canvas)
        mapTexture.needsUpdate = true
        // setTexture(mapTexture)
      }
    }
  }, [mapDiv])

  useEffect(() => {
    function onMapLoad() {
      setMapDiv(document.getElementById('google_map_container'))
      if (mapDiv) {
        // Convert the map's DOM element to a canvas texture
      }
    }
    onMapLoad()
    const geometry = new THREE.PlaneGeometry(25, 25)
    const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5 })
    const plane = new THREE.Mesh(geometry, material)
    plane.position.y = -3.5
    plane.rotation.x = -Math.PI / 2
    scene.add(plane)
  }, [mapDiv, scene])

  return null
}
