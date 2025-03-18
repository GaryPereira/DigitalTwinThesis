import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import './App.css'

function App() {

  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
