import * as THREE from 'three';
import EffectComposer, {
	TexturePass,
  RenderPass,
  ShaderPass,
  CopyShader,
  CubeTexturePass,
  ClearPass
} from '@johh/three-effectcomposer';

export default class ComposedRenderer {
	constructor(backGroundVideo, renderScene) {
		this.renderScene = renderScene;
		this.videoElement = backGroundVideo;

		this.composer = new EffectComposer(this.renderScene.renderer);

	  const clearPass = new ClearPass( 'white', 0.1 );
	  this.composer.addPass(clearPass);

	  const texturePass = new TexturePass();
	  this.composer.addPass(texturePass);
		this.AttachTextureToPass(this.videoElement, texturePass);

		const renderPass = new RenderPass(
			this.renderScene.scene,
			this.renderScene.camera
		);
		renderPass.clear = false;
		this.composer.addPass(renderPass);

		const copyPass = new ShaderPass(CopyShader);
		copyPass.renderToScreen = true;
		this.composer.addPass(copyPass);

		this.renderScene.SetRenderTarget(this.composer);
	}

	AttachTextureToPass(videoElement, texturePass) {
		const texture = new THREE.VideoTexture(videoElement);
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		texture.format = THREE.RGBFormat;

		texturePass.map = texture;
	}
}
