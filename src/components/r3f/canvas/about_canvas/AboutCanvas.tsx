import React,  { useState } from "react";
import { Canvas } from '@react-three/fiber'
import { Box, DeviceOrientationControls } from "@react-three/drei";

function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  return (

      <Canvas
        camera={{ position: [-5, 5, 5] }}
      >
      <DeviceOrientationControls />
      <Box args={[100, 100, 100, 4, 4, 4]}>
        <meshBasicMaterial attach="material" wireframe />
        <axesHelper args={[100]} />
      </Box>
        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />
      </Canvas>
  );
}

export default App;