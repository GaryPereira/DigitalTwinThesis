import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import './App.css'

function App() {

  return (
    <>
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
