import * as THREE from 'three';

export default class BasicGeometry {
	constructor() {
		const geometry = new THREE.SphereBufferGeometry(1, 48, 24);
	  const material = new THREE.MeshStandardMaterial();
	  material.roughness = 0.5 * Math.random() + 0.25;
	  material.metalness = 0;
	  material.color.setHSL(Math.random(), 1.0, 0.3);
		material.transparent = true;
		material.opacity = 0.3;
	  const mesh = new THREE.Mesh(geometry, material);
		this.root = mesh;
	}
}
