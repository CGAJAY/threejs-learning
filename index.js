console.log("Hello, Three.js!");
import * as THREE from "three"; // Import the Three.js library

//  Create a scene - the container for all objects
const scene = new THREE.Scene();

// Create a camera - the viewpoint from which we see the scene
const camera = new THREE.PerspectiveCamera(
    75, // Field of view in degrees
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);
// Set the camera position
camera.position.z = 5; // Move the camera back so we can see the objects
camera.position.y = 1; // Move the camera up so we can see the objects

// Create a renderer - the tool that draws the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer
document.body.appendChild(renderer.domElement); // Add the renderer to the HTML document

// Create a geometry - the shape of the object
const geometry = new THREE.BoxGeometry(1, 1, 1); // Create a cube geometry

// Create a material - the surface appearance of the object
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Create a green material

// Create a mesh - the combination of geometry and material
const cube = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(cube);

// Add lighting
const light = new THREE.PointLight(0xffff00, 10000); // Create a yellow point light
light.position.set(5, 5, 5);
scene.add(light);

// Render loop function to animate the scene
function animate() {
    requestAnimationFrame(animate); // Request the next frame

    // Rotate the cube for some basic animation
    // cube.rotation.x += 0.01; // Rotate around the x-axis
    cube.rotation.y += 0.01; // Rotate around the y-axis
    // cube.rotation.z += 0.01; // Rotate around the z-axis

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// Start the animation
animate();
