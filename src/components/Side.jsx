import { Environment, MeshPortalMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Side({ rotation = [0, 0, 0], bg = '#ffffff', children, index }) {
  const mesh = useRef()
  const { nodes } = useGLTF('./model/aobox-transformed.glb')
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta
  })

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      <ambientLight intensity={0.5} />
      <Environment preset="dawn" />
      <mesh castShadow receiveShadow rotation={rotation} geometry={nodes.Cube.geometry}>
        <meshStandardMaterial aoMapIntensity={1} aoMap={nodes.Cube.material.aoMap} color={bg} />
        <spotLight castShadow color={bg} intensity={8} position={[3, 3, 3]} angle={0.35} penumbra={0.8} shadow-normalBias={0.1} shadow-bias={0.00001} />
      </mesh>
      {/** The shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg}/>
      </mesh>
    </MeshPortalMaterial>
  )
}