import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const group = useRef()
  const wire = useRef()
  const ring = useRef()

  useFrame((state, delta) => {
    const { pointer } = state
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.6, 0.05)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.4, 0.05)
    }
    if (wire.current) {
      wire.current.rotation.y += delta * 0.18
      wire.current.rotation.x += delta * 0.08
    }
    if (ring.current) ring.current.rotation.z += delta * 0.25
  })

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
        <mesh>
          <icosahedronGeometry args={[1.25, 24]} />
          <MeshDistortMaterial
            color="#d9dfe1"
            metalness={1}
            roughness={0.12}
            distort={0.38}
            speed={1.6}
            envMapIntensity={1.3}
          />
        </mesh>
      </Float>

      <mesh ref={wire} scale={1.85}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#c6ff3d" wireframe transparent opacity={0.28} />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[2.35, 0.012, 16, 160]} />
        <meshBasicMaterial color="#ff7a2f" />
      </mesh>
    </group>
  )
}

function Particles({ count = 500 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#f4efe4" size={0.018} sizeAttenuation transparent opacity={0.55} depthWrite={false} />
    </points>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 5, 3]} intensity={1.2} color="#fff6e0" />
      <pointLight position={[-4, -2, 2]} intensity={14} color="#c6ff3d" distance={12} />
      <pointLight position={[3, -3, -2]} intensity={10} color="#0f6b4f" distance={12} />
      {/* Offline environment: tashqi HDR yuklanmaydi */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} position={[0, 5, -5]} scale={[10, 4, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={2.5} position={[-6, 0, 2]} scale={[2, 8, 1]} color="#c6ff3d" />
        <Lightformer form="rect" intensity={2} position={[6, 1, 1]} scale={[2, 6, 1]} color="#ff7a2f" />
        <Lightformer form="ring" intensity={2} position={[0, -4, 3]} scale={5} color="#f4efe4" />
      </Environment>
      <Core />
      <Particles />
    </Canvas>
  )
}
