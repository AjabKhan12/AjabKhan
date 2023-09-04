document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('upload-form');
    const videoFileInput = document.getElementById('video-file');
    const videoPlayer = document.getElementById('video');

    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const file = videoFileInput.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            videoPlayer.src = videoUrl;
            videoPlayer.play();
        }
    });
});
