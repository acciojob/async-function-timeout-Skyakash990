//your JS code here. If required.
let text=document.getElementById("text");
let delay=document.getElementById("delay");
let btn=document.getElementById("btn");
let opDiv=document.getElementById("output");

btn.addEventListener("click",async ()=>{
	let tx=text.value.trim();
	let del=parseInt(delay.value);

	let p=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},del);
	})
	let res=await p;
	opDiv.innerText=tx;
});
