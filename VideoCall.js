'use strict';

const videoConstraints = {
    audio :false,
    video:{width:1280, height:720}
};

document.querySelector('#showVideo').addEventListener('click',e => initialize(e))

//initialize function to req and handle media stream
async function initialize(e){
    try{
        const stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
        attachVideoStream(stream);
        storeVideo(stream)
        e.target.disabled = true; //diable button
    }
    catch(errror){
        onCatch(errror);
    }
}

//acquire media stream
function attachVideoStream(stream){
    const videoElement = document.querySelector('video');
    window.stream = stream;
    videoElement.srcObject = stream;
}

//function to handle error
function onCatch(error){
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>Something went wrong: ${error.name}</p>`
}

function storeVideo(stream){
    videos = stream.getVideoTracks();
     errorElement.innerHTML += `<p>Something went wrong: ${videos}</p>`
}
