import * as THREE from 'three'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

// AMOR LLAMA AMOR

export const amorLlamaAmorMaterial = new THREE.MeshPhysicalMaterial({
  color: '#ccc',
  map: laboratoireFinalRenderTextures.amorllamaAmor.map,
  roughness: 1,
})

export const amorLlamaAmorFrameMaterial = new THREE.MeshStandardMaterial({
  color: '#000000',
  roughness: 0.3,
})

// BRAIN

export const brainMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.brain.map,
  roughness: 1,
})

export const brainFrameMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.brainFrame.map,
  metalness: 0.2,
  roughness: 0.2,
  /* roughnessMap: laboratoireFinalRenderTextures.brainFrame.roughnessMap, */
  normalMap: laboratoireFinalRenderTextures.brainFrame.normalMap,
})

// BRASS

export const brassMaterial = new THREE.MeshStandardMaterial({
  color: '#cfa748',
  metalness: 0.2,
  roughness: 0.5,
})

// CELESTIAL MAP

export const celestialMapMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.celestialMap.map,
})

export const celestialMapFrameMaterial = new THREE.MeshStandardMaterial({
  color: '#baa',
  map: laboratoireFinalRenderTextures.celestialMapFrame.map,
  metalness: 0.1,
  /* metalnessMap: laboratoireFinalRenderTextures.celestialMapFrame.roughnessMap, */
  roughness: 0.25,
  roughnessMap: laboratoireFinalRenderTextures.celestialMapFrame.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.celestialMapFrame.normalMap,
})

// COURONNES

export const couronnesMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.couronnes.map,
  metalness: 0.1,
  metalnessMap: laboratoireFinalRenderTextures.couronnes.roughnessMap,
  roughness: 0.35,
  roughnessMap: laboratoireFinalRenderTextures.couronnes.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.couronnes.normalMap,
})

// DESK CHAIR

export const deskChairLeatherMaterial = new THREE.MeshStandardMaterial({
  color: '#baa',
  map: laboratoireFinalRenderTextures.deskChair.map,
  /* metalness: 0.1, */
  roughness: 0.33,
  /* specularColor: '#fff', */
  roughnessMap: laboratoireFinalRenderTextures.deskChair.roughness,
  normalMap: laboratoireFinalRenderTextures.deskChair.normal,
})

export const deskChairLegMaterial = new THREE.MeshStandardMaterial({
  color: '#999999',
  metalness: 0.8,
  roughness: 0.1,
})

export const deskChairWheelsMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0,
  roughness: 0.6,
})

// MAC BOOK PRO

export const macBookProMaterial = new THREE.MeshStandardMaterial({
  color: '#7f8081',
  metalness: 0.4,
  roughness: 0.4,
})

export const macBookProScreenMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0,
  roughness: 0,
})

export const macBookProKeyboardMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0.1,
  roughness: 0.5,
})

// IRON

export const ironMaterial = new THREE.MeshStandardMaterial({
  color: '#E7E7E7',
  metalness: 1,
  roughness: 0.5,
})

// LOGO GITHUB

export const logoGitHubMaterial = new THREE.MeshStandardMaterial({
  color: '#fff',
})

// LOGO TWITTER

export const getLogoTwitterMaterial = (isHovered: boolean) => {
  return new THREE.MeshStandardMaterial({
    color: isHovered ? 'red' : '#1D96E8',
  })
}

// MONARCH

export const monarchMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.monarch.map,
  transparent: true,
})

export const monarchFrameMaterial = new THREE.MeshPhysicalMaterial({
  /* color: 'red', */
  map: laboratoireFinalRenderTextures.monarchFrame.map,
  metalness: 0.6,
  roughness: 0,
  roughnessMap: laboratoireFinalRenderTextures.monarchFrame.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.monarchFrame.normalMap,
  /* bumpMap: laboratoireFinalRenderTextures.monarch.bumpMap, */
  specularColor: '#ff8c00',
  specularIntensity: 2,
})

export const monarchBottomMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.monarchBottom.map,
})

export const monarchShadowMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.monarchShadow.map,
})

// NICOTIANA RUSTICA

export const nicotianaRusticaMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.nicotianaRustica.map,
})

export const nicotianaRusticaFrameMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.nicotianaRusticaFrame.map,
  /* metalness: 0.5, */
  /* metalnessMap: laboratoireFinalRenderTextures.nicotianaRusticaFrame.roughnessMap, */
  roughness: 0.3,
  roughnessMap: laboratoireFinalRenderTextures.nicotianaRusticaFrame.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.nicotianaRusticaFrame.normalMap,
})

