import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a mesh with an IcosahedronGeometry
// IcosahedronGeometry is a 20-sided polyhedron, often used in 3D graphics
const geometry = new THREE.IcosahedronGeometry(1.0, 2);
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // Add the mesh to the scene

// Create a wiremesh material
// WireMaterial is used to create a wireframe effect on the mesh
const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
});

// Create a wireframe mesh using the mesh geometry
const wireMesh = new THREE.Mesh(geometry, wireMat);
// Scale the wireframe mesh slightly larger than the solid mesh
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh); // Add the wireframe mesh as a child of the solid mesh

// Add light
const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500, 1);
scene.add(hemiLight); // Add a hemisphere light to the scene

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
    // cube.rotation.z += 0.01;

    // controls.update(); // Allows damping in every frame
    renderer.render(scene, camera);
}
animate();
