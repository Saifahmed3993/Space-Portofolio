"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref: any = useRef();
    // Reduced from 5000 → 2000 points for better GPU performance
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(2000), { radius: 1.2 })
    );

    useFrame((_state, delta) => {
        ref.current.rotation.x -= delta / 14;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none">
        {/* style prop ensures the canvas element itself never captures pointer events */}
        <Canvas
            camera={{ position: [0, 0, 1] }}
            dpr={[0.5, 1]}
            style={{ pointerEvents: "none" }}
        >
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;