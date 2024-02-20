document.addEventListener('DOMContentLoaded', () => {
    const sceneEl = document.querySelector('a-scene');
    const videoEl = document.querySelector('#my-video');
    const playButton = document.getElementById('playButton');
    const startVideoButton = document.getElementById('startVideo');
    let videoIsPlaying = false;

    sceneEl.addEventListener('renderstart', () => {
        const exampleTarget = document.querySelector('#example-target');
        exampleTarget.addEventListener('targetFound', () => {
            playButton.style.display = 'block';
        });
        exampleTarget.addEventListener('targetLost', () => {
            playButton.style.display = 'none';
            videoEl.pause();
            videoIsPlaying = false;
        });
    });

    startVideoButton.addEventListener('click', () => {
        if (videoIsPlaying) {
            videoEl.pause();
            videoIsPlaying = false;
        } else {
            videoEl.play();
            videoIsPlaying = true;
        }
    });

    videoEl.addEventListener('click', () => {
        if (videoIsPlaying) {
            videoEl.pause();
            videoIsPlaying = false;
        } else {
            videoEl.play();
            videoIsPlaying = true;
        }
    });
});
