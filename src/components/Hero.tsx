import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls, MeshTransmissionMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function Scene() {
  const meshRef = useRef<any>(null);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <PresentationControls global rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
      <Float rotationIntensity={1.5} floatIntensity={2} speed={1.2}>
        <mesh ref={meshRef} position={[1.5, 0, -1]}>
          <torusKnotGeometry args={[1.2, 0.35, 256, 32]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.06}
            anisotropy={0.2}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.05}
            color="#3A6EA5"
            metalness={0.1}
            roughness={0.1}
            ior={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>
    </PresentationControls>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing bg-bg transition-colors duration-500">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#3A6EA5" />
          <Suspense fallback={null}>
            <Scene />
            <Environment preset="city" />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={20} blur={2.5} far={4.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full px-6 py-16 md:py-20 md:px-16 lg:px-24 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto bg-bg/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-sm">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent mb-6">
            <span className="w-7 h-[1px] bg-accent"></span> B.Tech — Artificial Intelligence
          </span>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-ink mb-2">
            Shishir<br /><em className="italic text-accent">Mishra</em>
          </h1>
          <p className="font-serif text-[clamp(1rem,2vw,1.3rem)] text-ink-soft mb-8">AI Engineer & Full-Stack Developer</p>
          <p className="text-[1rem] text-ink-soft max-w-[480px] leading-[1.85] mb-10">
            Final-year AI student at SRM IST Kattankulathur with a strong foundation in Machine Learning, Deep Learning, and Full-Stack development. Passionate about building intelligent systems that solve real-world problems.
          </p>
          
          <div className="flex gap-10 mb-12">
            <div className="flex flex-col gap-1">
              <span className="font-serif text-3xl text-ink leading-none">8.53</span>
              <span className="text-[0.68rem] tracking-[0.1em] uppercase text-ink-soft">CGPA</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-3xl text-ink leading-none">2</span>
              <span className="text-[0.68rem] tracking-[0.1em] uppercase text-ink-soft">Projects</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-serif text-3xl text-ink leading-none">4</span>
              <span className="text-[0.68rem] tracking-[0.1em] uppercase text-ink-soft">Certs</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 z-20">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white text-[0.82rem] font-medium tracking-[0.06em] uppercase border border-accent transition-all hover:bg-accent-dark hover:-translate-y-[1px]">
              Get In Touch →
            </a>
            <a href="#projects" className="inline-flex items-center px-8 py-3.5 bg-transparent text-ink text-[0.82rem] font-medium tracking-[0.06em] uppercase border border-border transition-all hover:border-accent hover:text-accent hover:-translate-y-[1px]">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
