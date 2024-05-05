import { Canvas } from "@react-three/fiber";
import {Box} from './Box'
import { App } from "./Magic_box";
import { OrbitControls } from "@react-three/drei";

export function Main_canvas(){
  return (
    <Canvas >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box />
      <OrbitControls />
      {/* <App key={1} position={[1, 1, 1]}/> */}
    </Canvas>
  )
}