import { Perf } from 'r3f-perf'
import { OrbitControls, useGLTF} from '@react-three/drei'

export default function Experience()
{

    const model = useGLTF('./gameboyModel/game_boy_classic.glb')

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <primitive object={ model.scene } scale={ 1 } rotation-x={ Math.PI * 0.5 } rotation-y={ Math.PI * 1.5 } />
        </mesh>

    </>
}