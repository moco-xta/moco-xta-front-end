import React from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  ceilingLightMaterial,
  glassMaterial,
  tableLampMaterial,
} from '../../materials/laboratoireMaterials'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DeskTray: THREE.Mesh
    TrestleLeft: THREE.Mesh
    TrestleRight: THREE.Mesh
    MacBookPro: THREE.Mesh
    Screen: THREE.Mesh
    NotebookTop: THREE.Mesh
    NotebookBottom: THREE.Mesh
    DeskChair: THREE.Mesh
    TransfertBoxes001: THREE.Mesh
    TransfertBoxes002: THREE.Mesh
    TransfertBoxes003: THREE.Mesh
    VinylDisc: THREE.Mesh
    DoorHandle: THREE.Mesh
    Door: THREE.Mesh
    DoorFrame: THREE.Mesh
    TableLamp: THREE.Mesh
    CeilingLampFrame: THREE.Mesh
    CeilingLamp: THREE.Mesh
    Parquet: THREE.Mesh
    Shelf: THREE.Mesh
    VirgenDeGuadalupe: THREE.Mesh
    PabloEscobar: THREE.Mesh
    Tetrahedron: THREE.Mesh
    Cube: THREE.Mesh
    Dodecahedron: THREE.Mesh
    Octahedron: THREE.Mesh
    Icosahedron: THREE.Mesh
    SpeakerLeft: THREE.Mesh
    SpeakerRight: THREE.Mesh
    WorldMap: THREE.Mesh
    Ceiling: THREE.Mesh
    NorthWall: THREE.Mesh
    WestWall: THREE.Mesh
    PlinthNorth: THREE.Mesh
    PlinthWestLarge: THREE.Mesh
    PlinthWestSmall: THREE.Mesh
    VideoProjectorScreen: THREE.Mesh
    SecondHand: THREE.Mesh
    HourHand: THREE.Mesh
    MinuteHand: THREE.Mesh
    WallClockGlass: THREE.Mesh
    WallClock: THREE.Mesh
    HourAndMinuteMarkers: THREE.Mesh
    AmorLlamaAmor: THREE.Mesh
    Brain: THREE.Mesh
    Trinity: THREE.Mesh
    Couronnes: THREE.Mesh
    NicotianaRustica: THREE.Mesh
    CelestialMap: THREE.Mesh
    VerbalShoota: THREE.Mesh
    FrameGlasses: THREE.Mesh
  }
  materials: {}
}

