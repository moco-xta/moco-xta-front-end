export const ambientLightDefaultValues = {
  color: '#fff',
  intensity: 0.15,
}

export const spotLightsDefaultValues = {
  color: '#fff',
  intensity: 2,
  angle: 1.87,
  distance: 52,
  decay: 0.9,
  penumbra: 0.9,
  castShadow: true,
  ['shadow-mapSize-width']: 2048,
  ['shadow-mapSize-height']: 2048,
  ['shadow-camera-near']: 1,
  ['shadow-camera-far']: 50,
  ['shadow-camera-left']: -50,
  ['shadow-camera-right']: 50,
  ['shadow-camera-top']: 50,
  ['shadow-camera-bottom']: -50,
  ['shadow-radius']: 4,
  ['shadow-bias']: 0.00001,
  orientations: [
    [-1, 1, -1],
    [1, 1, -1],
    [-1, 1, 1],
    [1, 1, 1],
  ],
  position: {
    x: 5,
    y: 26.5,
    z: 3,
  },
  targetPosition: {
    x: 26.5,
    y: 0,
    z: 26.5,
  },
}
