'use client'; // Required for Next.js with Three.js to ensure it renders on the client side
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Roadmap = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add a wavy path (timeline)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(-5, 5, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(5, -5, 0),
      new THREE.Vector3(10, 0, 0),
    ]);
    const points = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const pathLine = new THREE.Line(geometry, material);
    scene.add(pathLine);

    // Add timeline points and descriptions
    const timelinePoints = [
      { position: new THREE.Vector3(-10, 0, 0), title: 'Start', description: 'Beginning of the journey' },
      { position: new THREE.Vector3(-5, 5, 0), title: 'Phase 1', description: 'Exploring initial ideas' },
      { position: new THREE.Vector3(0, 0, 0), title: 'Phase 2', description: 'Developing concepts' },
      { position: new THREE.Vector3(5, -5, 0), title: 'Phase 3', description: 'Implementation and execution' },
      { position: new THREE.Vector3(10, 0, 0), title: 'End', description: 'Final stage and completion' },
    ];

    timelinePoints.forEach((point, index) => {
      // Sphere for each point
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.copy(point.position);
      sphere.name = `Point-${index + 1}`;
      scene.add(sphere);

      // Add 3D text for each heading
      const loader = new THREE.FontLoader();
      loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const textGeometry = new THREE.TextGeometry(point.title, {
          font: font,
          size: 1,
          height: 0.1,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(point.position.x - 1, point.position.y + 1, point.position.z);
        scene.add(textMesh);
      });

      // Add 3D text for each description
      loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const descriptionGeometry = new THREE.TextGeometry(point.description, {
          font: font,
          size: 0.5,
          height: 0.1,
        });
        const descriptionMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const descriptionMesh = new THREE.Mesh(descriptionGeometry, descriptionMaterial);
        descriptionMesh.position.set(point.position.x - 3, point.position.y - 1, point.position.z);
        scene.add(descriptionMesh);
      });
    });

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 10, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 15;

    // Add OrbitControls for camera interaction
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add interactivity (hover effect)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      scene.children.forEach((child) => {
        if (child.material) {
          child.material.color.set(0xff0000); // Default color
        }
      });

      intersects.forEach((intersect) => {
        if (intersect.object.material) {
          intersect.object.material.color.set(0x00ff00); // Highlight on hover
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100vw', height: '100vh' }}>
      {/* Three.js canvas will be mounted here */}
    </div>
  );
};

export default Roadmap;
