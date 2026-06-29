// =======================================
// WAJID FIFA PLAYER
// =======================================

const SERVER_1 = "https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8";
const SERVER_2 = "https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8";
const SERVER_3 = "https://1nyaler.streamhostingcdn.top/stream/26/index.m3u8";
const SERVER_4 = "https://ibb.co/wFQjMgJb";

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
