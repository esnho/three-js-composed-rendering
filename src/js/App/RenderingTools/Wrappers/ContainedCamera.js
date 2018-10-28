import * as THREE from 'three';

export default class ContainedCamera extends THREE.PerspectiveCamera {
	constructor(container, fov, near, far) {
    const aspectRatio = container.clientWidth / container.clientHeight;
		super(fov, aspectRatio, near, far);
		this.position.z = 7;
	}
}
