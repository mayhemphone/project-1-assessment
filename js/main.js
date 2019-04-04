document.addEventListener('DOMContentLoaded', function(){
	startUp()
})


function startUp (){
	document.getElementById('minus').addEventListener("click",down)
	document.getElementById('plus').addEventListener("click",up)

}

function mathTime (direction){
	
	// grabs current number being displayed in int form
	var currentDisp = parseInt(document.getElementById('display').innerText)

	// grabs current number in the input boxin int form
	var inputNum = parseInt(document.getElementById('num').value)
	var solution
	
	// make sure text box isn't empty.  if it is, set to 0
	if (!inputNum) {
		document.getElementById('num').value = 0
		inputNum = 0
	}

	// do the math depending on which button called this
	if (direction === "down") {
		solution = currentDisp - inputNum

	} else {
		solution = currentDisp + inputNum
	}

	document.getElementById('display').innerText = solution

	if (solution < 0 ){
		document.getElementById('display').style.color = "#F00"
	} else {
		document.getElementById('display').style.color = "#000"
	}

}

function down (){
	mathTime("down")
	
}
function up (){
	mathTime("up")
	
}

