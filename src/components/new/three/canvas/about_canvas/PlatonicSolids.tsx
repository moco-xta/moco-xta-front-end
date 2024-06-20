import React from 'react'

import { Cube } from '../../models/about/Cube'
import { Dodecahedron } from '../../models/about/Dodecahedron'
import { Icosahedron } from '../../models/about/Icosahedron'
import { Octahedron } from '../../models/about/Octahedron'
import { Tetrahedron } from '../../models/about/Tetrahedron'

export default function PlatonicSolids() {
  return (
    <>
      <Cube position={[4.377, 18.12, -14.612]} />
      <Dodecahedron position={[3.82, 18.12, -14.48]} />
      <Icosahedron position={[3.621, 18.12, -15.221]} />
      <Octahedron position={[3.414, 18.12, -14.86]} />
      <Tetrahedron position={[4.034, 18.12, -15.305]} />
    </>
  )
}
