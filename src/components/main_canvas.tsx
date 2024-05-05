import { Canvas } from "@react-three/fiber";
import {Box} from './Box'

export function Main_canvas(){
  return (
    <Canvas >
      <ambientLight intensity={1}  />
      <Box/>
    </Canvas>
  )
}