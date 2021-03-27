let btn = document.getElementById('btn');
let color = document.getElementById('color');
let colorOutput = document.getElementById('colorOutput');

btn.addEventListener("click", function(){

		colorOutput.value = color.value;
	
		colorOutput.select();
		colorOutput.setSelectionRange(0, 99999);
		document.execCommand("copy");
		alert("Copied the hex color code: " + colorOutput.value);
});
