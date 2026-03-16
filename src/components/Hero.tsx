import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';

function Scene() {
  return (
    <PresentationControls global rotation={[0, 0.3, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
      <Float rotationIntensity={1.5} floatIntensity={1.5} speed={2}>
        <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
          {/* Bold geometric shape */}
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial 
            color="#1A1814" 
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        <mesh position={[2, -1, -2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial 
            color="#3A6EA5" 
            roughness={0.2}
            metalness={0.5}
            transmission={0.9} 
            ior={1.5}
            thickness={2}
          />
        </mesh>
        <mesh position={[-2, 1.5, -1]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshPhysicalMaterial 
            color="#D8D4CE" 
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </Float>
    </PresentationControls>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 overflow-hidden relative">
      <div className="flex flex-col justify-center px-6 py-16 md:py-20 md:px-16 lg:px-24 z-10">
        <span className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#3A6EA5] mb-6">
          <span className="w-7 h-[1px] bg-[#3A6EA5]"></span> B.Tech — Artificial Intelligence
        </span>
        <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-[#1A1814] mb-2">
          Shishir<br /><em className="italic text-[#3A6EA5]">Mishra</em>
        </h1>
        <p className="font-serif text-[clamp(1rem,2vw,1.3rem)] text-[#6B6760] mb-8">AI Engineer & Full-Stack Developer</p>
        <p className="text-[1rem] text-[#6B6760] max-w-[480px] leading-[1.85] mb-10">
          Final-year AI student at SRM IST Kattankulathur with a strong foundation in Machine Learning, Deep Learning, and Full-Stack development. Passionate about building intelligent systems that solve real-world problems.
        </p>
        
        <div className="flex gap-10 mb-12">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl text-[#1A1814] leading-none">8.53</span>
            <span className="text-[0.68rem] tracking-[0.1em] uppercase text-[#6B6760]">CGPA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl text-[#1A1814] leading-none">2</span>
            <span className="text-[0.68rem] tracking-[0.1em] uppercase text-[#6B6760]">Projects</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl text-[#1A1814] leading-none">4</span>
            <span className="text-[0.68rem] tracking-[0.1em] uppercase text-[#6B6760]">Certs</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 z-20">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3A6EA5] text-white text-[0.82rem] font-medium tracking-[0.06em] uppercase border border-[#3A6EA5] transition-all hover:bg-[#2B5480] hover:-translate-y-[1px]">
            Get In Touch →
          </a>
          <a href="#projects" className="inline-flex items-center px-8 py-3.5 bg-transparent text-[#1A1814] text-[0.82rem] font-medium tracking-[0.06em] uppercase border border-[#D8D4CE] transition-all hover:border-[#3A6EA5] hover:text-[#3A6EA5] hover:-translate-y-[1px]">
            View Projects
          </a>
        </div>
      </div>

      <div className="relative w-full min-h-[50vh] md:min-h-screen bg-[#EFECEA] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <color attach="background" args={['#EFECEA']} />
            <fog attach="fog" args={['#EFECEA', 10, 20]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3A6EA5" />
            <Suspense fallback={null}>
              <Scene />
              <Environment preset="city" />
              <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
            </Suspense>
          </Canvas>
        </div>
        
        {/* We can overlay the floating text card if desired, or keep it purely 3D */}
        <div className="relative z-10 text-center pointer-events-none mt-32 md:mt-0 opacity-0 md:opacity-100 mix-blend-difference hidden">
          {/* Optional: Add overlaid info if needed */}
        </div>
      </div>
    </section>
  );
}
