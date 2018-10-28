import * as THREE from 'three';

export default class LightGroup {
	constructor() {
	  const light = new THREE.PointLight( 0xddffdd, 1.0 );
	  light.position.z = 70;
	  light.position.y = -70;
	  light.position.x = -70;
	  const light2 = new THREE.PointLight( 0xffdddd, 1.0 );
	  light2.position.z = 70;
	  light2.position.x = -70;
	  light2.position.y = 70;
	  const light3 = new THREE.PointLight( 0xddddff, 1.0 );
	  light3.position.z = 70;
	  light3.position.x = 70;
	  light3.position.y = -70;
		const group = new THREE.Group();
		group.add(light);
		group.add(light2);
		group.add(light3);
		this.root = group;
	}
}
