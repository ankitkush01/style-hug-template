import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

type CoinKind = "bitcoin" | "ethereum" | "solana";

type CoinProps = {
  kind: CoinKind;
  position: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
};

const tokenColor = (name: string, fallback: string) => {
  if (typeof window === "undefined") return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
};

function BitcoinMark({ color }: { color: string }) {
  return (
    <group position={[0, 0, 0.285]}>
      <mesh position={[-0.08, 0, 0]}>
        <boxGeometry args={[0.16, 1.15, 0.08]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      {[0.28, -0.28].map((y) => (
        <mesh key={y} position={[0.12, y, 0]}>
          <torusGeometry args={[0.28, 0.11, 10, 24, Math.PI]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      {[-0.2, 0.12].map((x) => (
        <mesh key={x} position={[x, 0, 0]}>
          <boxGeometry args={[0.07, 1.42, 0.07]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function EthereumMark({ color }: { color: string }) {
  return (
    <group position={[0, 0, 0.3]}>
      <mesh scale={[0.55, 0.92, 0.18]} position={[0, 0.2, 0]} rotation-z={Math.PI / 4}>
        <octahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color={color} metalness={0.76} roughness={0.24} />
      </mesh>
      <mesh scale={[0.42, 0.52, 0.14]} position={[0, -0.62, 0]} rotation-z={Math.PI / 4}>
        <octahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color={color} metalness={0.76} roughness={0.24} />
      </mesh>
    </group>
  );
}

function SolanaMark({ color }: { color: string }) {
  return (
    <group position={[0, 0, 0.3]} rotation-z={-0.15}>
      {[-0.45, 0, 0.45].map((y, index) => (
        <mesh key={y} position={[index === 1 ? 0.08 : -0.08, y, 0]}>
          <boxGeometry args={[1.15, 0.25, 0.1]} />
          <meshStandardMaterial color={color} metalness={0.72} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function Coin({ kind, position, scale, speed, phase }: CoinProps) {
  const ref = useRef<THREE.Group>(null);
  const [colors, setColors] = useState({
    bitcoin: "#f6b84a",
    ethereum: "#9fa8ff",
    solana: "#5de7b2",
    edge: "#5a5a5a",
    face: "#262626",
  });

  useEffect(() => {
    setColors({
      bitcoin: tokenColor("--crypto-bitcoin", "#f6b84a"),
      ethereum: tokenColor("--crypto-ethereum", "#9fa8ff"),
      solana: tokenColor("--crypto-solana", "#5de7b2"),
      edge: tokenColor("--crypto-edge", "#5a5a5a"),
      face: tokenColor("--crypto-face", "#262626"),
    });
  }, []);

  useFrame(({ clock }, rawDelta) => {
    const coin = ref.current;
    if (!coin) return;
    const delta = Math.min(rawDelta, 0.05);
    coin.rotation.y += speed * delta;
    coin.rotation.x = 0.08 + Math.sin(clock.elapsedTime * 0.7 + phase) * 0.1;
    coin.position.y = position[1] + Math.sin(clock.elapsedTime * 0.8 + phase) * 0.18;
  });

  const accent = colors[kind];

  return (
    <group ref={ref} position={position} scale={scale} rotation={[0.08, phase, 0]}>
      <mesh castShadow rotation-x={Math.PI / 2}>
        <cylinderGeometry args={[1.15, 1.15, 0.42, 64, 1, false]} />
        <meshStandardMaterial color={colors.edge} metalness={0.92} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0, 0.225]} castShadow>
        <cylinderGeometry args={[0.97, 0.97, 0.035, 64]} />
        <meshStandardMaterial color={colors.face} metalness={0.86} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.25]}>
        <torusGeometry args={[0.91, 0.045, 12, 64]} />
        <meshStandardMaterial color={accent} metalness={0.9} roughness={0.18} />
      </mesh>
      {kind === "bitcoin" && <BitcoinMark color={accent} />}
      {kind === "ethereum" && <EthereumMark color={accent} />}
      {kind === "solana" && <SolanaMark color={accent} />}
    </group>
  );
}

function Coins() {
  return (
    <>
      <Coin kind="bitcoin" position={[-2.8, 0.1, 0]} scale={1.18} speed={0.56} phase={0.3} />
      <Coin kind="ethereum" position={[0, 0.35, 0.7]} scale={1.4} speed={-0.48} phase={1.4} />
      <Coin kind="solana" position={[2.85, -0.05, -0.15]} scale={1.12} speed={0.62} phase={2.6} />
    </>
  );
}

export function CryptoCoinScene() {
  return (
    <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[430px]" aria-label="Rotating 3D Bitcoin, Ethereum, and Solana coins">
      <Canvas
        camera={{ position: [0, 0.25, 8.8], fov: 39 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[-4, 5, 6]} intensity={3.2} castShadow />
          <pointLight position={[4, -1, 4]} intensity={24} color="rgb(255, 137, 117)" distance={10} />
          <Coins />
          <Environment resolution={128}>
            <Lightformer intensity={3} position={[0, 5, 2]} scale={[10, 2, 1]} />
            <Lightformer intensity={2} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
          </Environment>
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-[12%] bottom-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}