export function Laboratoire(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.LABORATOIRE) as GLTFResult

  const northWallElementsMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.NORTH_WALL_ELEMENTS,
  )
  northWallElementsMapTexture.flipY = false
  northWallElementsMapTexture.encoding = THREE.sRGBEncoding

  const speakersMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.SPEAKERS,
  )
  speakersMapTexture.flipY = false
  speakersMapTexture.encoding = THREE.sRGBEncoding

  const deskMapTexture = useTexture(texturesConstants.ABOUT.LABORATOIRE.DESK)
  deskMapTexture.flipY = false
  deskMapTexture.encoding = THREE.sRGBEncoding

  const deskChairMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.DESK_CHAIR,
  )
  deskChairMapTexture.flipY = false
  deskChairMapTexture.encoding = THREE.sRGBEncoding

  const doorMapTexture = useTexture(texturesConstants.ABOUT.LABORATOIRE.DOOR)
  doorMapTexture.flipY = false
  doorMapTexture.encoding = THREE.sRGBEncoding

  const northWallMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.NORTH_WALL,
  )
  northWallMapTexture.flipY = false
  northWallMapTexture.encoding = THREE.sRGBEncoding

  const westWallMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.WEST_WALL,
  )
  westWallMapTexture.flipY = false
  westWallMapTexture.encoding = THREE.sRGBEncoding

  const wallClockMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.WALL_CLOCK,
  )
  wallClockMapTexture.flipY = false
  wallClockMapTexture.encoding = THREE.sRGBEncoding

  const ceilingMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.CEILING,
  )
  ceilingMapTexture.flipY = false
  ceilingMapTexture.encoding = THREE.sRGBEncoding

  const videoProjectorMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.VIDEO_PROJECTOR,
  )
  videoProjectorMapTexture.flipY = false
  videoProjectorMapTexture.encoding = THREE.sRGBEncoding

  const northWallElementsMaterial = new THREE.MeshStandardMaterial({
    map: northWallElementsMapTexture,
  })

  const speakersMaterial = new THREE.MeshStandardMaterial({
    map: speakersMapTexture,
  })

  const deskMaterial = new THREE.MeshStandardMaterial({
    map: deskMapTexture,
  })

  const deskChairMaterial = new THREE.MeshStandardMaterial({
    map: deskChairMapTexture,
  })

  const doorMaterial = new THREE.MeshStandardMaterial({
    map: doorMapTexture,
  })

  const northWallMaterial = new THREE.MeshStandardMaterial({
    map: northWallMapTexture,
  })

  const westWallMaterial = new THREE.MeshStandardMaterial({
    map: westWallMapTexture,
  })

  const wallClockMaterial = new THREE.MeshStandardMaterial({
    map: wallClockMapTexture,
  })

  const ceilingMaterial = new THREE.MeshStandardMaterial({
    map: ceilingMapTexture,
  })

  const videoProjectorMaterial = new THREE.MeshStandardMaterial({
    map: videoProjectorMapTexture,
  })

  const wallsMapTexture = useTexture(texturesConstants.ABOUT.LABORATOIRE.WALLS)
  wallsMapTexture.flipY = false
  wallsMapTexture.encoding = THREE.sRGBEncoding

  const elementsMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.ELEMENTS,
  )
  elementsMapTexture.flipY = false
  elementsMapTexture.encoding = THREE.sRGBEncoding

  const parquetMapTexture = useTexture(
    texturesConstants.ABOUT.LABORATOIRE.PARQUET,
  )
  parquetMapTexture.flipY = false
  parquetMapTexture.encoding = THREE.sRGBEncoding

  const elementsMaterial = new THREE.MeshStandardMaterial({
    map: elementsMapTexture,
  })

  const parquetMaterial = new THREE.MeshStandardMaterial({
    map: parquetMapTexture,
  })

  const wallsMaterial = new THREE.MeshStandardMaterial({
    map: wallsMapTexture,
  })

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='DeskTray'
        geometry={nodes.DeskTray.geometry}
        material={glassMaterial}
        position={[0, 9.092, -10.05]}
      />
      <mesh
        name='TrestleLeft'
        geometry={nodes.TrestleLeft.geometry}
        material={deskMaterial}
        position={[-7.5, 0.02, -10]}
      />
      <mesh
        name='TrestleRight'
        geometry={nodes.TrestleRight.geometry}
        material={deskMaterial}
        position={[7.5, 0.02, -10]}
      />
      <mesh
        name='MacBookPro'
        geometry={nodes.MacBookPro.geometry}
        material={deskMaterial}
        position={[0, 9.182, -8]}
      />
      <mesh
        name='Screen'
        geometry={nodes.Screen.geometry}
        material={deskMaterial}
        position={[0, 9.182, -14.4]}
      />
      <mesh
        name='NotebookTop'
        geometry={nodes.NotebookTop.geometry}
        material={deskMaterial}
        position={[5.572, 9.222, -9.098]}
      />
      <mesh
        name='NotebookBottom'
        geometry={nodes.NotebookBottom.geometry}
        material={deskMaterial}
        position={[5.772, 9.182, -8.898]}
      />
      <mesh
        name='DeskChair'
        geometry={nodes.DeskChair.geometry}
        material={deskChairMaterial}
        position={[0, 0.02, 0]}
        rotation={[-Math.PI, 1.067, -Math.PI]}
      />
      <mesh
        name='TransfertBoxes001'
        geometry={nodes.TransfertBoxes001.geometry}
        material={deskMaterial}
        position={[-6.441, 1.583, -11.819]}
        scale={1.2}
      />
      <mesh
        name='TransfertBoxes002'
        geometry={nodes.TransfertBoxes002.geometry}
        material={deskMaterial}
        position={[-6.385, 1.583, -11.019]}
        rotation={[0, 0.047, 0]}
        scale={1.2}
      />
      <mesh
        name='TransfertBoxes003'
        geometry={nodes.TransfertBoxes003.geometry}
        material={deskMaterial}
        position={[-6.528, 1.583, -10.035]}
        rotation={[0, -0.043, 0]}
        scale={1.2}
      />
      <mesh
        name='VinylDisc'
        geometry={nodes.VinylDisc.geometry}
        material={deskMaterial}
        position={[7.5, 1.575, -7.45]}
      />
      <mesh
        name='DoorHandle'
        geometry={nodes.DoorHandle.geometry}
        material={doorMaterial}
        position={[-29, 0, -10]}
      />
      <mesh
        name='Door'
        geometry={nodes.Door.geometry}
        material={doorMaterial}
        position={[-29, 0, -10]}
      />
      <mesh
        name='DoorFrame'
        geometry={nodes.DoorFrame.geometry}
        material={doorMaterial}
        position={[-29, 0, -10]}
      />
      <mesh
        name='TableLamp'
        geometry={nodes.TableLamp.geometry}
        material={tableLampMaterial}
        position={[11.776, 1.012, -9.08]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.618}
      />
      <mesh
        name='CeilingLampFrame'
        geometry={nodes.CeilingLampFrame.geometry}
        material={elementsMaterial}
        position={[0, 28.6, 0]}
      />
      <mesh
        name='CeilingLamp'
        geometry={nodes.CeilingLamp.geometry}
        material={ceilingLightMaterial}
        position={[0, 28.6, 0]}
      />
      <mesh
        name='Parquet'
        geometry={nodes.Parquet.geometry}
        material={parquetMaterial}
        position={[0, -0.158, 0]}
      />
      <mesh
        name='Shelf'
        geometry={nodes.Shelf.geometry}
        material={northWallElementsMaterial}
        position={[0, 18, -16]}
      />
      <mesh
        name='VirgenDeGuadalupe'
        geometry={nodes.VirgenDeGuadalupe.geometry}
        material={northWallElementsMaterial}
        position={[-4.512, 18.127, -15.546]}
      />
      <mesh
        name='PabloEscobar'
        geometry={nodes.PabloEscobar.geometry}
        material={northWallElementsMaterial}
        position={[4.936, 18.127, -15.546]}
      />
      <mesh
        name='Tetrahedron'
        geometry={nodes.Tetrahedron.geometry}
        material={northWallElementsMaterial}
        position={[4.034, 18.12, -15.305]}
      />
      <mesh
        name='Cube'
        geometry={nodes.Cube.geometry}
        material={northWallElementsMaterial}
        position={[4.377, 18.12, -14.612]}
      />
      <mesh
        name='Dodecahedron'
        geometry={nodes.Dodecahedron.geometry}
        material={northWallElementsMaterial}
        position={[3.82, 18.12, -14.48]}
      />
      <mesh
        name='Octahedron'
        geometry={nodes.Octahedron.geometry}
        material={northWallElementsMaterial}
        position={[3.414, 18.12, -14.86]}
      />
      <mesh
        name='Icosahedron'
        geometry={nodes.Icosahedron.geometry}
        material={northWallElementsMaterial}
        position={[3.621, 18.12, -15.221]}
      />
      <mesh
        name='SpeakerLeft'
        geometry={nodes.SpeakerLeft.geometry}
        material={speakersMaterial}
        position={[-12.275, 0, -14.251]}
      />
      <mesh
        name='SpeakerRight'
        geometry={nodes.SpeakerRight.geometry}
        material={speakersMaterial}
        position={[12.725, 0, -14.325]}
      />
      <mesh
        name='WorldMap'
        geometry={nodes.WorldMap.geometry}
        material={speakersMaterial}
        position={[-12.2, 10.333, -14.1]}
      />
      <mesh
        name='Ceiling'
        geometry={nodes.Ceiling.geometry}
        material={ceilingMaterial}
      />
      <mesh
        name='NorthWall'
        geometry={nodes.NorthWall.geometry}
        material={northWallMaterial}
      />
      <mesh
        name='WestWall'
        geometry={nodes.WestWall.geometry}
        material={westWallMaterial}
      />
      <mesh
        name='VideoProjectorScreen'
        geometry={nodes.VideoProjectorScreen.geometry}
        material={videoProjectorMaterial}
        position={[-28.6, 25, 5.5]}
      />
      <mesh
        name='SecondHand'
        geometry={nodes.SecondHand.geometry}
        material={wallClockMaterial}
        position={[-28.331, 25.4, -10.007]}
        rotation={[-Math.PI / 4, 0, -Math.PI / 2]}
        scale={0.7}
      />
      <mesh
        name='HourHand'
        geometry={nodes.HourHand.geometry}
        material={wallClockMaterial}
        position={[-28.366, 25.4, -10.007]}
        rotation={[2.531, 0, -Math.PI / 2]}
        scale={0.7}
      />
      <mesh
        name='MinuteHand'
        geometry={nodes.MinuteHand.geometry}
        material={wallClockMaterial}
        position={[-28.345, 25.4, -10.007]}
        rotation={[0.698, 0, -Math.PI / 2]}
        scale={0.7}
      />
      <mesh
        name='WallClockGlass'
        geometry={nodes.WallClockGlass.geometry}
        material={glassMaterial}
        position={[-28.583, 25.4, -10.007]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.7}
      />
      <mesh
        name='WallClock'
        geometry={nodes.WallClock.geometry}
        material={wallClockMaterial}
        position={[-28.583, 25.4, -10.007]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.7}
      />
      <mesh
        name='HourAndMinuteMarkers'
        geometry={nodes.HourAndMinuteMarkers.geometry}
        material={wallClockMaterial}
        position={[-28.372, 25.4, -10.007]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.7}
      />
      <mesh
        name='AmorLlamaAmor'
        geometry={nodes.AmorLlamaAmor.geometry}
        material={northWallElementsMaterial}
        position={[-11.2, 10, -16]}
        scale={[0.99, 1, 1]}
      />
      <mesh
        name='Brain'
        geometry={nodes.Brain.geometry}
        material={northWallElementsMaterial}
        position={[-19.06, 10, -16]}
      />
      <mesh
        name='Trinity'
        geometry={nodes.Trinity.geometry}
        material={northWallElementsMaterial}
        position={[-17.09, 19.2, -16]}
      />
      <mesh
        name='Couronnes'
        geometry={nodes.Couronnes.geometry}
        material={northWallElementsMaterial}
        position={[0, 25.6, -16]}
      />
      <mesh
        name='NicotianaRustica'
        geometry={nodes.NicotianaRustica.geometry}
        material={northWallElementsMaterial}
        position={[10.2, 14.9, -16]}
      />
      <mesh
        name='CelestialMap'
        geometry={nodes.CelestialMap.geometry}
        material={northWallElementsMaterial}
        position={[10.1, 10.2, -16]}
      />
      <mesh
        name='VerbalShoota'
        geometry={nodes.VerbalShoota.geometry}
        material={northWallElementsMaterial}
        position={[19.032, 14.9, -16]}
      />
      <mesh
        name='FrameGlasses'
        geometry={nodes.FrameGlasses.geometry}
        material={glassMaterial}
        position={[-19.06, 10, -16]}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE)
