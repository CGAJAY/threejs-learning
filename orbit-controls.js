import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube with light-reactive material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add light
const light = new THREE.DirectionalLight(0xffff00, 100);
light.position.set(2, 2, 2);
scene.add(light);

// Add light helper to visualize the light's position and direction
const lightHelper = new THREE.DirectionalLightHelper(light);
scene.add(lightHelper);

// Orbit Controls to enable camera movement
// OrbitControls allows the camera to orbit around a target
// It provides a way to control the camera with mouse or touch gestures
// renderer.domElement is the <canvas> element that listens for mouse movements and scroll
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // makes camera movement smoother and natural

function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.y += 0.01;
    // cube.rotation.x += 0.005;
    cube.rotation.z += 0.01;

    // controls.update(); // Allows damping in every frame
    renderer.render(scene, camera);
}
animate();
