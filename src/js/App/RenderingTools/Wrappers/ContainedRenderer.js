import * as THREE from 'three';

export default class ContainedRenderer extends THREE.WebGLRenderer {
	constructor(container) {
		super();
		const devicePixelRatio = window.devicePixelRatio || 1;
	  this.setPixelRatio( devicePixelRatio );
    this.setSize(container.clientWidth, container.clientHeight);
	}
}
