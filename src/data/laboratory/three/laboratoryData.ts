import * as THREE from 'three'

export const laboratoryData = {
  speakerBoxes: [
    {
      name: 'SpeakerBoxLeft',
      position: new THREE.Vector3(-12.2749, 0.02, -14.2514),
    },
    {
      name: 'SpeakerBoxRight',
      position: new THREE.Vector3(12.7251, 0.02, -14.3251),
    },
  ],
  speakers: {
    number: 4,
    gap: 2.25,
  },
  trestles: [
    {
      name: 'TrestleLeft',
      position: new THREE.Vector3(-7.5, 0.02, -10),
    },
    {
      name: 'TrestleRight',
      position: new THREE.Vector3(7.5, 0.02, -10),
    },
  ],
}
