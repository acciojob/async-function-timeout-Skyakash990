//your JS code here. If required.
let text=document.getElementById("text");
let delay=document.getElementById("delay");
let btn=document.getElementById("btn");
let opDiv=document.getElementById("output");

btn.addEventListener("click",()=>{
	let tx=text.value.trim();
	let del=parseInt(delay.value);
	setTimeout(()=>{
		opDiv.textContent=tx;
	},del);
});