// PABLO ESCOBAR

export const pabloEscobarMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.pabloEscobar.map,
  roughness: 0.3,
  side: THREE.DoubleSide,
})

// PLATONIC SOLIDS

export const getPlatonicSolidMaterial = (color: string) => {
  return new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.3,
  })
}

// PORCELAIN

export const porcelainMaterial = new THREE.MeshStandardMaterial({
  color: '#fff',
  roughness: 0,
})

// SCREEN

export const screenMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 0.5,
})

export const screenFrameMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 0.1,
})

// SHELF

export const shelfMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.shelf.map,
  roughnessMap: laboratoireFinalRenderTextures.shelf.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.shelf.normalMap,
})

// SPEAKERS

export const speakerMaterial = new THREE.MeshPhysicalMaterial({
  color: '#000',
  roughness: 0.7,
  specularColor: '#999',
})

export const speakerBoxMaterial = new THREE.MeshPhysicalMaterial({
  map: laboratoireFinalRenderTextures.speakerBox.map,
  roughnessMap: laboratoireFinalRenderTextures.speakerBox.roughnessMap,
  /* normalMap: laboratoireFinalRenderTextures.speakerBox.normalMap, */
  specularColor: '#b7a68a',
  side: THREE.DoubleSide,
})

export const speakerStandMaterial = new THREE.MeshStandardMaterial({
  color: '#404040',
  metalness: 0.8,
  roughness: 0.5,
})

// TRANSFERT BOX

export const transfertBoxMaterial = new THREE.MeshStandardMaterial({
  color: '#999',
  roughness: 1,
  side: THREE.DoubleSide,
})

// TRESTLE

export const trestleMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trestle.map,
})

// TRINITY

export const trinityMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trinity.map,
  roughness: 1,
})

export const trinityFrameMaterial = new THREE.MeshPhysicalMaterial({
  map: laboratoireFinalRenderTextures.trinityFrame.map,
  metalness: 0.5,
  /* metalnessMap: laboratoireFinalRenderTextures.trinityFrame.roughnessMap, */
  /* roughness: 0.6, */
  roughnessMap: laboratoireFinalRenderTextures.trinityFrame.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.trinityFrame.normal,
  specularColor: '#B99445',
})

// VINYL DISC

export const vinylDiscBackMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 0.7,
})

// VIRGEN DE GUADALUPE

export const virgenDeGuadalupematerial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.virgenDeGuadalupe.map,
  roughness: 0.5,
  side: THREE.DoubleSide,
})

// WALL CLOCK

export const mondaineWallClockMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.mondaineWallClock.map,
})

export const wallClockBrushedMetalMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.wallClockBrushedMetal.map,
  /* metalness: 0.3, */
  /* metalnessMap: laboratoireFinalRenderTextures.wallClockBrushedMetal.roughnessMap, */
  roughnessMap: laboratoireFinalRenderTextures.wallClockBrushedMetal.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.wallClockBrushedMetal.normalMap,
  bumpMap: laboratoireFinalRenderTextures.wallClockBrushedMetal.bumpMap,
})

export const wallClockPlaticRedMaterial = new THREE.MeshStandardMaterial({
  color: '#C23C3E',
  roughness: 1,
})

export const wallClockPlaticBlackMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 1,
})

// WALLS

export const wallMaterial = new THREE.MeshStandardMaterial({
  color: '#fff',
})

// WORLD MAP

export const worldMapMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.worldMap.map,
  metalness: 0.1,
  roughness: 0.6,
})

export const worldMapStandMarbleMaterial = new THREE.MeshStandardMaterial({
  /* color: '#555', */
  map: laboratoireFinalRenderTextures.worldMapStandMarble.map,
  metalness: 0.2,
  /* metalnessMap: laboratoireFinalRenderTextures.worldMapStandMarble.roughnessMap, */
  /* roughness: 0.2, */
  roughnessMap: laboratoireFinalRenderTextures.worldMapStandMarble.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.worldMapStandMarble.normalMap,
})

export const worldMapStandUsedMetalMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.6,
  roughnessMap: laboratoireFinalRenderTextures.worldMapStandUsedMetal.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.worldMapStandUsedMetal.normalMap,
})
