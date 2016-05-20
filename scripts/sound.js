var $ = require ('jquery');
var Howl = require('howler')

SoundEventListner('correct', '../sounds/correct.wav');
SoundEventListner('inocrrect', '../sounds/wrong.wav');

function SoundEventListner(eventName, path){
	var soundbite = new Howl({urls: path});
	soundbite.play()
	console.log("gotti")
}
console.log("yo")
