import * as THREE from 'three';

export default class WindowRenderer extends THREE.WebGLRenderer {
	constructor() {
		super();
		const devicePixelRatio = window.devicePixelRatio || 1;
	  this.setPixelRatio( devicePixelRatio );
    this.setSize(window.innerWidth, window.innerHeight);
	}
}
