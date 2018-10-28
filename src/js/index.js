require('../css/style.css');
import App from './App';

window.onload = () => {
	const target = document.getElementById( "container-two" );
	const app = new App();
	app.RenderTo(target);

	const videoElement = document.createElement('video');
	videoElement.id = "video-element";
	videoElement.autoplay = true;
	videoElement.style.display = 'none';
	document.body.append(videoElement);

  navigator.mediaDevices
	.getUserMedia({video: true})
  .then((stream) => {
      videoElement.srcObject = stream;
			app.AddVideoBackground(videoElement);
    }
  );
}
