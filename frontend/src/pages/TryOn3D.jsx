import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const avatarScaleMap = {
  XS: 0.92,
  S: 0.97,
  M: 1,
  L: 1.05,
  XL: 1.1,
};

function AvatarWithCloth({ image, size, rotation }) {
  const { scene } = useGLTF("/models/avatar.glb");
  const texture = useLoader(THREE.TextureLoader, image);
  const avatarScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.18}>
      <group rotation={[0, rotation, 0]} scale={avatarScaleMap[size] || avatarScaleMap.M}>
        <primitive object={avatarScene} position={[0, -1.85, 0]} />

        <mesh position={[0, 0.35, 0.72]}>
          <planeGeometry args={[1.45, 1.95, 16, 16]} />
          <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
}

export default function TryOn3D({
  image,
  label = "Preview",
  selectedSize = "M",
  onSizeChange,
  availableSizes = ["XS", "S", "M", "L", "XL"],
  compact = false,
}) {
  const [rotation, setRotation] = useState(0.12);

  return (
    <section className={`tryon-shell ${compact ? "compact" : ""}`}>
      <div className="tryon-toolbar">
        <div>
          <p className="tryon-kicker">Virtual try-on</p>
          <h3>{label}</h3>
        </div>

        <div className="tryon-size-picker">
          {availableSizes.map((size) => (
            <button
              key={size}
              type="button"
              className={selectedSize === size ? "active" : ""}
              onClick={() => onSizeChange?.(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="tryon-canvas-wrap">
        <Canvas camera={{ position: [0, 0.8, 4.2], fov: 32 }}>
          <color attach="background" args={["#eef6ff"]} />
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 3, 4]} intensity={2.4} />
          <spotLight position={[-3, 5, 4]} intensity={1.5} angle={0.4} penumbra={0.8} />
          <Suspense fallback={null}>
            <Environment preset="city" />
            <AvatarWithCloth image={image} size={selectedSize} rotation={rotation} />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={1.75} minPolarAngle={1.1} />
        </Canvas>
      </div>

      <label className="tryon-rotation-control">
        <span>View angle</span>
        <input
          type="range"
          min="-1.2"
          max="1.2"
          step="0.01"
          value={rotation}
          onChange={(event) => setRotation(Number(event.target.value))}
        />
      </label>
    </section>
  );
}

useGLTF.preload("/models/avatar.glb");
