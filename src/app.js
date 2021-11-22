import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module.js';

const aFifteenDegreePerHourDrift = 0.0015;
const lat = (51.5 * Math.PI) / 180;
const lon = (0 * Math.PI) / 180;

const fov = 60;
const near = 0.1;
const far = 1000;
const scene = new THREE.Scene();

function aspect() {
  return window.innerWidth / window.innerHeight;
}

const canvas = document.querySelector('#canvas');
let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth / 2, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0);

let camera = new THREE.PerspectiveCamera(fov, aspect() / 2, near, far);
camera.position.z = 6;
scene.add(camera);

const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32, -Math.PI / 2);
const earthMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('textures/earthmap1k.jpg'),
  bumpMap: THREE.ImageUtils.loadTexture('textures/earthbump.jpg'),
  bumpScale: 0.01,
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);
const cloudMetarial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('textures/earthCloud.png'),
  transparent: true,
});
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);

const rodGeometry = new THREE.CylinderGeometry(0.01, 0.01, 6, 32);
const rodMaterial = new THREE.MeshPhongMaterial({
  color: 0xffff00,
  emissive: 0xffff00,
  shininess: 1,
});
const rodMesh = new THREE.Mesh(rodGeometry, rodMaterial);
rodMesh.position.z = 0.67 * Math.cos(lat) * Math.cos(lon);
rodMesh.position.x = 0.67 * Math.cos(lat) * Math.sin(lon);
rodMesh.position.y = 0;
scene.add(rodMesh);

const starGeometry = new THREE.SphereGeometry(80, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture('textures/TychoSkymapII.t3_04096x02048.jpg'),
  side: THREE.BackSide,
});
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

const ambientlight = new THREE.AmbientLight(0xffffff, 0.35);
scene.add(ambientlight);

const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.position.set(6, 1, 7);
scene.add(pointLight);

////////////////////////////////////////

let cameraN = new THREE.PerspectiveCamera(fov, aspect(), near, far);
let cameraS = new THREE.PerspectiveCamera(fov, aspect(), near, far);

cameraN.position.z = 0.6 * Math.cos(lat) * Math.cos(lon);
cameraN.position.x = 0.6 * Math.cos(lat) * Math.sin(lon);
cameraN.position.y = 0.6 * Math.sin(lat);
cameraN.lookAt(0, 80, 0);

cameraS.position.z = 0.6 * Math.cos(-lat) * Math.cos(lon);
cameraS.position.x = 0.6 * Math.cos(-lat) * Math.sin(lon);
cameraS.position.y = 0.6 * Math.sin(-lat);
cameraS.lookAt(0, -80, 0);

scene.add(cameraN);
scene.add(cameraS);

var textureFront = THREE.ImageUtils.loadTexture('textures/clock_face.png');
var textureBack = THREE.ImageUtils.loadTexture('textures/clock_gears.png');
var material1 = new THREE.MeshPhongMaterial({ color: 0xffffff, map: textureFront, transparent: true });
var material2 = new THREE.MeshPhongMaterial({ color: 0xffffff, map: textureBack, transparent: true });
const geometry1 = new THREE.PlaneGeometry(1, 1);
const geometry2 = new THREE.PlaneGeometry(1, 1);
geometry2.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));
const mesh1N = new THREE.Mesh(geometry1, material1);
const mesh2N = new THREE.Mesh(geometry2, material2);
const clockMeshN = new THREE.Object3D();
clockMeshN.add(mesh1N);
clockMeshN.add(mesh2N);
clockMeshN.rotation.x = (90 * Math.PI) / 180;
clockMeshN.rotation.y = (0 * Math.PI) / 180;
clockMeshN.rotation.z = (180 * Math.PI) / 180;
clockMeshN.position.y = 3;
scene.add(clockMeshN);

const mesh1S = new THREE.Mesh(geometry1, material1);
const mesh2S = new THREE.Mesh(geometry2, material2);
const clockMeshS = new THREE.Object3D();
clockMeshS.add(mesh1S);
clockMeshS.add(mesh2S);
clockMeshS.rotation.x = (-90 * Math.PI) / 180;
clockMeshS.rotation.y = (0 * Math.PI) / 180;
clockMeshS.rotation.z = (0 * Math.PI) / 180;
clockMeshS.position.y = -3;
scene.add(clockMeshS);

////////////////////////////////////

const controls = new OrbitControls(camera, renderer.domElement);
// const stats = new Stats();
// document.querySelector('body').appendChild(stats.dom);

const render = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  renderer.setSize(w, h);

  let left = Math.floor(w * 0);
  let bottom = Math.floor(h * 0);
  let width = Math.floor(w * 0.5);
  let height = Math.floor(h * 1);

  renderer.setViewport(left, bottom, width, height);
  renderer.setScissor(left, bottom, width, height);
  renderer.setScissorTest(true);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);

  left = Math.floor(w * 0.5);
  bottom = Math.floor(h * 0.5);
  width = Math.floor(w * 0.5);
  height = Math.floor(h * 0.5);

  renderer.setViewport(left, bottom, width, height);
  renderer.setScissor(left, bottom, width, height);
  renderer.setScissorTest(true);

  cameraN.aspect = width / height;
  cameraN.updateProjectionMatrix();

  renderer.render(scene, cameraN);

  left = Math.floor(w * 0.5);
  bottom = Math.floor(h * 0);
  width = Math.floor(w * 0.5);
  height = Math.floor(h * 0.5);

  renderer.setViewport(left, bottom, width, height);
  renderer.setScissor(left, bottom, width, height);
  renderer.setScissorTest(true);

  cameraS.aspect = width / height;
  cameraS.updateProjectionMatrix();

  renderer.render(scene, cameraS);
};

function rotateCam() {
  let x = cameraN.position.x;
  let y = cameraN.position.y;
  let z = cameraN.position.z;
  cameraN.position.x = x * Math.cos(aFifteenDegreePerHourDrift) + z * Math.sin(aFifteenDegreePerHourDrift);
  cameraN.position.z = z * Math.cos(aFifteenDegreePerHourDrift) - x * Math.sin(aFifteenDegreePerHourDrift);
  cameraN.lookAt(0, 2, 0);

  cameraS.position.x = cameraN.position.x;
  cameraS.position.z = cameraN.position.z;
  cameraS.lookAt(0, -2, 0);

  x = rodMesh.position.x;
  y = rodMesh.position.y;
  z = rodMesh.position.z;
  rodMesh.position.x = x * Math.cos(aFifteenDegreePerHourDrift) + z * Math.sin(aFifteenDegreePerHourDrift);
  rodMesh.position.z = z * Math.cos(aFifteenDegreePerHourDrift) - x * Math.sin(aFifteenDegreePerHourDrift);
}

const animate = () => {
  requestAnimationFrame(animate);
  earthMesh.rotation.y += aFifteenDegreePerHourDrift;
  cloudMesh.rotation.y += aFifteenDegreePerHourDrift * 0.84;

  rotateCam();
  controls.update();
  // stats.update();

  render();
};
animate();
