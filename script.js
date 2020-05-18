var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var reset = document.querySelector(".reset");
var random = document.querySelector(".random");

var defaultgradient = [color1.value,color2.value]


function setGradient() {
	var x = color1.value;
	var y = color2.value;

	changeBG(x, y);
}

function resetGradient() {
	changeBG(defaultgradient[0], defaultgradient[1]);
}

function randomGradient() {
	var x = "#" + Math.floor(Math.random()*16777215).toString(16);;
	var y = "#" + Math.floor(Math.random()*16777215).toString(16);;

	changeBG(x, y);
}
function changeBG(x, y) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ x
	+ ", " 
	+ y
	+ ")";

	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

reset.addEventListener("click", resetGradient);

random.addEventListener("click", randomGradient);
