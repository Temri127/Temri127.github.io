var forward_button = document.getElementById("forward-button-image-scroll");
var back_button = document.getElementById("backward-button-image-scroll");
var bio = document.getElementById("bio");
/**
 * @type {HTMLImageElement}
 */
var image = document.getElementById("emil-main-bild");

const path = "./res/image/";

var index = 0;
var images = ["emil1.jpg", "emil2.jpg", "emil3.jpg", "emil4.jpg"];


forward_button.onclick = () => {
    index++;
    image.src = path + images[index%images.length];
};

back_button.onclick = () => {
    index--;
    if ( index < 0) {
        index = images.length;
    }
    image.src = path + images[index%images.length];
};

var clicked = false;
bio.onclick = () => {
    if(clicked) {
        speechSynthesis.pause();
        clicked = false;
    } else {
        if(speechSynthesis.paused) {
            speechSynthesis.resume();
            clicked = true;
        } else {
            let utterance = new SpeechSynthesisUtterance(bio.innerHTML.toLowerCase().replaceAll("snus", "snu-uus"));
            utterance.lang = "de-AT"
            speechSynthesis.speak(utterance);
            clicked = true;
        }
    }
};