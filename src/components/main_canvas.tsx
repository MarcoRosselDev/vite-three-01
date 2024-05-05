import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box_mesh } from "./Box_mesh";

export function Main_canvas(){
  return (
    <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box_mesh />
      <OrbitControls />
    </Canvas>
  )
}