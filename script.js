function sayHello(name) {
  var name = document.getElementById("nameBox").value
  var message = document.getElementById("HelloMessage")
  message.innerHTML = "Yo, " + name + "."
}



const filepath = [100]
var crash = new Audio("soundpack/crash.wav");
var snare = new Audio("soundpack/snare.wav");
var hihat = new Audio("soundpack/hihat.wav");
var kick = new Audio("soundpack/kick.wav");
var ride = new Audio("soundpack/ride.wav");
filepath[65] = crash
filepath[83] = snare
filepath[68] = hihat
filepath[70] = kick
filepath[74] = ride

window.addEventListener('keydown', (x) => {
  filepath[x.keyCode].play()
})

function generate_tune(length) {
 var result = '';
 var characters = 'jsfad';
 var charactersLength = characters.length;
 for ( var i = 0; i < length; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength)) 
	 }
 return result
}

function play_song() {
	var tune = generate_tune(10)
	var element = document.getElementById("character_string")
	element.innerHTML = tune
	var current = 0
	window.addEventListener('keydown', (x) => {
  if (x.key == (tune[current])) {
    console.log("key " + (current +1) + " has been pressed!")
		current++
		
		element.style.color = "rgb(" + (255 - (current * 25)) + ", " + (current * 25) + ", 0)"
		if (current == 10){
			element.innerHTML = tune + "     WELL DONE"
			element.style.color= "rgb(0, 255, 0)"
			
		}
  }
})
}

