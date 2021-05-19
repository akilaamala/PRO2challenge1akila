var textBlock = document.createElement("INPUT");
	textBlock.setAttribute("type", "text");

	function calculate (){
		let throttleValue = document.getElementById('throttle-value').value;
		let value = Number(throttleValue); 
if (Number.isNaN(value)){
	alert("enter a number");
}else {
	if (value > 100){

		alert('value too high!');
	}
	else {
		alert('engage');
		document.getElementById('speed-value').value = value * 120;
		document.getElementById('fuel-value').value = value * 0.5;
	}
}
}

function checkSupplies (){
	let foodValue = document.getElementById('food-value').value;
	let waterValue = document.getElementById('water-value').value;
	let daysLeft = document.getElementById('days-left').value = Math.ceil (Number(foodValue) / 3);
}

function gravityConverter (){
    let mass1 = document.getElementById('planet-mass').value;
    let distance = document.getElementById('distance-value').value;
    document.getElementById('gravity-value').value = Number(mass1) * Number(distance); 
    }