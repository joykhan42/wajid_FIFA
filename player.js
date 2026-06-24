// =======================================
// WAJID FIFA PLAYER
// =======================================

const SERVER_1 = "https://1nyaler.streamhostingcdn.top/stream/32/index.m3u8";
const SERVER_2 = "http://go8knm.optikl.ink/X/index.php/Besyria3/video.m3u8";
const SERVER_3 = "http://rgkkw.live/live/1Aoen7elp5/IgMJ60tmAa/130714.ts";
const SERVER_4 = "http://go8knm.optikl.ink/X/index.php/Besyria1/video.m3u8";

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
