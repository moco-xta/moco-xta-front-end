import React from 'react'

import { Cube } from '../../models/about/laboratoire/final_render/shelf_collection/platonic_solids/Cube'
import { Dodecahedron } from '../../models/about/laboratoire/final_render/shelf_collection/platonic_solids/Dodecahedron'
import { Icosahedron } from '../../models/about/laboratoire/final_render/shelf_collection/platonic_solids/Icosahedron'
import { Octahedron } from '../../models/about/laboratoire/final_render/shelf_collection/platonic_solids/Octahedron'
import { Tetrahedron } from '../../models/about/laboratoire/final_render/shelf_collection/platonic_solids/Tetrahedron'

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
