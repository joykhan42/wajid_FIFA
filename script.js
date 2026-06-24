// ==========================
// WAJID FIFA SCRIPT
// ==========================

window.onload = function () {

    
    loadServer(1);


    let viewers = document.querySelector(".viewers");

    let count = 2450;

    setInterval(function () {

        count += Math.floor(Math.random()*5)-2;

        if(count<2000) count=2000;

        viewers.innerHTML="👁 "+count;

    },3000);

};


// Server Switch

function loadServer(number){

    switch(number){

        case 1:
            playStream(SERVER_1);
            break;

        case 2:
            playStream(SERVER_2);
            break;

        case 3:
            playStream(SERVER_3);
            break;

        case 4:
            playStream(SERVER_4);
            break;

    }

}
