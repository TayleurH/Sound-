
var mySound; 



function preload(){

mySound = loadSound('assets/doorbell.mp3');


}


function setup(){

	

}
function mousePressed() {
	  mySound.playMode('sustain');

    mySound.play();

}

function keyPressed() {
	//background(0);
	  mySound.playMode('restart');

    mySound.play();

}


