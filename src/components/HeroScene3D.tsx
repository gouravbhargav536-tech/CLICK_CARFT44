import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroScene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobile,
        powerPreference: 'high-performance',
      });
    } catch {
      setIsWebGLSupported(false);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for objects with mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Constellation / Particle Field (Logo Brand Colors)
    const particleCount = isMobile ? 350 : 800;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Brand color swatches: Royal Blue, Flame Orange, Warm Gold, Cyan
    const colorPalette = [
      new THREE.Color(0x2563eb),
      new THREE.Color(0xf97316),
      new THREE.Color(0xd1b455),
      new THREE.Color(0x38bdf8),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;

      const clr = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = clr.r;
      colors[i * 3 + 1] = clr.g;
      colors[i * 3 + 2] = clr.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. 3D Floating Geometry Array
    const floatingObjects: {
      mesh: THREE.Object3D;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      initialY: number;
      floatSpeed: number;
    }[] = [];

    // Helper: Shared Materials
    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.3,
    });

    const orangeMaterial = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      metalness: 0.6,
      roughness: 0.3,
      emissive: 0xc2410c,
      emissiveIntensity: 0.4,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd1b455,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x854d0e,
      emissiveIntensity: 0.25,
    });

    // Object A: 3D Click Cursor / Arrow
    const cursorShape = new THREE.Shape();
    cursorShape.moveTo(0, 1.2);
    cursorShape.lineTo(-0.7, -0.8);
    cursorShape.lineTo(-0.1, -0.6);
    cursorShape.lineTo(-0.3, -1.3);
    cursorShape.lineTo(0.2, -1.1);
    cursorShape.lineTo(0.4, -0.4);
    cursorShape.lineTo(0.9, -0.4);
    cursorShape.closePath();

    const cursorExtrudeGeo = new THREE.ExtrudeGeometry(cursorShape, {
      depth: 0.25,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });
    cursorExtrudeGeo.center();

    const cursorMesh = new THREE.Mesh(cursorExtrudeGeo, orangeMaterial);
    cursorMesh.position.set(3.5, 1.5, 0);
    cursorMesh.scale.set(0.9, 0.9, 0.9);
    mainGroup.add(cursorMesh);
    floatingObjects.push({
      mesh: cursorMesh,
      rotSpeedX: 0.005,
      rotSpeedY: 0.008,
      rotSpeedZ: 0.003,
      initialY: 1.5,
      floatSpeed: 1.2,
    });

    // Object B: 3D Faceted Diamond / Conversion Crystal
    const diamondGeo = new THREE.OctahedronGeometry(1.1, 0);
    const diamondMesh = new THREE.Mesh(diamondGeo, blueMaterial);
    diamondMesh.position.set(-4.2, -0.8, -1);
    mainGroup.add(diamondMesh);
    floatingObjects.push({
      mesh: diamondMesh,
      rotSpeedX: 0.007,
      rotSpeedY: 0.01,
      rotSpeedZ: 0.004,
      initialY: -0.8,
      floatSpeed: 1.5,
    });

    // Object C: 3D Orbit Growth Torus (Gold)
    const torusGeo = new THREE.TorusGeometry(1.3, 0.22, 16, 64);
    const torusMesh = new THREE.Mesh(torusGeo, goldMaterial);
    torusMesh.position.set(4.5, -2.2, -2);
    mainGroup.add(torusMesh);
    floatingObjects.push({
      mesh: torusMesh,
      rotSpeedX: 0.009,
      rotSpeedY: 0.006,
      rotSpeedZ: 0.008,
      initialY: -2.2,
      floatSpeed: 0.9,
    });

    // Object D: 3D Analytics Bar Pillar (Trio of Bars)
    const barGroup = new THREE.Group();
    const barHeights = [1.2, 2.0, 2.8];
    barHeights.forEach((h, idx) => {
      const barGeo = new THREE.BoxGeometry(0.35, h, 0.35);
      const mat = idx === 2 ? orangeMaterial : blueMaterial;
      const bar = new THREE.Mesh(barGeo, mat);
      bar.position.set((idx - 1) * 0.5, h / 2 - 1.2, 0);
      barGroup.add(bar);
    });
    barGroup.position.set(-3.8, 2.4, -2.5);
    mainGroup.add(barGroup);
    floatingObjects.push({
      mesh: barGroup,
      rotSpeedX: 0.004,
      rotSpeedY: 0.006,
      rotSpeedZ: 0.002,
      initialY: 2.4,
      floatSpeed: 1.1,
    });

    // Object E: 3D Icosahedron Crystal
    const icoGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const icoMesh = new THREE.Mesh(icoGeo, goldMaterial);
    icoMesh.position.set(0.5, -3.2, -1.5);
    mainGroup.add(icoMesh);
    floatingObjects.push({
      mesh: icoMesh,
      rotSpeedX: 0.008,
      rotSpeedY: 0.012,
      rotSpeedZ: 0.005,
      initialY: -3.2,
      floatSpeed: 1.3,
    });

    // 3. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x2563eb, 3.5, 30);
    blueLight.position.set(-6, 5, 8);
    scene.add(blueLight);

    const orangeLight = new THREE.PointLight(0xf97316, 4.0, 30);
    orangeLight.position.set(7, -4, 6);
    scene.add(orangeLight);

    const rimLight = new THREE.DirectionalLight(0xd1b455, 1.8);
    rimLight.position.set(0, 8, -6);
    scene.add(rimLight);

    // 4. Mouse Interactive Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.8;
      targetMouseY = y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 5. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop with Tab Invisibility Pause & 60fps Target
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Pause when tab is hidden to conserve GPU/CPU
      if (document.hidden) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera & group mouse parallax
      if (!prefersReducedMotion) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;

        mainGroup.rotation.y = currentMouseX * 0.4;
        mainGroup.rotation.x = -currentMouseY * 0.3;

        // Slow particle drift
        particles.rotation.y = elapsedTime * 0.02;
        particles.rotation.x = elapsedTime * 0.01;

        // Animate floating objects
        floatingObjects.forEach((obj) => {
          obj.mesh.rotation.x += obj.rotSpeedX;
          obj.mesh.rotation.y += obj.rotSpeedY;
          obj.mesh.rotation.z += obj.rotSpeedZ;
          obj.mesh.position.y =
            obj.initialY + Math.sin(elapsedTime * obj.floatSpeed) * 0.35;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean memory
      particleGeometry.dispose();
      particleMaterial.dispose();
      cursorExtrudeGeo.dispose();
      diamondGeo.dispose();
      torusGeo.dispose();
      icoGeo.dispose();
      blueMaterial.dispose();
      orangeMaterial.dispose();
      goldMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {!isWebGLSupported && (
        <div className="w-full h-full bg-gradient-to-br from-blue-950/20 via-slate-950 to-orange-950/20 opacity-60" />
      )}
    </div>
  );
};
