// =======================================
// WAJID FIFA PLAYER
// =======================================

const SERVER_1 = "";
const SERVER_2 = "";
const SERVER_3 = "";
const SERVER_4 = "";

const video = document.getElementById("video");

function playStream(url){

    if(!url){
        alert("Server URL not added.");
        return;
    }

    if(Hls.isSupported()){

        if(window.hls){
            window.hls.destroy();
        }

        window.hls = new Hls();

        window.hls.loadSource(url);

        window.hls.attachMedia(video);

    }else if(video.canPlayType("application/vnd.apple.mpegurl")){

        video.src = url;

    }

}
