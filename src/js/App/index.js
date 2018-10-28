import LightGroup from './Objects/LightGroup.js';
import BasicGeometry from './Objects/BasicGeometry.js';
import SceneCameraRenderer from './RenderingTools/SceneCameraRenderer.js';
import ComposedRenderer from './RenderingTools/ComposedRenderer.js';

export default class App {
	constructor() {
		this.RenderTo = this.RenderTo.bind(this);
		this.AddVideoBackground = this.AddVideoBackground.bind(this);
	}

	RenderTo(target) {
		const lightGroup = new LightGroup();
		const basicGeometry = new BasicGeometry();
		this.renderScene = new SceneCameraRenderer(target);
		this.renderScene.Add(lightGroup);
		this.renderScene.Add(basicGeometry);
		this.renderScene.AppendToDom();
	}

  AddVideoBackground(videoElement) {
		this.videoElement = videoElement;
		this.composedRenderer = new ComposedRenderer(this.videoElement, this.renderScene);
  }
}
