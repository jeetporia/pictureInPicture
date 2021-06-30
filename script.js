const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        // we are getting here which video or source you want to stream.
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        // when video completes collecting its metadata it will call play function
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // use custom error when you have so many async function to identify which function is breaking..
        console.log('ugh... Error', error)
    }
}

button.addEventListener('click', async () => {
    // disable the button while requesting resource
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset the button once this is done.
    button.disabled = false;
})

selectMediaStream();