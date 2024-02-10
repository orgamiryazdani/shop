"use client"
import { Canvas } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ThemeThree() {

    const meshRef = useRef()

    useEffect(() => {

        const handleRotation = () => {
            if (meshRef.current) {
                meshRef.current.rotation.x += 0.02
                meshRef.current.rotation.y += 0.01
            }
        }

        const interval = setInterval(handleRotation, 16)

        return () => clearInterval(interval)

    }, [])

    return (
        <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight intensity={15} position={[1, 2, 4]} />
            <mesh position={[0, 0, 0]} ref={meshRef}>
                <sphereGeometry args={[2.5, 200, 5]} />
                <meshStandardMaterial color='hotpink' metalness={0.7} roughness={0.2} />
                <meshStandardMaterial color='red' side={THREE.CustomToneMapping} />
                <meshStandardMaterial color='#6f0dff' />
            </mesh>
            <mesh position={[0, 0, 20]}>
                <boxGeometry args={[100, 0.1, 100]} />
                <meshStandardMaterial color="lightblue" />
            </mesh>
        </Canvas>

    )

}