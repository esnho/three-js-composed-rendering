import * as THREE from 'three';
import ContainedRenderer from './Wrappers/ContainedRenderer.js';
import ContainedCamera from './Wrappers/ContainedCamera.js';

export default class SceneCameraRenderer {
	constructor (container) {
		this.container = container;
		this.clock = new THREE.Clock();
	  this.scene = new THREE.Scene();
		this.camera = new ContainedCamera(this.container, 65, 1, 100);
		this.renderer = new ContainedRenderer(this.container);
		this.renderToUpdate = this.renderer;
		this.updatables = [];

		this.AppendToDom = this.AppendToDom.bind(this);
		this.SetRenderTarget = this.SetRenderTarget.bind(this);
		this.Update = this.Update.bind(this);

		this.Update();
	}

	AppendToDom() {
		(this.container ? this.container : document.body)
		.appendChild(this.renderer.domElement);
	}

  Add(object) {
    this.scene.add(object.root);
    if (object.update) {
      this.updatables.push(object);
    }
    object.OnDie = () => {
      this.Remove(object);
    };
  }

  Remove(object) {
    this.scene.remove(object.root);

    this.updatables = this.updatables
		.filter(
      obj => obj.root.uuid !== object.root.uuid
    );
  }

	SetRenderTarget(target) {
		this.renderToUpdate = target;
	}

	Update() {
    const timeElapsed = this.clock.getElapsedTime();

    for (let updatable of this.updatables) {
      updatable.update(timeElapsed);
    }

		this.renderToUpdate
		.render(this.scene, this.camera);
		//this.camera.updateMatrixWorld( true );

		requestAnimationFrame(() => this.Update());
  }
}
