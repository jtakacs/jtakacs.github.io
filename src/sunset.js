import * as THREE from 'three';
import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let kilometer = 1 / 10000;
let radius = 20e3; // = 12427.424 miles
let sunDistance = 4828.032; // = 3000 miles
let rotationRadius = 10e3;
let sunX = 0;
let sunZ = 0;
let showControls = true;

const scene = new THREE.Scene();

// const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);

const loader = new THREE.TextureLoader();

const canvas = document.querySelector('#canvas');
let renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0);

const starGeometry = new THREE.SphereGeometry(80, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
  map: loader.load('textures/TychoSkymapII.t3_04096x02048.jpg'),
  side: THREE.BackSide,
});
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

let ambient = 0.1;
const ambientlight = new THREE.AmbientLight(0xffffff, ambient);
scene.add(ambientlight);

let ch = 1e5 * kilometer;
let cr = radius * kilometer;
const geometry = new THREE.ConeGeometry(cr, ch, 64);
const materials = [
  new THREE.MeshBasicMaterial({ map: loader.load('textures/cone2.png') }), //
  new THREE.MeshBasicMaterial({ color: 0x000000 }),
  new THREE.MeshPhongMaterial({ map: loader.load('textures/Azimuthal_equidistant_projection_SW.png') }),
];
const cone = new THREE.Mesh(geometry, materials);
cone.rotation.x = Math.PI;
cone.position.y = ch / -2;
scene.add(cone);

const dunceGeometry = new THREE.ConeGeometry(260 * kilometer, 600 * kilometer, 64, 1, true);
const dunceMaterial = new THREE.MeshBasicMaterial({ map: loader.load('textures/dunce.png') });
const dunce = new THREE.Mesh(dunceGeometry, dunceMaterial);
dunce.position.y = (sunDistance + 320) * kilometer;
dunce.rotation.y = Math.PI;
scene.add(dunce);

const spriteMap = new THREE.TextureLoader().load('textures/sun.png');
const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap });
const sprite = new THREE.Sprite(spriteMaterial);
sprite.position.y = sunDistance * kilometer;
let sc = 10 * 51.499 * kilometer; // 10 x 32 miles, to make it visible
sprite.scale.set(sc, sc, sc);
scene.add(sprite);

let showlines = false;
let line = null;
const linematerial = new THREE.LineBasicMaterial({ color: 0x0000ff });

const spotLight = new THREE.SpotLight(0xffffff, 2, 0, 0.5, 1);
const target = new THREE.Object3D();
spotLight.position.set(0, sprite.position.y, 0);
spotLight.castShadow = true;
scene.add(target);
spotLight.target = target;
scene.add(spotLight);

const camera = new THREE.PerspectiveCamera(50, 2, kilometer, 1000);
camera.position.z = radius * kilometer;
camera.position.y = 1000 * kilometer;
camera.lookAt(0, (sunDistance * kilometer) / 2, 0);
scene.add(camera);

const controls = new OrbitControls(camera, renderer.domElement);

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

document.addEventListener('keydown', function (e) {
  if (e.code == 'KeyA') {
    ambient = Math.max(0, ambient - 0.01);
    ambientlight.intensity = ambient;
  }
  if (e.code == 'KeyD') {
    ambient = Math.min(1, ambient + 0.01);
    ambientlight.intensity = ambient;
  }
  if (e.code == 'Space') {
    camera.position.set(0, 1000 * kilometer, radius * kilometer);
    camera.lookAt(0, (sunDistance * kilometer) / 2, 0);
    controls.reset();
  }
  if (e.code == 'KeyW') {
    rotationRadius = Math.max(100, rotationRadius - 100);
  }
  if (e.code == 'KeyS') {
    rotationRadius = Math.min(radius, rotationRadius + 100);
  }
  if (e.code == 'KeyL') {
    showlines = !showlines;
  }
  if (e.code == 'KeyC') {
    showControls = !showControls;
    var obj = document.getElementById('overview');
    if (showControls) {
      obj.style.display = 'flex';
    } else {
      obj.style.display = 'none';
    }
  }
});

let lastTime = 0;
let angle = 0;
function render(time) {
  controls.update();

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  let deltaT = time - lastTime;
  lastTime = time;
  let speed = 1 / 100;
  angle = (angle + deltaT * speed) % 360;
  let a = (angle * Math.PI) / 180;

  sunX = rotationRadius * kilometer * Math.cos(a);
  sunZ = rotationRadius * kilometer * Math.sin(a);

  sprite.position.x = sunX;
  sprite.position.z = sunZ;

  dunce.position.x = sunX;
  dunce.position.z = sunZ;

  spotLight.position.x = sunX;
  spotLight.position.z = sunZ;

  target.position.x = sunX;
  target.position.z = sunZ;

  let q = Math.pow(sunX, 2) + Math.pow(sunDistance * kilometer, 2) + Math.pow(sunZ - radius * kilometer, 2);
  let sunAngle = (Math.asin((sunDistance * kilometer) / Math.sqrt(q)) * 180) / Math.PI;

  document.getElementById('angle').innerText = sunAngle.toFixed(3);

  if (showlines) {
    const points = [];
    points.push(new THREE.Vector3(sunX, sunDistance * kilometer, sunZ));
    points.push(new THREE.Vector3(sunX, 0, sunZ));
    points.push(new THREE.Vector3(100 * kilometer, 0, radius * kilometer));
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
    if (line != null) {
      scene.remove(line);
      line = null;
    }
    line = new THREE.LineLoop(linegeometry, linematerial);
    scene.add(line);
  } else {
    if (line != null) {
      scene.remove(line);
      line = null;
    }
  }

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
