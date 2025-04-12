"use client"

import { useRef } from "react"
import { useThree, Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Float } from "@react-three/drei"
import { Vector3 } from "three"

// Data nodes for the visualization
const dataNodes = [
  { name: "Python", position: [1.5, 0.5, 0], color: "#3776AB" },
  { name: "SQL", position: [-1.5, 0.8, 0.5], color: "#F29111" },
  { name: "Data Analysis", position: [0, 1.8, 0], color: "#4285F4" },
  { name: "AI", position: [0.8, -1.5, 0.5], color: "#FF6B6B" },
  { name: "ML", position: [-0.8, -1.2, -0.5], color: "#6C5CE7" },
  { name: "Visualization", position: [0, 0, 1.8], color: "#00B894" },
  { name: "ETL", position: [0, 0, -1.8], color: "#FD7272" },
  { name: "LangChain", position: [1.2, 1.2, 1.2], color: "#1ABC9C" },
  { name: "Pandas", position: [-1.2, -1.2, 1.2], color: "#130F40" },
  { name: "Tableau", position: [1.2, -1.2, -1.2], color: "#3498DB" },
  { name: "Power BI", position: [-1.2, 1.2, -1.2], color: "#F1C40F" },
]

// Connection lines between related nodes
const connections = [
  [0, 2], // Python - Data Analysis
  [0, 3], // Python - AI
  [0, 4], // Python - ML
  [0, 6], // Python - ETL
  [0, 7], // Python - LangChain
  [0, 8], // Python - Pandas
  [1, 2], // SQL - Data Analysis
  [1, 6], // SQL - ETL
  [2, 5], // Data Analysis - Visualization
  [2, 9], // Data Analysis - Tableau
  [2, 10], // Data Analysis - Power BI
  [3, 4], // AI - ML
  [3, 7], // AI - LangChain
  [4, 8], // ML - Pandas
]

function DataNode({ name, position, color, index }) {
  const ref = useRef()
  const { camera } = useThree()

  // Subtle floating animation
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.0015
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
      </mesh>
      <Text
        position={[0, 0.25, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#00000080"
        font="/fonts/SpaceGrotesk-Medium.ttf"
        lookAt={camera.position}
      >
        {name}
      </Text>
    </group>
  )
}

function ConnectionLines() {
  const linesRef = useRef()

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={linesRef}>
      {connections.map((connection, i) => {
        const start = new Vector3(...dataNodes[connection[0]].position)
        const end = new Vector3(...dataNodes[connection[1]].position)
        const midPoint = new Vector3().addVectors(start, end).multiplyScalar(0.5)

        // Calculate the length of the line
        const length = start.distanceTo(end)

        // Calculate the direction vector
        const direction = new Vector3().subVectors(end, start).normalize()

        // Create a quaternion that rotates from the default cylinder orientation (along the Y-axis)
        // to the direction of our line
        const quaternion = new Vector3(0, 1, 0).applyQuaternion(new Vector3().copy(direction).normalize())

        return (
          <mesh key={i} position={midPoint}>
            <cylinderGeometry args={[0.01, 0.01, length, 8]} />
            <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
          </mesh>
        )
      })}
    </group>
  )
}

function DataSphere() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {dataNodes.map((node, i) => (
        <DataNode key={i} name={node.name} position={node.position} color={node.color} index={i} />
      ))}
      <ConnectionLines />
    </group>
  )
}

export function DataSphere3D() {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <DataSphere />
        </Float>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-center text-muted-foreground">
        Interactive 3D Skills Visualization - Drag to Explore
      </div>
    </div>
  )
}
